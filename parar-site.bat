@echo off
setlocal

set "PORT=3000"

for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%PORT% " ^| findstr "LISTENING"') do (
  echo Parando processo da porta %PORT%: %%a
  taskkill /PID %%a /F
)

echo Porta %PORT% liberada.
pause
