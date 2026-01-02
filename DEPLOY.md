# GitHub Pages Deployment Guide

## Option 1: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys your site when you push to the `main` branch.

### Steps:
1. Go to your repository settings on GitHub
2. Navigate to **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to `main`

## Option 2: Manual Deployment

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. Copy the contents of the `dist` folder to the root of your repository (or to a `docs` folder)

3. Commit and push:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

4. In GitHub repository settings → Pages:
   - Source: Select the branch (main) and folder (root or /docs)
   - Click Save

## Important Notes:

- The site uses **HashRouter** which works perfectly with GitHub Pages
- Your site URL will be: `https://RidaFlame.github.io/swaray-frozen-foods`
- After deployment, wait a few minutes for the site to be live
- Clear your browser cache if you see a white screen

## Troubleshooting:

If you see a white screen:
1. Check browser console (F12) for errors
2. Make sure all files in `dist` are committed
3. Wait 5-10 minutes after pushing for GitHub Pages to update
4. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

