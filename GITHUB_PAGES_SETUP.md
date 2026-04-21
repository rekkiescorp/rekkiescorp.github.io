# GitHub Pages Deployment Guide for REKKIES

## Current Status

✅ **Manus Hosting (Live):** https://rekkieshq-gva28wtq.manus.space

⏳ **GitHub Pages:** Requires manual configuration (see steps below)

## The Issue

The `gh-pages` branch has been created and pushed with all the built files, but GitHub Pages is still configured to deploy from the `main` branch. The API requires special permissions to update this setting, so you'll need to configure it manually.

## How to Fix the 404 Error

### Step 1: Go to GitHub Pages Settings
1. Visit: https://github.com/rekkiescorp/rekkies.github.io/settings/pages
2. Log in if prompted

### Step 2: Change the Deployment Branch
1. Under **"Build and deployment"** section
2. Find the **"Source"** dropdown (currently set to "main")
3. Change it to **"gh-pages"**
4. Keep the path as **"/ (root)"**
5. Click **"Save"**

### Step 3: Wait for Deployment
- GitHub will automatically rebuild and deploy from the `gh-pages` branch
- This typically takes 1-2 minutes
- Once complete, your site will be live at: https://rekkiescorp.github.io

## Automated Deployment Script

For future updates, use this script to rebuild and deploy:

```bash
#!/bin/bash
cd /home/ubuntu/rekkies
GITHUB_PAGES=true pnpm run build
cd /home/ubuntu/gh-pages-temp
rm -rf *
cp -r /home/ubuntu/rekkies/dist/public/* .
git add .
git commit -m "Deploy REKKIES - $(date)"
git push origin HEAD:gh-pages
```

## Deployment URLs

- **Manus (Primary):** https://rekkieshq-gva28wtq.manus.space
- **GitHub Pages (After configuration):** https://rekkiescorp.github.io

Both versions are identical and feature:
- Official REKKIES crown logo
- Neon cyberpunk design with Fredoka font
- Brand colors: Black, White, Cyan (#00F7FF), Magenta (#FA00FF)
- REKKIES Club section (Money, Music, Movies)
- REKKIES Records section
- REKKIES Corp section
- Direct link to upgrade.chat/rekkies
