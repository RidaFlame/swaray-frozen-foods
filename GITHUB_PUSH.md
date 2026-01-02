# How to Push to GitHub

## Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `swaray-frozen-foods` (or your preferred name)
3. Description: "Premium frozen food showcase website"
4. Choose Public or Private
5. **DO NOT** check "Initialize with README"
6. Click "Create repository"

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/swaray-frozen-foods.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using SSH

If you have SSH keys set up:

```bash
git remote add origin git@github.com:YOUR_USERNAME/swaray-frozen-foods.git
git branch -M main
git push -u origin main
```

## That's it! 🎉

Your code is now on GitHub. You can view it at:
`https://github.com/YOUR_USERNAME/swaray-frozen-foods`

