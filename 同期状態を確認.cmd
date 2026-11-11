@echo off
chcp 65001 >nul
node "%~dp0scripts\status.mjs"
set "WIKI_STATUS_EXIT=%ERRORLEVEL%"
pause
exit /b %WIKI_STATUS_EXIT%
