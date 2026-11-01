param([ValidateSet('de-DE','en-GB','zh-CN','ja-JP','es-ES','pt-BR')][string]$RecognitionCulture='de-DE')
$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
try {
    Add-Type -AssemblyName System.Speech
    $available = [System.Speech.Recognition.SpeechRecognitionEngine]::InstalledRecognizers()
    $selected = $available | Where-Object { $_.Culture.Name -eq $RecognitionCulture } | Select-Object -First 1
    if ($null -eq $selected) {
        Write-Output ('ERROR|speech-language-unavailable|'+$RecognitionCulture)
        exit 2
    }
    $engine = New-Object System.Speech.Recognition.SpeechRecognitionEngine -ArgumentList $selected
    try {
        $grammar = New-Object System.Speech.Recognition.DictationGrammar
        $engine.LoadGrammar($grammar)
        $engine.InitialSilenceTimeout = [TimeSpan]::FromSeconds(8)
        $engine.EndSilenceTimeout = [TimeSpan]::FromMilliseconds(850)
        $engine.BabbleTimeout = [TimeSpan]::FromSeconds(6)
        $engine.SetInputToDefaultAudioDevice()
        $result = $engine.Recognize([TimeSpan]::FromSeconds(9))
        if ($null -ne $result -and -not [string]::IsNullOrWhiteSpace($result.Text)) {
            $encoded = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($result.Text))
            Write-Output "TEXT|$encoded"
        } else {
            Write-Output 'EMPTY|'
        }
    } finally { $engine.Dispose() }
} catch {
    $msg = $_.Exception.Message -replace '[\r\n|]', ' '
    Write-Output "ERROR|$msg"
    exit 1
}
