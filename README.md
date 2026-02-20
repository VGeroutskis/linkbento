# 🍱 LinkBento

> **[EN](#-english)** | **[EL](#-ελληνικά)**

---

## 🇬🇧 English

A modern, feature-rich personal links page — like Linktree, but open source, self-hosted, and fully customizable. Zero dependencies, no build step, just pure HTML/CSS/JS.

**Demo:** [geroutskis.com](https://geroutskis.com)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-F38020?style=flat&logo=cloudflare&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

### ✨ Features

- **17 Themes** — Dark, Light, Cyberpunk, Sunset, Ocean, Forest, Neon, Midnight, Rose, Aurora, Lavender, Mocha, Arctic, Volcano, Synthwave, Dracula + Auto (system preference)
- **Bilingual** — Greek (EL) / English (EN) with full i18n support
- **Modular Codebase** — HTML partials, split CSS & JS files with build script
- **Advanced Analytics** — Click tracking, time on page, scroll depth via Google Analytics
- **Responsive** — Mobile-first design, works on all devices
- **Particle Background** — Interactive canvas-based particle animation
- **Portfolio Section** — Showcase your projects (auto-fetched from GitHub API)
- **Tech Stack** — Display your skills with devicon badges (auto-fetched from GitHub)
- **QR Code** — Generate and download a QR code for your page
- **vCard Export** — Let visitors save your contact info directly
- **Share Modal** — Share via X, Facebook, LinkedIn, WhatsApp, Telegram, or copy link
- **Contact Form** — Built-in contact form with email integration
- **Calendly Integration** — Book meetings directly from the page
- **GitHub Stats** — Live repo count and follower count from the GitHub API
- **Changelog** — Bilingual changelog loaded from `CHANGELOG.md`
- **Cookie Consent** — GDPR-compliant cookie banner
- **Easter Egg** — Hidden surprise for curious visitors 🎉
- **Pull to Refresh** — Mobile pull-to-refresh gesture
- **Accessibility** — Skip links, ARIA labels, keyboard navigation
- **SEO Optimized** — Open Graph, Twitter Cards, meta tags (set dynamically)
- **PWA Ready** — Manifest support for installable web app

### 🚀 Quick Start

1. **Fork** this repo or click **Use this template**
2. Edit `script.js` → `CONFIG` object with your info
3. Deploy anywhere (see below)

> **Note:** You don't need to touch `index.html` — everything (name, bio, links, SEO) is driven by `CONFIG` and `translations` inside `script.js`.

### 🌐 Deploy to Cloudflare Pages

1. Push your forked repo to GitHub
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Pages**
3. Connect your GitHub account and select the repository
4. Configure the build settings:

   | Setting              | Value |
   |----------------------|-------|
   | Production branch    | `main` |
   | Build command        | *(leave empty)* |
   | Build output folder  | `/` |

5. Click **Save and Deploy**

Every push to `main` will trigger an automatic deployment.

#### Custom Domain

1. In Cloudflare Pages → your project → **Custom domains**
2. Add your domain (e.g. `links.yourdomain.com`)
3. Cloudflare will handle SSL automatically

#### Other Hosting Options

Since LinkBento is just static files, it works anywhere:

- **GitHub Pages** — free, push to `main` and enable Pages in repo settings
- **Netlify** — drag & drop the folder or connect your repo
- **Vercel** — import the repo, zero config
- **Any web server** — just upload the files

### ⚙️ Configuration

All settings are in [`js/config.js`](js/config.js). Just edit the `CONFIG` object and the `translations` object:

```js
const CONFIG = {
    name: 'Your Name',
    siteUrl: 'https://example.com/links',
    profileImage: 'https://...',
    favicon: '🍱',
    defaultLang: 'en',
    defaultTheme: 'dark',
    seo: { title: {...}, description: {...}, keywords: '...' },
    githubUsername: 'yourusername',
    contactEmail: 'you@example.com',
    calendlyUrl: 'https://calendly.com/you',
    googleAnalyticsId: 'G-XXXXXXXXXX',  // leave '' to disable
    links: [
        { url: '...', icon: 'fab fa-github', cssClass: 'github', langKey: 'github', ... },
        // ...add as many links as you want
    ],
    vcard: { firstName: '...', lastName: '...', ... },
};
```

### Adding a New Language

1. Add a new key in the `translations` object (e.g. `fr: { ... }`)
2. Add a language button in `index.html` inside `.lang-toggle`
3. Set `CONFIG.defaultLang` to the new language code

### Adding a Theme

1. Add a new CSS variable block in [`css/variables.css`](css/variables.css)
2. Add h1 gradient in [`css/profile.css`](css/profile.css)
3. Add theme swatch in [`css/layout.css`](css/layout.css)
4. Add the theme option in [`html/controls.html`](html/controls.html) inside `.theme-options`
5. Run `./build.sh` to rebuild `index.html`

### 📁 Project Structure

```
├── index.html       # Built output (generated by build.sh)
├── build.sh         # Build script — concatenates HTML partials
├── html/            # HTML partials
│   ├── head.html
│   ├── controls.html
│   ├── profile.html
│   ├── content.html
│   ├── modals.html
│   └── footer.html
├── css/             # Split CSS modules
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── profile.css
│   ├── links.css
│   ├── components.css
│   ├── modals.css
│   └── effects.css
├── js/              # Split JS modules
│   ├── config.js
│   ├── analytics.js
│   ├── ui.js
│   ├── theme.js
│   ├── github.js
│   ├── modals.js
│   ├── extras.js
│   └── app.js
├── CHANGELOG.md     # Version history (bilingual EN/EL)
├── LICENSE          # MIT License
└── README.md
```

### 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, animations, gradients, backdrop-filter
- **Vanilla JavaScript** — Zero dependencies, no build step
- **Font Awesome 6** — Icons
- **Devicon** — Tech stack icons
- **Google Fonts** — Poppins typeface
- **Cloudflare Pages** — Hosting & CDN

### 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

### 📄 License

This project is licensed under the [MIT License](LICENSE).

### 🙏 Credits

Created by [Valentinos Geroutskis](https://geroutskis.com). If you use LinkBento, a ⭐ on the repo is appreciated!

---

## 🇬🇷 Ελληνικά

Μια μοντέρνα, πλούσια σε χαρακτηριστικά προσωπική σελίδα links — σαν το Linktree, αλλά open source, self-hosted και πλήρως παραμετροποιήσιμη. Μηδέν dependencies, κανένα build step, μόνο HTML/CSS/JS.

**Demo:** [geroutskis.com](https://geroutskis.com)

### ✨ Χαρακτηριστικά

- **17 Θέματα** — Dark, Light, Cyberpunk, Sunset, Ocean, Forest, Neon, Midnight, Rose, Aurora, Lavender, Mocha, Arctic, Volcano, Synthwave, Dracula + Auto (ακολουθεί το σύστημα)
- **Δίγλωσσο** — Ελληνικά (EL) / Αγγλικά (EN) με πλήρες i18n
- **Modular Codebase** — HTML partials, split CSS & JS αρχεία με build script
- **Προηγμένα Analytics** — Παρακολούθηση κλικ, χρόνου παραμονής, βάθους scroll μέσω Google Analytics
- **Responsive** — Mobile-first σχεδιασμός, λειτουργεί σε όλες τις συσκευές
- **Particle Background** — Διαδραστικό canvas animation με σωματίδια
- **Portfolio** — Προβολή projects (αυτόματα από το GitHub API)
- **Tech Stack** — Εμφάνιση γλωσσών με devicon badges (αυτόματα από GitHub)
- **QR Code** — Δημιουργία και λήψη QR code
- **vCard Export** — Αποθήκευση επαφής
- **Share Modal** — Κοινοποίηση μέσω X, Facebook, LinkedIn, WhatsApp, Telegram ή αντιγραφή link
- **Φόρμα Επικοινωνίας** — Ενσωματωμένη φόρμα με email
- **Calendly** — Κράτηση ραντεβού απευθείας από τη σελίδα
- **GitHub Stats** — Ζωντανά repos & followers από το GitHub API
- **Changelog** — Δίγλωσσο changelog από `CHANGELOG.md`
- **Cookie Consent** — GDPR-compliant banner cookies
- **Easter Egg** — Κρυφή έκπληξη για τους περίεργους 🎉
- **Pull to Refresh** — Gesture pull-to-refresh στο κινητό
- **Accessibility** — Skip links, ARIA labels, πλοήγηση με πληκτρολόγιο
- **SEO** — Open Graph, Twitter Cards, meta tags (δυναμικά)
- **PWA Ready** — Manifest για εγκαταστάσιμο web app

### 🚀 Γρήγορη Εκκίνηση

1. Κάνε **Fork** αυτό το repo ή πάτα **Use this template**
2. Επεξεργάσου το `script.js` → `CONFIG` object με τα στοιχεία σου
3. Κάνε deploy (δες παρακάτω)

> **Σημείωση:** Δεν χρειάζεται να αγγίξεις το `index.html` — όλα (όνομα, bio, links, SEO) ελέγχονται από το `CONFIG` και τα `translations` μέσα στο `script.js`.

### 🌐 Deploy στο Cloudflare Pages

1. Κάνε push το repo σου στο GitHub
2. Πήγαινε στο [Cloudflare Pages](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Pages**
3. Σύνδεσε τον λογαριασμό GitHub και επέλεξε το repository
4. Ρύθμιση build:

   | Ρύθμιση              | Τιμή |
   |----------------------|-------|
   | Production branch    | `main` |
   | Build command        | *(κενό)* |
   | Build output folder  | `/` |

5. Πάτα **Save and Deploy**

Κάθε push στο `main` κάνει αυτόματο deployment.

#### Custom Domain

1. Cloudflare Pages → project σου → **Custom domains**
2. Πρόσθεσε το domain σου (π.χ. `links.yourdomain.com`)
3. Το Cloudflare αναλαμβάνει αυτόματα το SSL

#### Άλλες Επιλογές Hosting

Αφού το LinkBento είναι μόνο static files, δουλεύει παντού:

- **GitHub Pages** — δωρεάν, push στο `main` και ενεργοποίηση Pages στις ρυθμίσεις
- **Netlify** — drag & drop ή σύνδεση repo
- **Vercel** — import repo, zero config
- **Οποιοσδήποτε web server** — απλά ανέβασε τα αρχεία

### ⚙️ Ρυθμίσεις

Όλες οι ρυθμίσεις βρίσκονται στο [`js/config.js`](js/config.js). Επεξεργάσου μόνο το `CONFIG` object και το `translations` object:

```js
const CONFIG = {
    name: 'Το Όνομά Σου',
    siteUrl: 'https://example.com/links',
    profileImage: 'https://...',
    favicon: '🍱',
    defaultLang: 'el',
    defaultTheme: 'dark',
    seo: { title: {...}, description: {...}, keywords: '...' },
    githubUsername: 'tousername',
    contactEmail: 'you@example.com',
    calendlyUrl: 'https://calendly.com/you',
    googleAnalyticsId: 'G-XXXXXXXXXX',  // άσε '' για απενεργοποίηση
    links: [
        { url: '...', icon: 'fab fa-github', cssClass: 'github', langKey: 'github', ... },
        // ...πρόσθεσε όσα links θέλεις
    ],
    vcard: { firstName: '...', lastName: '...', ... },
};
```

### Προσθήκη Νέας Γλώσσας

1. Πρόσθεσε νέο key στο `translations` object (π.χ. `fr: { ... }`)
2. Πρόσθεσε κουμπί γλώσσας στο `index.html` μέσα στο `.lang-toggle`
3. Όρισε `CONFIG.defaultLang` στον νέο κωδικό γλώσσας

### Προσθήκη Θέματος

1. Πρόσθεσε νέο CSS variable block στο [`css/variables.css`](css/variables.css)
2. Πρόσθεσε h1 gradient στο [`css/profile.css`](css/profile.css)
3. Πρόσθεσε theme swatch στο [`css/layout.css`](css/layout.css)
4. Πρόσθεσε την επιλογή θέματος στο [`html/controls.html`](html/controls.html) μέσα στο `.theme-options`
5. Τρέξε `./build.sh` για rebuild του `index.html`

### 📁 Δομή Project

```
├── index.html       # Built output (δημιουργείται από build.sh)
├── build.sh         # Build script — συνδυάζει τα HTML partials
├── html/            # HTML partials
│   ├── head.html
│   ├── controls.html
│   ├── profile.html
│   ├── content.html
│   ├── modals.html
│   └── footer.html
├── css/             # Split CSS modules
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── profile.css
│   ├── links.css
│   ├── components.css
│   ├── modals.css
│   └── effects.css
├── js/              # Split JS modules
│   ├── config.js
│   ├── analytics.js
│   ├── ui.js
│   ├── theme.js
│   ├── github.js
│   ├── modals.js
│   ├── extras.js
│   └── app.js
├── CHANGELOG.md     # Ιστορικό εκδόσεων (δίγλωσσο EN/EL)
├── LICENSE          # MIT License
└── README.md
```

### 🛠️ Tech Stack

- **HTML5** — Σημασιολογικό markup
- **CSS3** — Custom properties, animations, gradients, backdrop-filter
- **Vanilla JavaScript** — Μηδέν dependencies, κανένα build step
- **Font Awesome 6** — Εικονίδια
- **Devicon** — Εικονίδια tech stack
- **Google Fonts** — Γραμματοσειρά Poppins
- **Cloudflare Pages** — Hosting & CDN

### 🤝 Συνεισφορά

Οι συνεισφορές είναι ευπρόσδεκτες! Μπορείς να:

1. Κάνεις Fork το project
2. Δημιουργήσεις feature branch (`git checkout -b feature/awesome-feature`)
3. Κάνεις commit (`git commit -m 'Add awesome feature'`)
4. Push στο branch (`git push origin feature/awesome-feature`)
5. Ανοίξεις Pull Request

### 📄 Άδεια

Αυτό το project είναι υπό την [MIT License](LICENSE).

### 🙏 Credits

Δημιουργήθηκε από τον [Valentinos Geroutskis](https://geroutskis.com). Αν χρησιμοποιείς το LinkBento, ένα ⭐ στο repo εκτιμάται!
