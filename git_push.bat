@echo off
cd /d "%~dp0"

echo Configuring Git...
git config user.name "PrathameshML"
git config user.email "prathamesh@example.com"

echo.
echo Committing files...
git commit -m "Initial commit: Vijay Krushi Avajare website"

echo.
echo Creating main branch...
git branch -M main

echo.
echo Adding remote repository...
git remote add origin https://github.com/PrathameshML/vijay-krushi-avajare.git

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ============================================
echo DONE! Your website is now on GitHub!
echo ============================================
echo.
echo View at: https://github.com/PrathameshML/vijay-krushi-avajare
echo.
pause
