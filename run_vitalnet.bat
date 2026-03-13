@echo off
echo ==========================================
echo    VitalNet Portable Setup Wizard
echo ==========================================
echo Checking dependencies...

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js not found. Please install it from https://nodejs.org/
    pause
    exit /b
)

echo [1/3] Installing dependencies (this may take a minute)...
call npm install

echo [2/3] Building the production application...
call npm run build

echo [3/3] Starting VitalNet...
echo Open http://localhost:3000 in your browser.
call npm start
