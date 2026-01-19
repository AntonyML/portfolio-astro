@echo off
echo Iniciando Cloudflare Tunnel en el puerto 3000...
"d:\Ano_2025_UCR\InfoAplicada\Proyecto\cloudflared.exe" tunnel --url http://localhost:3000
pause