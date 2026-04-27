@echo off
setlocal EnableExtensions
chcp 65001 >nul
title Tomb of Doom — instalador
echo.
echo Bajando TowerDefense.exe y TowerDefense.pck (ultima release de GitHub)...
echo Carpeta: %USERPROFILE%\TombOfDoom
echo.

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference='Stop';" ^
  "$base='https://github.com/CoriaMaximiliano/Tomb-of-Doom/releases/latest/download/';" ^
  "$nc=[DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds();" ^
  "$d=Join-Path $env:USERPROFILE 'TombOfDoom';" ^
  "[void](New-Item -ItemType Directory -Path $d -Force);" ^
  "$exeTmp=Join-Path $env:TEMP ('tod_exe_'+[guid]::NewGuid().ToString('n')+'.tmp');" ^
  "$pckTmp=Join-Path $env:TEMP ('tod_pck_'+[guid]::NewGuid().ToString('n')+'.tmp');" ^
  "try {" ^
  "  Invoke-WebRequest -Uri ($base+'TowerDefense.exe?nocache='+$nc) -Headers @{'Cache-Control'='no-store'} -UseBasicParsing -OutFile $exeTmp;" ^
  "  Invoke-WebRequest -Uri ($base+'TowerDefense.pck?nocache='+$nc) -Headers @{'Cache-Control'='no-store'} -UseBasicParsing -OutFile $pckTmp;" ^
  "  Move-Item -LiteralPath $exeTmp -Destination (Join-Path $d 'TowerDefense.exe') -Force;" ^
  "  Move-Item -LiteralPath $pckTmp -Destination (Join-Path $d 'TowerDefense.pck') -Force;" ^
  "} finally {" ^
  "  Remove-Item -LiteralPath $exeTmp -Force -ErrorAction SilentlyContinue;" ^
  "  Remove-Item -LiteralPath $pckTmp -Force -ErrorAction SilentlyContinue;" ^
  "}" ^
  "Start-Process explorer.exe -ArgumentList $d"

if errorlevel 1 (
  echo.
  echo No se pudo instalar. Si el error fue "Not Found" (404), en GitHub falta subir
  echo TowerDefense.exe y TowerDefense.pck a la ULTIMA release publicada, con esos nombres exactos.
  echo URLs:
  echo https://github.com/CoriaMaximiliano/Tomb-of-Doom/releases/latest/download/TowerDefense.exe
  echo https://github.com/CoriaMaximiliano/Tomb-of-Doom/releases/latest/download/TowerDefense.pck
  echo.
  echo Tambien puede ser internet, firewall o antivirus.
  pause
  exit /b 1
)

echo.
echo Listo. Se abrio la carpeta TombOfDoom.
echo Ejecuta TowerDefense.exe (debe estar junto a TowerDefense.pck).
echo.
pause
endlocal
