# Deployment Guide

## GitHub Repository Setup

### 1. Create Repository on GitHub

```bash
# From the neophil-emof-2025 directory
gh repo create PolicyEngine/neophil-emof-2025 --public --source=. --remote=origin --push
```

Or manually:
1. Go to https://github.com/organizations/PolicyEngine/repositories/new
2. Repository name: `neophil-emof-2025`
3. Public repository
4. Don't initialize with README (we already have one)
5. Click "Create repository"

### 2. Push to GitHub

```bash
git remote add origin https://github.com/PolicyEngine/neophil-emof-2025.git
git push -u origin main
```

### 3. Configure GitHub Pages

**IMPORTANT**: GitHub Pages must be configured to use "GitHub Actions" as the source.

1. Go to repository Settings → Pages
2. Under "Build and deployment"
3. Set **Source** to: **GitHub Actions**
4. Save

The workflow will automatically deploy on push to main.

## Continuous Integration

### PR Workflow
- **File**: `.github/workflows/pr.yml`
- **Triggers**: Pull requests to main
- **Checks**:
  - Build succeeds
  - dist/ directory is created
  - No build errors

### Deploy Workflow
- **File**: `.github/workflows/deploy.yml`
- **Triggers**:
  - Push to main branch
  - Manual trigger (workflow_dispatch)
- **Actions**:
  - Builds the site
  - Deploys to GitHub Pages

## Local Testing

### Development Server
```bash
cd site
npm install
npm run dev
```
Visit: http://localhost:5173/neophil-emof-2025/

### Production Build
```bash
cd site
npm run build
```
Output in `site/dist/`

## Deployment URL

Once deployed, the site will be available at:
**https://policyengine.github.io/neophil-emof-2025/**

## Troubleshooting

### Build Fails
- Check `site/package-lock.json` exists
- Verify Node.js 20 compatibility
- Run `npm ci` locally to test

### 404 on GitHub Pages
- Verify vite.config.ts has `base: '/neophil-emof-2025/'`
- Ensure GitHub Pages source is set to "GitHub Actions"
- Check workflow run logs in Actions tab

### CI Workflow Not Running
- Verify `.github/workflows/` directory is committed
- Check repository Settings → Actions → General
- Ensure "Allow all actions and reusable workflows" is enabled
