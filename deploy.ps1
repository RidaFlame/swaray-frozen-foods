# PowerShell script to deploy to GitHub Pages
# This copies the dist folder contents to the root for GitHub Pages deployment

Write-Host "Building project..." -ForegroundColor Green
npm run build

Write-Host "`nCopying dist files to root..." -ForegroundColor Green

# Copy all files from dist to root
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

Write-Host "`nFiles copied! Now commit and push:" -ForegroundColor Yellow
Write-Host "  git add ." -ForegroundColor Cyan
Write-Host "  git commit -m 'Deploy website'" -ForegroundColor Cyan
Write-Host "  git push" -ForegroundColor Cyan

Write-Host "`nDone! Your site should be live in a few minutes." -ForegroundColor Green

