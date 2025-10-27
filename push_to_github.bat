@echo off
echo Setting up Git...
git config user.name "Prathamesh"
git config user.email "your-email@example.com"

echo Committing files...
git commit -m "Initial commit: Vijay Krushi Avajare website"

echo Creating main branch...
git branch -M main

echo.
echo ============================================
echo NEXT STEPS:
echo ============================================
echo 1. Create a new repository on GitHub
echo 2. Copy the repository URL
echo 3. Run this command (replace with your URL):
echo.
echo    git remote add origin YOUR_GITHUB_REPO_URL
echo    git push -u origin main
echo.
echo ============================================
pause
