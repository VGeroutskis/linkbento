# 🍱 LinkBento — Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2.10.0] - 2026-02-20

<!-- en -->
### Added
- 6 new themes: Lavender, Mocha, Arctic, Volcano, Synthwave, Dracula (17 total)
- Advanced analytics: click tracking, time on page, scroll depth, engagement metrics
- Modular codebase: HTML split into partials with build script
- Pre-commit hook: build.sh runs automatically before every git commit

### Changed
- CSS split into 8 modular files (`css/` folder)
- JavaScript split into 8 modular files (`js/` folder)
- HTML split into 6 partial files (`html/` folder) with `build.sh` concatenation
- Theme picker grid updated from 5 to 6 columns
- Google Analytics moved from `<head>` to bottom of `<body>`

<!-- el -->
### Προσθήκη
- 6 νέα θέματα: Lavender, Mocha, Arctic, Volcano, Synthwave, Dracula (17 συνολικά)
- Προηγμένα analytics: παρακολούθηση κλικ, χρόνου παραμονής, βάθους scroll, engagement metrics
- Modular codebase: HTML split σε partials με build script
- Pre-commit hook: το build.sh τρέχει αυτόματα πριν από κάθε git commit

### Αλλαγή
- CSS χωρίστηκε σε 8 αρχεία (`css/` folder)
- JavaScript χωρίστηκε σε 8 αρχεία (`js/` folder)
- HTML χωρίστηκε σε 6 partials (`html/` folder) με `build.sh` concatenation
- Theme picker grid ενημερώθηκε από 5 σε 6 στήλες
- Google Analytics μεταφέρθηκε από `<head>` στο κάτω μέρος του `<body>`

## [2.9.2] - 2026-02-18

<!-- en -->
### Changed
- Easter egg text is now bilingual (EL/EN) based on active language
- Easter egg text stays visible for 12 seconds (confetti for 8s)
- Portfolio cards are now fully clickable (entire tile, not just the link)

<!-- el -->
### Αλλαγή
- Το κείμενο του Easter egg είναι πλέον δίγλωσσο (EL/EN) ανάλογα με την ενεργή γλώσσα
- Το κείμενο του Easter egg μένει ορατό για 12 δευτερόλεπτα (κομφετί για 8δ)
- Τα portfolio cards είναι πλέον clickable σε ολόκληρο το tile (όχι μόνο στο link)

## [2.9.1] - 2026-02-18

<!-- en -->
### Changed
- Action buttons (share, copy, QR, vCard, changelog) now navigate with Left/Right arrows instead of Up/Down
- Keyboard navigation organized into sections: actions (←→), links (↑↓), portfolio (←→)

### Fixed
- Portfolio projects now reachable via keyboard navigation

<!-- el -->
### Αλλαγή
- Τα κουμπιά ενεργειών (κοινοποίηση, αντιγραφή, QR, vCard, changelog) πλοηγούνται πλέον με Αριστερά/Δεξιά αντί Πάνω/Κάτω
- Η πλοήγηση με πληκτρολόγιο οργανώθηκε σε ενότητες: ενέργειες (←→), links (↑↓), portfolio (←→)

### Διόρθωση
- Τα projects στο portfolio είναι πλέον προσβάσιμα μέσω πληκτρολογίου

## [2.9.0] - 2026-02-18

<!-- en -->
### Changed
- Easter egg now lasts longer with multiple confetti waves 🎊

### Fixed
- Keyboard navigation now works on all interactive elements (action buttons, language toggle, theme), not just links
- Default theme applies correctly on first visit

<!-- el -->
### Αλλαγή
- Το Easter egg διαρκεί περισσότερο με πολλαπλά κύματα κομφετί 🎊

### Διόρθωση
- Η πλοήγηση με πληκτρολόγιο λειτουργεί πλέον σε όλα τα διαδραστικά στοιχεία (κουμπιά ενεργειών, εναλλαγή γλώσσας, θέμα), όχι μόνο στα links
- Το προεπιλεγμένο θέμα εφαρμόζεται σωστά στην πρώτη επίσκεψη

## [2.8.0] - 2026-02-18

<!-- en -->
### Added
- Easter egg — hidden surprise for curious visitors 🎉

<!-- el -->
### Προσθήκη
- Easter egg — κρυμμένη έκπληξη για τους περίεργους επισκέπτες 🎉

## [2.7.0] - 2026-02-18

<!-- en -->
### Added
- Accessibility improvements: skip links, ARIA labels, full keyboard navigation support

<!-- el -->
### Προσθήκη
- Βελτιώσεις προσβασιμότητας: skip links, ARIA labels, πλήρης υποστήριξη πλοήγησης με πληκτρολόγιο

## [2.6.0] - 2026-02-18

