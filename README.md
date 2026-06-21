# Mohamed Emam — Personal Academic Website

A clean, responsive single-page portfolio for **Mohamed Emam**, biomechanics researcher
and AHPRA-registered physiotherapist. Built as a static site for **GitHub Pages**.

## Sections
- **Hero** — name, tagline, quick stats, social links
- **About** — bio, strengths, what I'm seeking
- **Research** — six focus areas + current PhD work
- **Publications** — filterable list (2019–2026) with DOI links
- **Education & Experience** — timeline + awards
- **Gallery** — Budapest / Semmelweis photos
- **Contact** — email, phone, LinkedIn, YouTube

## Features
- Light / dark theme (remembers your choice, follows system preference by default)
- Responsive layout with mobile menu
- Publication year filters
- Scroll-reveal animations
- No build step — pure HTML/CSS/JS

## Structure
```
index.html
assets/
  css/style.css
  js/main.js
images/
  profile.jpg
  gallery/photo-1..5.jpg
```

## Run locally
Just open `index.html` in a browser, or serve it:
```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages
1. Create a repo named `<your-username>.github.io` on GitHub.
2. Push this folder to it (see deployment notes).
3. In **Settings → Pages**, set the source to the `main` branch (root).
4. Your site goes live at `https://<your-username>.github.io`.

---
Content sources are kept in `ABOUT.md`, `RESEARCH.md`, `PUBLICATIONS.md`, and `CONTACT.md`.
