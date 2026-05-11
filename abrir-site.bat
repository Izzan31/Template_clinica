@echo off
setlocal

cd /d "%~dp0"

set "HOST=127.0.0.1"
set "PORT=3000"
set "URL=http://localhost:3000/"

set "NODE_EXE=node"
if exist "%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe" (
  set "NODE_EXE=%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe"
)

if not exist "node_modules\next\dist\bin\next" (
  echo Dependencias nao encontradas.
  echo Abra o terminal nesta pasta e rode a instalacao do projeto antes de usar este atalho.
  pause
  exit /b 1
)

echo Abrindo %URL%
start "" "%URL%"
echo.
echo Servidor iniciado. Mantenha esta janela aberta enquanto usa o site.
echo Para parar, feche esta janela ou execute parar-site.bat.
echo.

"%NODE_EXE%" "node_modules\next\dist\bin\next" dev --hostname %HOST% --port %PORT%

pause
