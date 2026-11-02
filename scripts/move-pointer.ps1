param([int]$OwnerPid=0)
$ErrorActionPreference='Stop'
try {
    Add-Type -Path (Join-Path $PSScriptRoot 'physical-mouse.cs')
    [PhysicalMouse]::Run($OwnerPid)
} catch { [Console]::Out.WriteLine('ERROR|startup');[Console]::Out.Flush();exit 1 }
