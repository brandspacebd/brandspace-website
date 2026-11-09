@echo off
setlocal enabledelayedexpansion

:: Set console title
title BrandSpace Website - Local Dev Server

:: Ensure current working directory is the project root
cd /d "%~dp0"

echo ======================================================================
echo             BrandSpace Agency Website - Local Dev Server              
echo ======================================================================
echo.

:: 1. Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not found in your system PATH.
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: 2. Check dependencies (node_modules)
if not exist "node_modules\" (
    echo [INFO] Dependencies not found. Installing packages with npm...
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo.
        echo [ERROR] 'npm install' failed. Please inspect the errors above.
        pause
        exit /b 1
    )
    echo.
)

:: 3. Find an available port starting from 3000
echo [INFO] Checking for an available port starting from 3000...
for /f "usebackq tokens=*" %%P in (`node -e "const net=require('net');function check(p){const c=new net.Socket();c.setTimeout(200);c.once('connect',()=>{c.destroy();check(p+1);});c.once('error',()=>{c.destroy();const s=net.createServer();s.once('error',()=>check(p+1));s.once('listening',()=>s.close(()=>console.log(p)));s.listen(p);});c.connect(p,'127.0.0.1');}check(3000);"` ) do (
    set "PORT=%%P"
)

if "%PORT%"=="" set "PORT=3000"

echo [INFO] Selected port: %PORT%
echo.
echo ======================================================================
echo   Local URL:    http://localhost:%PORT%
echo   Status:       Starting Next.js dev server...
echo   Auto-Launch:  Your default browser will open as soon as it's ready.
echo   To Stop:      Press Ctrl+C in this window.
echo ======================================================================
echo.

:: 4. Background worker to wait until server is listening, then open browser
start /b "" node -e "const http=require('http');const {exec}=require('child_process');const port=process.argv[1];let attempts=0;function poll(){if(++attempts>75){exec('start http://localhost:'+port);process.exit(0);}const req=http.get('http://127.0.0.1:'+port,(res)=>{res.resume();exec('start http://localhost:'+port);process.exit(0);});req.on('error',()=>setTimeout(poll,400));}setTimeout(poll,600);" %PORT%

:: 5. Start Next.js development server
set "PORT=%PORT%"
call npm run dev -- -p %PORT%

:: If the server exits with an error, pause so the user can read the console
if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] The server exited with error code %ERRORLEVEL%.
    pause
)
