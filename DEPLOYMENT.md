# How to Deploy Your Valentine's App

## Option 1: Vercel (Easiest - Recommended)

### Prerequisites:
1. A GitHub account (free)
2. Your code pushed to a GitHub repository

### Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"
   - Wait 1-2 minutes
   - You'll get a live URL like: `https://your-app-name.vercel.app`

3. **Share the link!** The app will work on mobile automatically.

---

## Option 2: Netlify (Also Easy)

1. **Build your app:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Drag and drop the `dist` folder (created after build) onto Netlify
   - Or connect your GitHub repo for automatic deployments
   - You'll get a URL like: `https://your-app-name.netlify.app`

---

## Option 3: GitHub Pages (Free but requires setup)

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js:**
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repo Settings > Pages
   - Select `gh-pages` branch
   - Your site will be at: `https://yourusername.github.io/your-repo-name`

---

## Quick Test Before Deploying

Test the build locally:
```bash
npm run build
npm run preview
```

This will show you how it looks when deployed.

---

## Mobile Optimization

The app is already mobile-responsive thanks to Tailwind CSS! It will work great on:
- 📱 iPhones
- 🤖 Android phones
- 💻 Tablets
- 🖥️ Desktops

