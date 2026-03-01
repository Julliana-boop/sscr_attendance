# SSC-R Attendance System — PWA Deployment Guide
## Publish to GitHub Pages in 30 Minutes (Free)

---

## What You'll Have After This
- A real URL like `https://YOUR-USERNAME.github.io/sscr-attendance/`
- Students open it in Chrome → tap **Add to Home Screen** → it installs like a real app
- Works offline after first visit (no internet needed to view dashboard)
- Camera/QR scan works because GitHub Pages uses HTTPS (required for camera access)

---

## Step 1 — Create a GitHub Account
Go to **https://github.com** → Sign Up → free account is enough.

---

## Step 2 — Create a New Repository
1. Click the **+** button top-right → **New repository**
2. Name it: `sscr-attendance`
3. Set to **Public** (required for free GitHub Pages)
4. ✅ Check **Add a README file**
5. Click **Create repository**

---

## Step 3 — Upload Your Files
In your new repository, click **Add file → Upload files** and upload ALL of these:

```
login.html          ← use the latest version from this project
login.js            ← use the latest version
login.css
student.html        ← use the latest version
student.js          ← use the latest version
student.css         ← use the latest version
students-data.js
faculty.html        ← use the latest version
faculty.js
faculty.css
faculty-scans.js
admin.html          ← use the latest version
admin.css
system-logs.html    ← use the latest version
student-log.css
manifest.json       ← NEW — from this PWA package
service-worker.js   ← NEW — from this PWA package
sscrmnlofficiallogo.png    ← your school logo
sscr.png                   ← background image (if you have it)
```

Also upload the **icons folder** (drag the whole folder or upload each icon):
```
icons/icon-144.png
icons/icon-192.png
icons/icon-512.png
```

Click **Commit changes**.

---

## Step 4 — Enable GitHub Pages
1. In your repository, click **Settings** (top tab)
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select `main` → `/ (root)` → click **Save**
5. Wait 2–3 minutes, then refresh the page
6. You'll see: **"Your site is live at https://YOUR-USERNAME.github.io/sscr-attendance/"**

---

## Step 5 — Test on Mobile
1. Open Chrome on your Android phone
2. Go to your URL: `https://YOUR-USERNAME.github.io/sscr-attendance/login.html`
3. Log in as any student
4. Chrome will show a banner: **"Add SSC-R Attend to Home Screen"** → tap it
5. Or: tap the 3-dot menu → **Add to Home screen**
6. The app icon appears on your home screen — tap it and it opens fullscreen with no browser bar

### For iPhone (Safari):
1. Open Safari (not Chrome) on iPhone
2. Go to your URL
3. Tap the **Share** button (box with arrow) → **Add to Home Screen**
4. Tap **Add** — done

---

## Step 6 — Share the Link
Send this link to all students and teachers:
```
https://YOUR-USERNAME.github.io/sscr-attendance/login.html
```

They open it once → add to home screen → from that point on it's just an icon on their phone.

---

## Updating Files Later
When you make changes to your code:
1. Go to your GitHub repository
2. Click the file you want to update
3. Click the **pencil icon** (Edit)
4. Paste the new content
5. Click **Commit changes**

The live site updates automatically within 1–2 minutes.

Or use **Add file → Upload files** to replace multiple files at once.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Site shows 404 | Wait 5 min after enabling Pages, then hard-refresh |
| Camera doesn't work | Must use HTTPS — GitHub Pages provides this automatically |
| "Add to Home Screen" doesn't appear | Must be on HTTPS and visited at least once |
| Icons not showing | Make sure `icons/` folder was uploaded correctly |
| Old version still showing | Hard refresh: Ctrl+Shift+R on desktop, or clear cache on phone |

---

## Your Credentials (for demo)

| Role | Username | Password |
|---|---|---|
| Admin | A-Gonzaga | admin2026 |
| Math | F-Doneza | math |
| English | F-Soriano | english |
| Science | F-Bernal | science |
| Filipino | F-Carpio | filipino |
| Student | S2026-0031 | malacas |
| Student | S2026-0032 | tulabing |
| Student | S2026-0029 | espiritu |

---

*Generated for SSC-R Attendance System — Grade 7 Section B*
