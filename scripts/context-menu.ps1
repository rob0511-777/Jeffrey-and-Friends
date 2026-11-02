param([int]$OwnerPid)
$ErrorActionPreference='Stop'
[Console]::InputEncoding=[System.Text.UTF8Encoding]::new($false)
[Console]::OutputEncoding=[System.Text.UTF8Encoding]::new($false)
$windows=$null
try {
    Add-Type -AssemblyName UIAutomationTypes
    Add-Type -AssemblyName UIAutomationClient
    Add-Type -AssemblyName WindowsBase
    $refs=@([System.Windows.Automation.AutomationElement].Assembly.Location,[System.Windows.Automation.ControlType].Assembly.Location,[System.Windows.Rect].Assembly.Location,'System.dll','System.Core.dll')
    Add-Type -ReferencedAssemblies $refs -Path (Join-Path $PSScriptRoot 'context-menu.cs')
    $windows=[NativeMenuWindows]::new()
    $menus=[UiaContextMenus]::new($windows,$OwnerPid)
    while ($null -ne ($line=[Console]::In.ReadLine())) {
        $id=0
        try {
            if ($line.Length -gt 8192) {throw 'Invalid request'}
            $request=$line|ConvertFrom-Json
            $id=[long]$request.id
            if ($id -le 0) {throw 'Invalid request'}
            $a=$request.args
            $value=switch ([string]$request.operation) {
                'open' {$menus.Open([int]$a.pid,[string]$a.window,[int]$a.x,[int]$a.y);break}
                'inspect' {$menus.Inspect([int]$a.token);break}
                'execute' {$menus.Execute([int]$a.token,[int]$a.item,[string]$a.kind);break}
                'close' {$menus.Close([int]$a.token);break}
                default {throw 'Invalid operation'}
            }
            $reply=@{ok=$true;value=$value}
        } catch {
            $code='provider-error';$cause=$_.Exception.GetBaseException()
            if ($cause -is [MenuFault]) {$code=$cause.Code}
            $reply=@{ok=$false;code=$code}
        }
        $json=$reply|ConvertTo-Json -Depth 8 -Compress
        [Console]::Out.WriteLine('DATA|'+$id+'|'+[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($json)))
        [Console]::Out.Flush()
        $line=$null;$request=$null;$reply=$null;$value=$null;$json=$null
    }
} catch {[Console]::Out.WriteLine('ERROR|startup');[Console]::Out.Flush();exit 1}
finally {if ($windows) {$windows.Dispose()}}
