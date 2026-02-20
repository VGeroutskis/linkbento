// 🍱 LinkBento — Configuration & Translations
// https://github.com/vgeroutskis/linkbento

// =============== CONFIGURATION ===============
// Άλλαξε αυτές τις τιμές για να ρυθμίσεις το site
const CONFIG = {
    // ── Βασικά στοιχεία / Basic info ──
    name: 'Valentinos Geroutskis',
    siteUrl: 'https://geroutskis.com/links',
    profileImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=300&q=80',
    favicon: '🍱',       // Emoji ή URL εικόνας
    themeColor: '#00d2ff',
    defaultLang: 'el',   // 'el' ή 'en'
    defaultTheme: 'neon', // dark, light, cyberpunk, sunset, ocean, forest, neon, midnight, rose, aurora

    // ── SEO & Social / Meta tags ──
    seo: {
        title: { el: 'LinkBento | Valentinos Geroutskis', en: 'LinkBento | Valentinos Geroutskis' },
        description: {
            el: 'Ο κόσμος μου σε ένα link. Δες τα projects μου, συνδέσου μαζί μου στα social media και ανακάλυψε τι φτιάχνω.',
            en: 'My world in one link. Explore my projects, connect with me on social media and discover what I\'m building.'
        },
        keywords: 'LinkBento, Valentinos Geroutskis, Software Engineer, Web Developer, Links, Portfolio',
        ogImage: 'https://geroutskis.com/og-image.jpg'
    },

    // ── Τοποθεσία & Timezone ──
    location: { el: 'Αθήνα, Ελλάδα', en: 'Athens, Greece' },
    timezone: 'Europe/Athens',

    // ── GitHub ──
    githubUsername: 'vgeroutskis',
    githubRepoUrl: 'https://github.com/vgeroutskis/linkbento',

    // ── Status Badge ──
    isAvailable: false,
    customStatusText: {
        el: null,  // π.χ. 'Σε project μέχρι Μάρτιο'
        en: null   // e.g. 'On a project until March'
    },
    hideStatusBadge: true,

    // ── Email & Calendly ──
    contactEmail: 'info@geroutskis.com',
    calendlyUrl: 'https://calendly.com/vgeroutskis',

    // ── vCard ──
    vcard: {
        firstName: 'Valentinos',
        lastName: 'Geroutskis',
        email: 'info@geroutskis.com',
        phone: '',
        website: 'https://geroutskis.com',
        title: 'Software Engineer',
        company: ''
    },

    // ── Social Links ──
    // Κάθε link: { url, icon (Font Awesome class), cssClass (για styling), langKey (για μετάφραση) }
    links: [
        {
            url: 'https://www.instagram.com/valentinosgr',
            icon: 'fab fa-instagram',
            cssClass: 'instagram',
            langKey: 'instagram',
            tooltipKey: 'tooltip-instagram',
            external: true
        },
        {
            url: 'https://www.linkedin.com/in/valentinos-geroutskis/',
            icon: 'fab fa-linkedin',
            cssClass: 'linkedin',
            langKey: 'linkedin',
            tooltipKey: 'tooltip-linkedin',
            external: true
        },
        {
            url: 'https://github.com/vgeroutskis',
            icon: 'fab fa-github',
            cssClass: 'github',
            langKey: 'github',
            tooltipKey: 'tooltip-github',
            external: true
        },
        {
            url: 'https://geroutskis.com',
            icon: 'fas fa-globe',
            cssClass: 'website',
            langKey: 'website',
            tooltipKey: 'tooltip-website',
            external: true
        },
        {
            url: 'mailto:info@geroutskis.com',
            icon: 'fas fa-envelope',
            cssClass: 'email',
            langKey: 'contact',
            tooltipKey: 'tooltip-contact',
            external: false,
            action: 'contact'  // ειδική ενέργεια: ανοίγει contact modal
        },
        {
            url: '#',
            icon: 'fas fa-calendar-check',
            cssClass: 'calendly',
            langKey: 'book-meeting',
            tooltipKey: 'book-meeting',
            external: false,
            action: 'calendly'  // ειδική ενέργεια: ανοίγει Calendly
        }
    ],

    // ── Skills / Tech Stack (fallback αν αποτύχει το GitHub API) ──
    skills: ['JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 'AWS'],

    // ── Portfolio (fallback αν αποτύχει το GitHub API) ──
    portfolio: [
        {
            title: { el: 'Project Alpha', en: 'Project Alpha' },
            description: { el: 'Web εφαρμογή με React', en: 'Web app built with React' },
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80',
            link: 'https://github.com/vgeroutskis'
        },
        {
            title: { el: 'Project Beta', en: 'Project Beta' },
            description: { el: 'API με Node.js', en: 'API built with Node.js' },
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80',
            link: 'https://github.com/vgeroutskis'
        }
    ],

    // ── Changelog ──
    changelogFile: 'CHANGELOG.md'
};

// =============== TRANSLATIONS ===============
// Inline fallback (δουλεύει και με file:///), JSON αρχεία κάνουν override αν φορτωθούν
const translations = {
    el: {
        "name": "Βαλεντίνος Γερούτσκυς",
        "bio": "Μηχανικός Λογισμικού | Λάτρης της Τεχνολογίας",
        "status-available": "Διαθέσιμος για εργασία",
        "status-unavailable": "Μη διαθέσιμος αυτή τη στιγμή",
        "theme": "Θέμα",
        "instagram": "Instagram",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "website": "Ιστοσελίδα",
        "contact": "Επικοινωνία",
        "tooltip-instagram": "Ακολούθησέ με στο Instagram",
        "tooltip-linkedin": "Σύνδεσμος στο LinkedIn",
        "tooltip-github": "Δες τα projects μου",
        "tooltip-website": "Επισκέψου την ιστοσελίδα μου",
        "tooltip-contact": "Στείλε μου email",
        "modal-title": "Επικοινώνησε μαζί μου",
        "form-name": "Το όνομά σου",
        "form-email": "Το email σου",
        "form-message": "Μήνυμα",
        "form-send": "Αποστολή",
        "qr-title": "Σκάναρε για επίσκεψη",
        "download-qr": "Λήψη QR",
        "privacy": "Πολιτική Απορρήτου",
        "copied": "Αντιγράφηκε!",
        "share-title": "Κοινοποίηση",
        "share-text": "Βρες με στα social media!",
        "copy-link": "Αντιγραφή",
        "cookie-title": "Ρυθμίσεις Cookies",
        "cookie-text": "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας. Συνεχίζοντας την περιήγηση συμφωνείτε με τη χρήση cookies.",
        "cookie-learn": "Μάθετε περισσότερα",
        "cookie-accept": "Αποδοχή",
        "cookie-decline": "Απόρριψη",
        "greeting-morning": "Καλημέρα!",
        "greeting-afternoon": "Καλησπέρα!",
        "greeting-evening": "Καλησπέρα!",
        "greeting-night": "Καλή νύχτα!",
        "save-contact": "Αποθήκευση Επαφής",
        "book-meeting": "Κλείσε Ραντεβού",
        "skills-title": "Γλώσσες",
        "portfolio-title": "Πρόσφατα Projects",
        "view-project": "Δες στο GitHub",
        "changelog-title": "Τι νέο υπάρχει",
        "welcome": "Καλώς ήρθες!",
        "popular": "δημοφιλές",
        "links-title": "Σύνδεσμοι",
        "easter-egg": "🎉 ΤΟ ΒΡΗΚΕΣ! 🎉"
    },
    en: {
        "name": "Valentinos Geroutskis",
        "bio": "Software Engineer | Tech Enthusiast",
        "status-available": "Available for work",
        "status-unavailable": "Currently unavailable",
        "theme": "Theme",
        "instagram": "Instagram",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "website": "Website",
        "contact": "Contact",
        "tooltip-instagram": "Follow me on Instagram",
        "tooltip-linkedin": "Connect on LinkedIn",
        "tooltip-github": "Check my projects",
        "tooltip-website": "Visit my website",
        "tooltip-contact": "Send me an email",
        "modal-title": "Get in Touch",
        "form-name": "Your Name",
        "form-email": "Your Email",
        "form-message": "Message",
        "form-send": "Send Message",
        "qr-title": "Scan to visit",
        "download-qr": "Download QR",
        "privacy": "Privacy Policy",
        "copied": "Copied!",
        "share-title": "Share",
        "share-text": "Find me on social media!",
        "copy-link": "Copy Link",
        "cookie-title": "Cookie Settings",
        "cookie-text": "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
        "cookie-learn": "Learn more",
        "cookie-accept": "Accept",
        "cookie-decline": "Decline",
        "greeting-morning": "Good morning!",
        "greeting-afternoon": "Good afternoon!",
        "greeting-evening": "Good evening!",
        "greeting-night": "Good night!",
        "save-contact": "Save Contact",
        "book-meeting": "Book a Meeting",
        "skills-title": "Languages",
        "portfolio-title": "Latest Projects",
        "view-project": "View on GitHub",
        "changelog-title": "What's New",
        "welcome": "Welcome!",
        "popular": "popular",
        "links-title": "Connect",
        "easter-egg": "🎉 YOU FOUND IT! 🎉"
    }
};

// =============== SHARED STATE ===============
let currentLang = localStorage.getItem('lang') || CONFIG.defaultLang;
let cachedGithubRepos = null;
let cachedGithubLanguages = null;

// Helper: get translated name for current language
function getName(lang) {
    lang = lang || currentLang;
    return translations[lang]?.name || CONFIG.name;
}
