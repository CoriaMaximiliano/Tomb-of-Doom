@echo off
setlocal EnableExtensions
chcp 65001 >nul
title Tomb of Doom — instalador
echo.
echo Bajando el cliente (Launcher + configuracion) en tu carpeta de usuario...
echo Carpeta: %USERPROFILE%\TombOfDoom
echo.

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference='Stop';" ^
  "$u='https://github.com/CoriaMaximiliano/Tomb-of-Doom/releases/latest/download/TombOfDoom_client.zip';" ^
  "$nc=[DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds();" ^
  "$z=Join-Path $env:TEMP ('tod_client_'+[guid]::NewGuid().ToString('n')+'.zip');" ^
  "$d=Join-Path $env:USERPROFILE 'TombOfDoom';" ^
  "Invoke-WebRequest -Uri ($u+'?nocache='+$nc) -Headers @{'Cache-Control'='no-store'} -UseBasicParsing -OutFile $z;" ^
  "[void](New-Item -ItemType Directory -Path $d -Force);" ^
  "Expand-Archive -LiteralPath $z -DestinationPath $d -Force;" ^
  "Remove-Item -LiteralPath $z -Force -ErrorAction SilentlyContinue;" ^
  "Start-Process explorer.exe -ArgumentList $d"

if errorlevel 1 (
  echo.
  echo No se pudo instalar. Si el error fue "Not Found" (404), en GitHub falta subir
  echo el archivo TombOfDoom_client.zip a la ULTIMA release publicada, con ese nombre exacto.
  echo URL que se intento bajar:
  echo https://github.com/CoriaMaximiliano/Tomb-of-Doom/releases/latest/download/TombOfDoom_client.zip
  echo Copiala en el navegador: si da 404, hay que adjuntar el zip en Releases.
  echo.
  echo Tambien puede ser internet, firewall o antivirus.
  pause
  exit /b 1
)

echo.
echo Listo. Se abrio la carpeta TombOfDoom.
echo Ahora hace doble clic en TombOfDoomLauncher.bat
echo.
pause
endlocal
