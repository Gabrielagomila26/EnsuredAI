# Ensure AI — Job Matching Site

Static site for the MatchWorks job-matching platform: landing page, assessment, results, and consultation booking flow.

## Deploy to GitHub Pages (get a live URL)

1. **Install Git** (if you haven’t): https://git-scm.com/download/win

2. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Repository name: e.g. `matchworks` or `ja-company`
   - Choose **Public**
   - Do **not** add a README, .gitignore, or license (you already have files)
   - Click **Create repository**

3. **Push this folder to GitHub** (run in PowerShell from this folder):

   ```powershell
   cd "c:\Users\My PC\OneDrive\Desktop\JA company"

   git init
   git add .
   git commit -m "Initial commit: MatchWorks site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and the repo name you chose.

4. **Turn on GitHub Pages**
   - Open your repo on GitHub → **Settings** → **Pages**
   - Under **Source**, choose **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)**
   - Click **Save**

5. **Your live site URL** (after a minute or two):
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```
   Example: `https://johndoe.github.io/matchworks/`

---

## Pages in this site

| File         | Purpose                    |
| ------------ | -------------------------- |
| `index.html` | Landing page               |
| `survey.html`| Assessment (20 questions)  |
| `results.html` | Results + role suggestion |
| `success.html` | Thank you / booking confirmed |
| `cancel.html`  | Checkout cancelled         |
