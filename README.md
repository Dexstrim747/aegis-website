# Aegis — Official Website

Official website for **Aegis**, an advanced Telegram administration platform focused on automation, security and community control.

- **Live bot:** https://t.me/aegis_admin22_bot
- **Source / privacy policy source:** https://github.com/alekseyggprot-cpu/aegis-privacy

## Stack

Plain HTML5, CSS3 and vanilla JavaScript — no build step, no frameworks.

## Structure

```
/
├── index.html       Landing page (hero, features, security, how it works, FAQ)
├── privacy.html      Privacy Policy
├── terms.html        Terms of Service
├── style.css          All styles
├── script.js          Nav, mobile menu, scroll-reveal, FAQ accordion, status strip
├── assets/
│   ├── logo.svg        Primary logo (navbar / hero)
│   ├── favicon.svg      Favicon
│   └── icons/            Reserved for standalone icon assets
└── README.md
```

## Running locally

No build tools required — open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8080
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository settings, enable **GitHub Pages** for the branch containing these files (root directory).
3. The site will be published at `https://<username>.github.io/<repo>/`.

## OG preview image

`assets/og-image.svg` is the source for the link-preview image used by `og:image`. Telegram's own link preview requires a raster image, so convert it to PNG once (any of these work):

```bash
# with rsvg-convert
rsvg-convert -w 1200 -h 630 assets/og-image.svg -o assets/og-image.png

# or with Inkscape
inkscape assets/og-image.svg -o assets/og-image.png -w 1200 -h 630
```

Then keep `index.html`'s `<meta property="og:image" content="assets/og-image.png">` as is — it already points to the PNG filename.

## Design

Dark, cybersecurity-oriented visual identity: near-black background (`#050B14`), a blue accent system (`#4AA3FF` / `#72C0FF`), glassmorphism navigation, and a live-style "status strip" on the hero as the page's signature element.
