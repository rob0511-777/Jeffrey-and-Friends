# Keep source ASCII for Windows PowerShell 5.1; command phrases arrive as UTF-8 JSON.
$ErrorActionPreference='Stop'
[Console]::InputEncoding=[System.Text.UTF8Encoding]::new($false)
[Console]::OutputEncoding=[System.Text.UTF8Encoding]::new($false)
$engine=$null
try {
    $config=[Console]::In.ReadLine() | ConvertFrom-Json
    if ($config.commands.Count -gt 4000 -or $config.names.Count -gt 30) { throw 'Invalid grammar' }
    Add-Type -AssemblyName System.Speech
    $recognizer=[System.Speech.Recognition.SpeechRecognitionEngine]::InstalledRecognizers() | Where-Object {$_.Culture.Name -eq [string]$config.locale} | Select-Object -First 1
    if ($null -eq $recognizer) { [Console]::Out.WriteLine('ERROR|missing-recognizer|'+[string]$config.locale);[Console]::Out.Flush();exit 2 }
    $engine=[System.Speech.Recognition.SpeechRecognitionEngine]::new($recognizer)
    $names=[System.Speech.Recognition.Choices]::new();$names.Add([string[]]$config.names)
    $namePart=[System.Speech.Recognition.GrammarBuilder]::new();$namePart.Culture=$recognizer.Culture;$namePart.Append($names)
    $please=[System.Speech.Recognition.GrammarBuilder]::new();$please.Culture=$recognizer.Culture;$please.Append([string]$config.please)
    # Include explicit negations/reported speech so they can be rejected by the
    # deterministic parser instead of being silently reduced to a valid cell.
    $blocked=[System.Speech.Recognition.Choices]::new();$blocked.Add([string[]]$config.blocked)
    $blockedPart=[System.Speech.Recognition.GrammarBuilder]::new();$blockedPart.Culture=$recognizer.Culture;$blockedPart.Append($blocked)
    $commands=[System.Speech.Recognition.Choices]::new();$commands.Add([string[]]$config.commands)
    $builder=[System.Speech.Recognition.GrammarBuilder]::new();$builder.Culture=$recognizer.Culture
    $builder.Append($namePart,0,1);$builder.Append($please,0,1);$builder.Append($blockedPart,0,1);$builder.Append($commands)
    $commandGrammar=[System.Speech.Recognition.Grammar]::new($builder);$commandGrammar.Name='Grid';$engine.LoadGrammar($commandGrammar)
    if (@($config.wakeWords).Count -gt 0) {
        $wakeChoices=[System.Speech.Recognition.Choices]::new();$wakeChoices.Add([string[]]$config.wakeWords)
        $wakeBuilder=[System.Speech.Recognition.GrammarBuilder]::new();$wakeBuilder.Culture=$recognizer.Culture;$wakeBuilder.Append($wakeChoices)
        $wakeGrammar=[System.Speech.Recognition.Grammar]::new($wakeBuilder);$wakeGrammar.Name='Wake';$engine.LoadGrammar($wakeGrammar)
    }
    $engine.EndSilenceTimeout=[TimeSpan]::FromMilliseconds(180)
    $engine.EndSilenceTimeoutAmbiguous=[TimeSpan]::FromMilliseconds(300)
    $engine.SetInputToDefaultAudioDevice()
    Register-ObjectEvent -InputObject $engine -EventName SpeechRecognized -SourceIdentifier 'MouseGridSpeech' | Out-Null
    $engine.RecognizeAsync([System.Speech.Recognition.RecognizeMode]::Multiple)
    [Console]::Out.WriteLine('READY');[Console]::Out.Flush()
    while ($true) {
        $event=Wait-Event -SourceIdentifier 'MouseGridSpeech' -Timeout 1
        if ($null -eq $event) { continue }
        $result=$event.SourceEventArgs.Result
        if ($result.Grammar.Name -eq 'Wake') {
            if ($result.Confidence -ge 0.65) { [Console]::Out.WriteLine('WAKE');[Console]::Out.Flush() }
            Remove-Event -EventIdentifier $event.EventIdentifier
            continue
        }
        $stop=$false
        foreach ($word in $config.stops) { if ($result.Text.EndsWith([string]$word,[StringComparison]::OrdinalIgnoreCase)) { $stop=$true } }
        if ($result.Confidence -ge 0.65 -or ($stop -and $result.Confidence -ge 0.45)) {
            [Console]::Out.WriteLine('TEXT|'+[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($result.Text)))
            [Console]::Out.Flush()
        }
        Remove-Event -EventIdentifier $event.EventIdentifier
    }
} catch { [Console]::Out.WriteLine('ERROR|recognizer');[Console]::Out.Flush();exit 1 }
finally { if ($engine) { try{$engine.RecognizeAsyncCancel()}catch{};try{Unregister-Event -SourceIdentifier 'MouseGridSpeech'}catch{};$engine.Dispose() } }
