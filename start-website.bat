@echo off
title Urbanfarmz Development Server
echo Starting Urbanfarmz website...
cd /d "%~dp0"
call npm run dev
pause

