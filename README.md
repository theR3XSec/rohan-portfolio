# Rohan Kardile — Security & Systems Portfolio

A responsive, static portfolio website built from the information in the supplied CV. No framework, hosting account, npm install, or build process is required.

## Files

- `index.html` — website content, sections, links, and search metadata
- `styles.css` — design, light/dark theme, responsive styles
- `script.js` — menu, theme switch, scroll animations, email copy
- `assets/favicon.svg` — website favicon
- `Rohan_Kardile_CV.pdf` — downloadable CV linked from the site
- `.nojekyll` — tells GitHub Pages not to run Jekyll processing
- `robots.txt` — search crawler instructions

## Preview locally

Open `index.html` in a browser, or (if Python is installed) run from inside this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Host option A: Netlify Drop (fastest)

1. Unzip `rohan-kardile-portfolio.zip`.
2. Open `https://app.netlify.com/drop`.
3. Drag the **folder containing `index.html`** into the drop zone (not the ZIP file).
4. Netlify publishes the site at an automatically assigned `*.netlify.app` URL. You can later connect your own domain.
5. To publish edits, drag the updated folder to the project's deploys area, or connect your Git repository for automatic deployments.

Reference: https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/

## Host option B: GitHub Pages (best for keeping a version history)

1. Create a GitHub repository, for example `security-portfolio`.
2. Upload the **contents** of this folder into the repository root, including `index.html` and `.nojekyll`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then **Save**.
6. GitHub provides a URL similar to `https://YOUR-USERNAME.github.io/security-portfolio/`.

Reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Because paths in this project are relative, it works on a GitHub Pages project subpath.

## What to customize

1. Confirm job dates, job titles, certification names, and stated impact metrics from your original CV.
2. Add verified GitHub repositories, screenshots, diagrams, project reports, and write-ups when available. Avoid showing private client details or unauthorized test evidence.
3. Consider a professional headshot, a custom domain, and a public-facing email address.
4. If you add a downloadable PDF resume, remove any phone number or personal information that you do not want visible publicly.
5. Update links and contact email in `index.html` and `script.js` (copy-button email).
6. Change colors in `styles.css` by editing the variables at the top of the file.
7. Once deployed, set up a real domain and, optionally, an Open Graph preview image and canonical URL.

## Current public details

The portfolio itself still keeps the public page fairly clean, but it now includes a downloadable CV file (`Rohan_Kardile_CV.pdf`). Review that PDF before publishing if you want to remove or change any personal details such as phone number, address, or other contact information.

No article titles, GitHub accounts, credential verification links, projects, customer endorsements, or external claims were invented. Project descriptions are based only on the supplied CV; topology drawings are illustrative.

## Accessibility and privacy

- Semantic HTML, keyboard-accessible navigation, visible focus styles, `prefers-reduced-motion`, and responsive layout.
- No analytics, trackers, or backend. The Google Fonts stylesheet is the only optional third-party resource; the local/system fallbacks work if it is blocked. Remove the two `fonts.googleapis.com`/`fonts.gstatic.com` link tags if you prefer zero external requests.
- The contact button uses your email client (`mailto:`); there is no server-side contact form.
