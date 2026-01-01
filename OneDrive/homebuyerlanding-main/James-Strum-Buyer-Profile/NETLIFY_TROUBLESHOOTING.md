# Netlify 404 Error - Troubleshooting Guide

## The Problem
You're seeing "Page not found" even though the build is successful.

## Most Common Fix (90% of cases)

### Step 1: Verify Build Settings in Netlify Dashboard

1. Go to your Netlify site dashboard: https://app.netlify.com/
2. Click on your site name
3. Go to **Site settings** (top menu)
4. Click **Build & deploy** in the left sidebar
5. Scroll to **Build settings** section
6. Click **Edit settings**

**VERIFY THESE EXACT VALUES:**
- **Build command:** `npm run build`
- **Publish directory:** `out` (NOT `.next` or `dist`)

7. Click **Save**

### Step 2: Clear Cache and Redeploy

1. Go back to your site dashboard
2. Click **Deploys** tab
3. Click **Trigger deploy** → **Clear cache and deploy site**
4. Wait 2-3 minutes for the build to complete

### Step 3: Check Build Log

After deployment, click on the latest deploy and verify:
- ✅ Build completed successfully
- ✅ Look for: "Publishing directory: out"
- ✅ Look for: "Site is live"

## If Still Not Working

### Check the Build Log for Errors

In the deploy log, look for:
- Any red error messages
- Warnings about missing files
- The line that says "Publishing directory:" - it MUST say "out"

### Verify Files Are Being Built

The build should create these files in the `out` directory:
- ✅ `out/index.html` - MUST exist
- ✅ `out/_redirects` - Should exist
- ✅ `out/_next/` - Directory with static assets

### Manual Test

If you have Netlify CLI installed:
```bash
npm install -g netlify-cli
netlify deploy --dir=out --prod
```

This will manually deploy and show any errors.

## Still Having Issues?

Check:
1. **Netlify Build Settings** - Publish directory MUST be `out`
2. **Build Log** - Any errors during build?
3. **File Structure** - Does `out/index.html` exist after build?

## Contact Support

If none of the above works, share:
1. Screenshot of Netlify Build Settings page
2. The "Publishing directory" line from the build log
3. Any error messages from the build log

