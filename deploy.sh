#!/bin/bash
# Bash script to deploy to GitHub Pages
# This copies the dist folder contents to the root for GitHub Pages deployment

echo "Building project..."
npm run build

echo ""
echo "Copying dist files to root..."

# Copy all files from dist to root
cp -r dist/* .

echo ""
echo "Files copied! Now commit and push:"
echo "  git add ."
echo "  git commit -m 'Deploy website'"
echo "  git push"
echo ""
echo "Done! Your site should be live in a few minutes."