<!-- en -->
### Added
- Changelog modal (What's New) accessible from the profile action buttons

<!-- el -->
### Προσθήκη
- Changelog modal (Τι νέο υπάρχει) προσβάσιμο από τα κουμπιά ενεργειών του προφίλ

## [2.5.0] - 2026-02-18

<!-- en -->
### Added
- Pull-to-refresh gesture support for mobile devices

<!-- el -->
### Προσθήκη
- Υποστήριξη χειρονομίας pull-to-refresh σε κινητές συσκευές

## [2.4.0] - 2026-02-18

<!-- en -->
### Added
- Cursor trail effects on desktop with animated follow elements

<!-- el -->
### Προσθήκη
- Εφέ cursor trail στο desktop με animated ακολουθητικά στοιχεία

## [2.3.0] - 2026-02-18

<!-- en -->
### Added
- Interactive particle canvas background animation

<!-- el -->
### Προσθήκη
- Διαδραστικό particle animation στο φόντο με canvas

## [2.2.0] - 2026-02-18

<!-- en -->
### Added
- Calendly integration for booking meetings directly from the page

<!-- el -->
### Προσθήκη
- Ενσωμάτωση Calendly για κλείσιμο ραντεβού απευθείας από τη σελίδα

## [2.1.0] - 2026-02-18

<!-- en -->
### Added
- vCard export — visitors can save contact info (name, email, phone, website) directly to their device

<!-- el -->
### Προσθήκη
- Εξαγωγή vCard — οι επισκέπτες μπορούν να αποθηκεύσουν τα στοιχεία επικοινωνίας απευθείας στη συσκευή τους

## [2.0.0] - 2026-02-18

<!-- en -->
### Added
- 11 theme options: Dark, Light, Cyberpunk, Sunset, Ocean, Forest, Neon, Midnight, Rose, Aurora, and Auto (system preference)
- Theme picker panel with visual color previews

### Changed
- Full visual redesign of layout and identity

<!-- el -->
### Προσθήκη
- 11 θέματα εμφάνισης: Dark, Light, Cyberpunk, Sunset, Ocean, Forest, Neon, Midnight, Rose, Aurora και Auto (ρυθμίσεις συστήματος)
- Πάνελ επιλογής θέματος με χρωματικές προεπισκοπήσεις

### Αλλαγή
- Πλήρης ανασχεδιασμός εμφάνισης και ταυτότητας

## [1.9.0] - 2026-02-18

<!-- en -->
### Added
- Portfolio section with project cards, images, and links

<!-- el -->
### Προσθήκη
- Ενότητα Portfolio με κάρτες projects, εικόνες και συνδέσμους

## [1.8.0] - 2026-02-18

<!-- en -->
### Added
- Tech Stack / Skills section with devicon badges

<!-- el -->
### Προσθήκη
- Ενότητα Tech Stack / Skills με devicon badges

## [1.7.0] - 2026-02-18

<!-- en -->
### Added
- PWA manifest support for installable web app
- Apple mobile web app meta tags

<!-- el -->
### Προσθήκη
- Υποστήριξη PWA manifest για εγκαταστάσιμη web εφαρμογή
- Apple mobile web app meta tags

## [1.6.0] - 2026-02-18

<!-- en -->
### Added
- SEO meta tags with Open Graph and Twitter Card support

<!-- el -->
### Προσθήκη
- SEO meta tags με υποστήριξη Open Graph και Twitter Card

## [1.5.0] - 2026-02-18

<!-- en -->
### Added
- Cookie consent banner (GDPR-compliant) with accept/decline options

<!-- el -->
### Προσθήκη
- Cookie consent banner (συμβατό με GDPR) με επιλογές αποδοχής/απόρριψης

## [1.4.0] - 2026-02-18

<!-- en -->
### Added
- Share modal with support for X, Facebook, LinkedIn, WhatsApp, Telegram
- Copy-to-clipboard link sharing

<!-- el -->
### Προσθήκη
- Share modal με υποστήριξη για X, Facebook, LinkedIn, WhatsApp, Telegram
- Αντιγραφή συνδέσμου στο πρόχειρο

## [1.3.0] - 2026-02-18

<!-- en -->
### Added
- QR Code generation and download functionality

<!-- el -->
### Προσθήκη
- Δημιουργία και λήψη QR Code

## [1.2.0] - 2026-02-18

<!-- en -->
### Added
- Contact form with email integration
- Contact modal with name, email, and message fields

<!-- el -->
### Προσθήκη
- Φόρμα επικοινωνίας με ενσωμάτωση email
- Modal επικοινωνίας με πεδία ονόματος, email και μηνύματος

## [1.1.0] - 2026-02-18

<!-- en -->
### Added
- Dynamic greeting based on time of day (morning, afternoon, evening, night)
- GitHub stats integration — live repo count and follower count
- Footer with live Athens timezone clock

<!-- el -->
### Προσθήκη
- Δυναμικός χαιρετισμός βάσει ώρας ημέρας (πρωί, μεσημέρι, απόγευμα, βράδυ)
- Ενσωμάτωση GitHub stats — αριθμός repos και followers σε πραγματικό χρόνο
- Footer με ρολόι ζώνης ώρας Αθήνας

## [1.0.0] - 2026-02-18

<!-- en -->
### Added
- Initial release
- Personal links page with social media links (Instagram, LinkedIn, GitHub, Website, Contact)
- Dark theme as default
- Bilingual support: Greek (EL) and English (EN)
- Mobile-responsive design
- Loading screen animation
- Google Fonts (Poppins) and Font Awesome 6 icons

<!-- el -->
### Προσθήκη
- Αρχική έκδοση
- Σελίδα προσωπικών συνδέσμων με social media links (Instagram, LinkedIn, GitHub, Website, Contact)
- Dark theme ως προεπιλογή
- Δίγλωσση υποστήριξη: Ελληνικά (EL) και Αγγλικά (EN)
- Σχεδιασμός φιλικός προς κινητά
- Οθόνη φόρτωσης με animation
- Google Fonts (Poppins) και Font Awesome 6 icons