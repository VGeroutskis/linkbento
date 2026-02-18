// 🍱 LinkBento — Open source personal links page
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
        "links-title": "Σύνδεσμοι"
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
        "links-title": "Connect"
    }
};

// Helper: get translated name for current language
function getName(lang) {
    lang = lang || currentLang;
    return translations[lang]?.name || CONFIG.name;
}

// =============== INITIALIZATION ===============
document.getElementById("year").textContent = new Date().getFullYear();

let currentLang = localStorage.getItem('lang') || CONFIG.defaultLang;

// Cache for GitHub data (declared early for updateLanguage access)
let cachedGithubRepos = null;
let cachedGithubLanguages = null;

// ── Dynamic page setup from CONFIG ──
function initPage() {
    const lang = currentLang;
    const name = getName(lang);
    // Title
    document.title = CONFIG.seo.title[lang] || CONFIG.seo.title.en;

    // Favicon
    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
        if (CONFIG.favicon.startsWith('http') || CONFIG.favicon.startsWith('/')) {
            faviconLink.href = CONFIG.favicon;
        } else {
            faviconLink.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${CONFIG.favicon}</text></svg>`;
        }
    }

    // Meta tags
    setMeta('description', CONFIG.seo.description[lang] || CONFIG.seo.description.en);
    setMeta('keywords', CONFIG.seo.keywords);
    setMeta('author', name);
    setMeta('theme-color', CONFIG.themeColor);

    // Open Graph
    setMetaProperty('og:title', CONFIG.seo.title[lang] || CONFIG.seo.title.en);
    setMetaProperty('og:description', CONFIG.seo.description[lang] || CONFIG.seo.description.en);
    setMetaProperty('og:url', CONFIG.siteUrl);
    setMetaProperty('og:image', CONFIG.seo.ogImage);

    // Twitter Card
    setMetaProperty('twitter:title', CONFIG.seo.title[lang] || CONFIG.seo.title.en, 'name');
    setMetaProperty('twitter:description', CONFIG.seo.description[lang] || CONFIG.seo.description.en, 'name');

    // Profile section
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.src = CONFIG.profileImage;
        profileImg.alt = name;
    }
    const nameEl = document.querySelector('.profile-section h1');
    if (nameEl) nameEl.textContent = name;

    // Footer
    const copyrightEl = document.querySelector('footer .copyright-name');
    if (copyrightEl) copyrightEl.textContent = name;

    const linkbentoLink = document.querySelector('footer .linkbento-link');
    if (linkbentoLink) linkbentoLink.href = CONFIG.githubRepoUrl;

    // Render social links
    renderLinks();
}

function setMeta(name, content) {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (el) {
        el.setAttribute('content', content);
    } else {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        el.setAttribute('content', content);
        document.head.appendChild(el);
    }
}

function setMetaProperty(property, content, attr = 'property') {
    let el = document.querySelector(`meta[${attr}="${property}"]`);
    if (el) {
        el.setAttribute('content', content);
    } else {
        el = document.createElement('meta');
        el.setAttribute(attr, property);
        el.setAttribute('content', content);
        document.head.appendChild(el);
    }
}

function renderLinks() {
    const container = document.getElementById('main-content');
    if (!container) return;

    container.innerHTML = CONFIG.links.map(link => {
        const isExternal = link.external ? ' target="_blank"' : '';
        const actionId = link.action === 'contact' ? ' id="contactBtn"' : (link.action === 'calendly' ? ' id="calendlyBtn"' : '');
        return `<a href="${link.url}"${isExternal} class="link-btn ${link.cssClass}" tabindex="0"${actionId}>
            <span class="tooltip" data-lang-key="${link.tooltipKey}">${translations[currentLang][link.tooltipKey] || ''}</span>
            <i class="${link.icon}"></i><span data-lang-key="${link.langKey}">${translations[currentLang][link.langKey] || ''}</span>
        </a>`;
    }).join('\n            ');

    // Re-bind link-specific event listeners
    bindLinkEvents();
}

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update title & meta for current language
    document.title = CONFIG.seo.title[lang] || CONFIG.seo.title.en;
    setMeta('description', CONFIG.seo.description[lang] || CONFIG.seo.description.en);
    setMeta('author', getName(lang));
    setMetaProperty('og:title', CONFIG.seo.title[lang] || CONFIG.seo.title.en);
    setMetaProperty('og:description', CONFIG.seo.description[lang] || CONFIG.seo.description.en);
    setMetaProperty('twitter:title', CONFIG.seo.title[lang] || CONFIG.seo.title.en, 'name');
    setMetaProperty('twitter:description', CONFIG.seo.description[lang] || CONFIG.seo.description.en, 'name');

    // Update name
    const nameEl = document.querySelector('.profile-section h1');
    if (nameEl) nameEl.textContent = getName(lang);
    const copyrightEl = document.querySelector('footer .copyright-name');
    if (copyrightEl) copyrightEl.textContent = getName(lang);

    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    updateStatusBadge();
    if (typeof updateTime === 'function') updateTime();
    if (typeof updateGreeting === 'function') updateGreeting();
    // Re-render portfolio with cached GitHub data if available
    if (cachedGithubRepos && cachedGithubRepos.length > 0 && typeof renderPortfolioFromGithub === 'function') {
        renderPortfolioFromGithub(cachedGithubRepos);
    } else if (typeof renderPortfolio === 'function') {
        renderPortfolio();
    }
    if (typeof updatePopularBadges === 'function') updatePopularBadges();
    // Re-render changelog if modal is open
    const changelogModalEl = document.getElementById('changelogModal');
    if (changelogModalEl?.classList.contains('active')) {
        renderChangelog();
    }
}

// =============== STATUS BADGE ===============
function updateStatusBadge() {
    const badge = document.getElementById('statusBadge');
    const dot = document.getElementById('statusDot');
    const text = document.getElementById('statusText');
    
    if (CONFIG.hideStatusBadge) {
        badge.style.display = 'none';
        return;
    }
    
    badge.style.display = 'inline-flex';
    
    if (CONFIG.isAvailable) {
        dot.style.background = '#00ff64';
        badge.style.background = 'rgba(0, 255, 100, 0.1)';
        badge.style.borderColor = 'rgba(0, 255, 100, 0.3)';
        text.textContent = CONFIG.customStatusText[currentLang] || translations[currentLang]['status-available'];
    } else {
        dot.style.background = '#ff4444';
        badge.style.background = 'rgba(255, 68, 68, 0.1)';
        badge.style.borderColor = 'rgba(255, 68, 68, 0.3)';
        text.textContent = CONFIG.customStatusText[currentLang] || translations[currentLang]['status-unavailable'];
    }
}

// Initialize page from CONFIG
initPage();
updateLanguage(currentLang);

// Typewriter effect on bio
const bioElement = document.querySelector('.bio');
if (bioElement && bioElement.textContent) {
    const bioText = bioElement.textContent;
    setTimeout(() => typewriter(bioElement, bioText), 1500);
}

// Language toggle buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.getAttribute('data-lang'));
    });
});

// =============== SECURITY ===============
document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'i' || e.key === 'U' || e.key === 'S' || e.key === 'I')) {
        e.preventDefault();
    }
    if (e.key === 'F12') {
        e.preventDefault();
    }
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', e => e.preventDefault());
});

// =============== LOADING SCREEN ===============
window.addEventListener('load', function() {
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 800);
});

// =============== THEME PICKER ===============
const themeToggle = document.getElementById('themeToggle');
const themePicker = document.getElementById('themePicker');
const themeOptions = document.querySelectorAll('.theme-option');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || CONFIG.defaultTheme;
if (savedTheme && savedTheme !== 'dark') {
    html.setAttribute('data-theme', savedTheme);
} else {
    html.removeAttribute('data-theme');
}
// Set active class on the correct theme option
themeOptions.forEach(o => o.classList.remove('active'));
document.querySelector(`.theme-option.${savedTheme}`)?.classList.add('active');

themeToggle.addEventListener('click', () => {
    themePicker.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!themeToggle.contains(e.target) && !themePicker.contains(e.target)) {
        themePicker.classList.remove('active');
    }
});

themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        const theme = option.getAttribute('data-theme');
        themeOptions.forEach(o => o.classList.remove('active'));
        option.classList.add('active');
        
        if (theme === 'dark') {
            html.removeAttribute('data-theme');
        } else {
            html.setAttribute('data-theme', theme);
        }
        localStorage.setItem('theme', theme);
    });
});

// =============== TIMEZONE ===============
function updateTime() {
    const options = { 
        timeZone: CONFIG.timezone, 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false
    };
    const time = new Date().toLocaleTimeString('en-GB', options);
    const location = CONFIG.location[currentLang] || CONFIG.location.en;
    document.getElementById('locationTime').textContent = `${location} • ${time}`;
}
updateTime();
setInterval(updateTime, 60000);

// =============== CONTACT MODAL ===============
const contactModal = document.getElementById('contactModal');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');

// bindLinkEvents — called after renderLinks() to bind dynamically created link buttons
function bindLinkEvents() {
    // Contact button
    const contactBtn = document.getElementById('contactBtn');
    contactBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.classList.add('active');
    });

    // Calendly button
    const calendlyBtn = document.getElementById('calendlyBtn');
    calendlyBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(CONFIG.calendlyUrl, '_blank');
        trackEvent('calendly_click', 'click');
    });

    // 3D tilt on links
    document.querySelectorAll('.link-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            btn.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // Link click tracking & popular badges
    document.querySelectorAll('.link-btn').forEach(link => {
        link.addEventListener('click', () => {
            const platform = link.querySelector('[data-lang-key]')?.getAttribute('data-lang-key');
            if (platform) incrementLinkClick(platform);
            trackEvent('link_click', { platform: link.textContent.trim() });
        });
    });

    updatePopularBadges();
}

modalClose.addEventListener('click', () => {
    contactModal.classList.remove('active');
});

contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.classList.remove('active');
    }
});

// Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();
    
    let subject, body;
    
    if (currentLang === 'el') {
        subject = `Μήνυμα από ${name} μέσω Links Page`;
        body = `Γεια σου,

Έλαβες νέο μήνυμα από τη σελίδα links.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ΟΝΟΜΑ: ${name}
EMAIL: ${email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ΜΗΝΥΜΑ:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Στάλθηκε μέσω ${CONFIG.siteUrl}`;
    } else {
        subject = `Contact from ${name} via Links Page`;
        body = `Hello,

You have received a new message from your links page.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FROM: ${name}
EMAIL: ${email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent via ${CONFIG.siteUrl}`;
    }

    const mailtoLink = `mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    contactModal.classList.remove('active');
    contactForm.reset();
});

// =============== CURSOR TRAIL ===============
const trails = [
    document.getElementById('cursorTrail1'),
    document.getElementById('cursorTrail2'),
    document.getElementById('cursorTrail3')
];

let mouseX = 0, mouseY = 0;
const trailPositions = trails.map(() => ({ x: 0, y: 0 }));

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    trailPositions.forEach((pos, i) => {
        const target = i === 0 ? { x: mouseX, y: mouseY } : trailPositions[i - 1];
        pos.x += (target.x - pos.x) * (0.3 - i * 0.08);
        pos.y += (target.y - pos.y) * (0.3 - i * 0.08);
        
        trails[i].style.left = pos.x - 5 + 'px';
        trails[i].style.top = pos.y - 5 + 'px';
        trails[i].style.opacity = 0.6 - i * 0.15;
        trails[i].style.transform = `scale(${1 - i * 0.2})`;
    });
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Hide cursor trail on mobile
if ('ontouchstart' in window) {
    trails.forEach(t => t.style.display = 'none');
}

// =============== KEYBOARD NAVIGATION ===============
let currentIndex = -1;

function getFocusableElements() {
    return document.querySelectorAll('.link-btn, .action-btn, .lang-btn, #themeToggle, #vcardBtn, #changelogBtn');
}

document.addEventListener('keydown', (e) => {
    // Skip if any modal is active
    if (contactModal.classList.contains('active') ||
        document.getElementById('qrModal')?.classList.contains('active') ||
        document.getElementById('shareModal')?.classList.contains('active') ||
        document.getElementById('changelogModal')?.classList.contains('active')) return;
    
    const focusable = getFocusableElements();
    if (focusable.length === 0) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        focusable.forEach(btn => btn.classList.remove('focused'));
        
        if (e.key === 'ArrowDown') {
            currentIndex = (currentIndex + 1) % focusable.length;
        } else {
            currentIndex = currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1;
        }
        
        focusable[currentIndex].classList.add('focused');
        focusable[currentIndex].focus();
        focusable[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    if (e.key === 'Enter' && currentIndex >= 0) {
        focusable[currentIndex].click();
    }
    
    // Escape resets navigation
    if (e.key === 'Escape') {
        focusable.forEach(btn => btn.classList.remove('focused'));
        currentIndex = -1;
    }
});

// =============== EASTER EGG (Konami Code) ===============
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.classList.add('easter-egg-active');
    const easterText = document.getElementById('easterEggText');
    easterText.classList.add('active');
    
    // Initial burst
    for (let i = 0; i < 150; i++) {
        createConfetti();
    }
    // Additional waves
    setTimeout(() => { for (let i = 0; i < 80; i++) createConfetti(); }, 2000);
    setTimeout(() => { for (let i = 0; i < 80; i++) createConfetti(); }, 4000);
    setTimeout(() => { for (let i = 0; i < 50; i++) createConfetti(); }, 6000);
    
    setTimeout(() => {
        document.body.classList.remove('easter-egg-active');
        easterText.classList.remove('active');
    }, 8000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: hsl(${Math.random() * 360}, 100%, 50%);
        left: ${Math.random() * 100}vw;
        top: -10px;
        z-index: 10002;
        pointer-events: none;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
    `;
    document.body.appendChild(confetti);
    
    const animation = confetti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(100vh) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
        duration: 2000 + Math.random() * 1000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    animation.onfinish = () => confetti.remove();
}

// =============== PARTICLES ===============
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.reset();
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${this.opacity})`;
        ctx.fill();
    }
}

for (let i = 0; i < 80; i++) {
    particlesArray.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// =============== SERVICE WORKER ===============
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('SW registered:', reg.scope))
            .catch(err => console.log('SW registration failed:', err));
    });
}

// =============== SHARE & COPY BUTTONS ===============
const shareBtn = document.getElementById('shareBtn');
const copyBtn = document.getElementById('copyBtn');
const qrBtn = document.getElementById('qrBtn');
const qrModal = document.getElementById('qrModal');
const qrModalClose = document.getElementById('qrModalClose');
const shareModal = document.getElementById('shareModal');
const shareModalClose = document.getElementById('shareModalClose');

// Share button
shareBtn?.addEventListener('click', async (e) => {
    e.stopPropagation();
    
    try {
        if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            await navigator.share({
                title: getName(),
                text: translations[currentLang]['share-text'],
                url: window.location.href
            });
            trackEvent('share', 'native');
        } else {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(translations[currentLang]['share-text']);
            
            document.getElementById('shareX').href = `https://x.com/intent/tweet?url=${url}&text=${text}`;
            document.getElementById('shareFacebook').href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            document.getElementById('shareLinkedin').href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            document.getElementById('shareWhatsapp').href = `https://wa.me/?text=${text}%20${url}`;
            document.getElementById('shareTelegram').href = `https://t.me/share/url?url=${url}&text=${text}`;
            
            shareModal.classList.add('active');
            trackEvent('share', 'modal_open');
        }
    } catch (err) {
        console.log('Share failed:', err);
    }
    
    if (navigator.vibrate) navigator.vibrate(50);
});

// Close share modal
shareModalClose?.addEventListener('click', () => {
    shareModal.classList.remove('active');
});

shareModal?.addEventListener('click', (e) => {
    if (e.target === shareModal) shareModal.classList.remove('active');
});

// Copy link in share modal
document.getElementById('shareCopyLink')?.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        await navigator.clipboard.writeText(window.location.href);
        showToast(translations[currentLang]['copied']);
        shareModal.classList.remove('active');
        trackEvent('share', 'copy_link');
    } catch (err) {
        console.log('Copy failed:', err);
    }
});

// Copy button
copyBtn?.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        showToast(translations[currentLang]['copied']);
        trackEvent('copy_link', 'click');
        if (navigator.vibrate) navigator.vibrate(50);
    } catch (err) {
        console.log('Copy failed:', err);
    }
});

// Toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--accent-color);
        color: var(--bg-primary);
        padding: 12px 24px;
        border-radius: 30px;
        font-weight: 600;
        z-index: 9999;
        animation: fadeInBlur 0.3s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// =============== QR CODE ===============
let qrCodeGenerated = false;

qrBtn?.addEventListener('click', () => {
    qrModal.classList.add('active');
    if (!qrCodeGenerated) {
        const qrContainer = document.getElementById('qrCode');
        const pageUrl = window.location.href;
        
        const qrImg = document.createElement('img');
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pageUrl)}`;
        qrImg.alt = 'QR Code';
        qrImg.style.borderRadius = '10px';
        qrImg.onload = () => {
            qrCodeGenerated = true;
        };
        qrImg.onerror = () => {
            qrContainer.innerHTML = '<div style="color: red;">Error generating QR code</div>';
        };
        
        qrContainer.innerHTML = '';
        qrContainer.appendChild(qrImg);
    }
    trackEvent('qr_modal', 'open');
});

qrModalClose?.addEventListener('click', () => {
    qrModal.classList.remove('active');
});

qrModal?.addEventListener('click', (e) => {
    if (e.target === qrModal) qrModal.classList.remove('active');
});

document.getElementById('downloadQR')?.addEventListener('click', () => {
    const img = document.querySelector('#qrCode img');
    if (img) {
        const canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 200;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        const link = document.createElement('a');
        link.download = `${getName().toLowerCase().replace(/\s+/g, '-')}-qr.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        trackEvent('qr_download', 'click');
    }
});

// =============== TYPEWRITER EFFECT ===============
function typewriter(element, text, speed = 50) {
    element.classList.add('typewriter');
    element.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            element.classList.remove('typewriter');
        }
    }, speed);
}

// =============== GITHUB API ===============
async function fetchGithubData() {
    if (!CONFIG.githubUsername) return;
    try {
        // Fetch user data and repos in parallel
        const [userRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${CONFIG.githubUsername}`),
            fetch(`https://api.github.com/users/${CONFIG.githubUsername}/repos?sort=updated&per_page=100`)
        ]);
        
        if (userRes.ok && reposRes.ok) {
            const userData = await userRes.json();
            const repos = await reposRes.json();
            
            // Update stats with animation
            const repoCount = document.getElementById('repoCount');
            const followerCount = document.getElementById('followerCount');
            if (repoCount) animateCounter(repoCount, userData.public_repos || 0);
            if (followerCount) animateCounter(followerCount, userData.followers || 0);
            
            // Extract languages from repos
            const languages = {};
            repos.forEach(repo => {
                if (repo.language) {
                    languages[repo.language] = (languages[repo.language] || 0) + 1;
                }
            });
            
            // Sort by usage and take top 8
            const topLanguages = Object.entries(languages)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 8)
                .map(([lang]) => lang);
            
            // Render skills from GitHub languages
            cachedGithubLanguages = topLanguages;
            renderSkillsFromGithub(topLanguages);
            
            // Get top repos (by stars, then by recent update)
            const topRepos = repos
                .filter(repo => !repo.fork && repo.description) // Non-forks with description
                .sort((a, b) => {
                    // Sort by stars first, then by update date
                    if (b.stargazers_count !== a.stargazers_count) {
                        return b.stargazers_count - a.stargazers_count;
                    }
                    return new Date(b.updated_at) - new Date(a.updated_at);
                })
                .slice(0, 4);
            
            // Render portfolio from GitHub repos
            cachedGithubRepos = topRepos;
            renderPortfolioFromGithub(topRepos);
        }
    } catch (err) {
        console.log('GitHub API error:', err);
        // Fallback to CONFIG if API fails
        renderSkills();
        renderPortfolio();
    }
}

function renderSkillsFromGithub(languages) {
    const container = document.getElementById('skillsContainer');
    if (!container || languages.length === 0) {
        renderSkills(); // Fallback
        return;
    }
    
    container.innerHTML = languages.map((lang, index) => 
        `<span class="skill-badge" style="animation-delay: ${index * 0.1}s">
            <i class="devicon-${getDevIcon(lang)} colored"></i> ${lang}
        </span>`
    ).join('');
}

function getDevIcon(language) {
    const icons = {
        'JavaScript': 'javascript-plain',
        'TypeScript': 'typescript-plain',
        'Python': 'python-plain',
        'Java': 'java-plain',
        'C#': 'csharp-plain',
        'C++': 'cplusplus-plain',
        'C': 'c-plain',
        'Go': 'go-plain',
        'Rust': 'rust-plain',
        'Ruby': 'ruby-plain',
        'PHP': 'php-plain',
        'Swift': 'swift-plain',
        'Kotlin': 'kotlin-plain',
        'HTML': 'html5-plain',
        'CSS': 'css3-plain',
        'Shell': 'bash-plain',
        'Dart': 'dart-plain',
        'Vue': 'vuejs-plain',
        'React': 'react-original'
    };
    return icons[language] || 'devicon-plain';
}

function renderPortfolioFromGithub(repos) {
    const container = document.getElementById('portfolioContainer');
    if (!container || repos.length === 0) {
        renderPortfolio(); // Fallback
        return;
    }
    
    container.innerHTML = repos.map((repo, index) => `
        <div class="portfolio-card" style="animation-delay: ${index * 0.15}s">
            <div class="portfolio-header">
                <i class="fas fa-folder-open"></i>
                <div class="portfolio-stats">
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                </div>
            </div>
            <div class="portfolio-info">
                <h4>${repo.name}</h4>
                <p>${repo.description || ''}</p>
                <div class="portfolio-meta">
                    ${repo.language ? `<span class="repo-lang"><span class="lang-dot" style="background: ${getLanguageColor(repo.language)}"></span>${repo.language}</span>` : ''}
                </div>
                <a href="${repo.html_url}" target="_blank" class="portfolio-link">
                    ${translations[currentLang]['view-project']} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'Python': '#3572A5',
        'Java': '#b07219',
        'C#': '#178600',
        'C++': '#f34b7d',
        'C': '#555555',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'Ruby': '#701516',
        'PHP': '#4F5D95',
        'Swift': '#F05138',
        'Kotlin': '#A97BFF',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Shell': '#89e051',
        'Vue': '#41b883'
    };
    return colors[language] || '#858585';
}

// Fetch GitHub data on load
fetchGithubData();

// =============== MOBILE GESTURES ===============
let touchStartY = 0;
const pullIndicator = document.getElementById('pullIndicator');

document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const diff = touchY - touchStartY;
    
    if (window.scrollY === 0 && diff > 50) {
        pullIndicator?.classList.add('active');
    }
}, { passive: true });

document.addEventListener('touchend', () => {
    if (pullIndicator?.classList.contains('active')) {
        pullIndicator.classList.remove('active');
        location.reload();
    }
});

// =============== ANALYTICS ===============
function trackEvent(eventName, eventData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log('Track:', eventName, eventData);
}

trackEvent('page_view', { page: window.location.pathname });

document.querySelectorAll('.theme-option').forEach(opt => {
    opt.addEventListener('click', () => {
        trackEvent('theme_change', { theme: opt.dataset.theme });
    });
});

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('language_change', { lang: btn.dataset.lang });
    });
});

// =============== COOKIE CONSENT ===============
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookies = document.getElementById('acceptCookies');
const declineCookies = document.getElementById('declineCookies');

if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
        cookieBanner?.classList.add('active');
    }, 1500);
}

acceptCookies?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner?.classList.remove('active');
    trackEvent('cookie_consent', { action: 'accepted' });
});

declineCookies?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieBanner?.classList.remove('active');
    trackEvent('cookie_consent', { action: 'declined' });
});

// =============== TIME-BASED GREETING ===============
function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return translations[currentLang]['greeting-morning'];
    if (hour >= 12 && hour < 17) return translations[currentLang]['greeting-afternoon'];
    if (hour >= 17 && hour < 21) return translations[currentLang]['greeting-evening'];
    return translations[currentLang]['greeting-night'];
}

function updateGreeting() {
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        greetingEl.textContent = getGreeting();
        greetingEl.classList.add('fade-in');
    }
}
updateGreeting();

// =============== SYSTEM THEME AUTO ===============
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    return 'dark';
}

// Check for auto theme option
const autoThemeOption = document.querySelector('.theme-option[data-theme="auto"]');
if (autoThemeOption) {
    autoThemeOption.addEventListener('click', () => {
        const systemTheme = detectSystemTheme();
        html.setAttribute('data-theme', systemTheme);
        localStorage.setItem('theme', 'auto');
    });
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('theme') === 'auto') {
        html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});

// =============== vCARD DOWNLOAD ===============
function generateVCard() {
    const v = CONFIG.vcard;
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${v.firstName} ${v.lastName}
N:${v.lastName};${v.firstName};;;
EMAIL:${v.email}
${v.phone ? 'TEL:' + v.phone : ''}
URL:${v.website}
TITLE:${v.title}
${v.company ? 'ORG:' + v.company : ''}
END:VCARD`;
    return vcard;
}

document.getElementById('vcardBtn')?.addEventListener('click', () => {
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${CONFIG.vcard.firstName}-${CONFIG.vcard.lastName}.vcf`;
    link.click();
    URL.revokeObjectURL(url);
    trackEvent('vcard_download', 'click');
    if (navigator.vibrate) navigator.vibrate(50);
});

// =============== ANIMATED COUNTERS ===============
function animateCounter(element, target, duration = 1500) {
    if (!element || isNaN(target)) return;
    
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(update);
}

// =============== LINK CLICK COUNTER ===============
function getLinkClicks() {
    return JSON.parse(localStorage.getItem('linkClicks') || '{}');
}

function incrementLinkClick(platform) {
    const clicks = getLinkClicks();
    clicks[platform] = (clicks[platform] || 0) + 1;
    localStorage.setItem('linkClicks', JSON.stringify(clicks));
    updatePopularBadges();
}

function updatePopularBadges() {
    const clicks = getLinkClicks();
    const maxClicks = Math.max(...Object.values(clicks), 0);
    
    document.querySelectorAll('.link-btn').forEach(link => {
        const platform = link.querySelector('[data-lang-key]')?.getAttribute('data-lang-key');
        const clickCount = clicks[platform] || 0;
        
        // Remove existing badge
        link.querySelector('.popular-badge')?.remove();
        
        // Add badge if most popular and has clicks
        if (clickCount > 0 && clickCount === maxClicks && maxClicks >= 3) {
            const badge = document.createElement('span');
            badge.className = 'popular-badge';
            badge.innerHTML = `<i class="fas fa-fire"></i> ${translations[currentLang]['popular']}`;
            link.appendChild(badge);
        }
    });
}

// =============== FIRST VISIT CONFETTI ===============
if (!localStorage.getItem('hasVisited')) {
    localStorage.setItem('hasVisited', 'true');
    
    setTimeout(() => {
        // Show welcome toast
        showToast(translations[currentLang]['welcome']);
        
        // Trigger confetti
        for (let i = 0; i < 50; i++) {
            setTimeout(() => createConfetti(), i * 30);
        }
    }, 1500);
}

// =============== CHANGELOG MODAL ===============
const changelogBtn = document.getElementById('changelogBtn');
const changelogModal = document.getElementById('changelogModal');
const changelogModalClose = document.getElementById('changelogModalClose');

changelogBtn?.addEventListener('click', () => {
    renderChangelog();
    changelogModal?.classList.add('active');
    trackEvent('changelog_view', 'click');
});

changelogModalClose?.addEventListener('click', () => {
    changelogModal?.classList.remove('active');
});

changelogModal?.addEventListener('click', (e) => {
    if (e.target === changelogModal) changelogModal.classList.remove('active');
});

let changelogRawCache = null;

const categoryIconMap = {
    'Added': 'fa-plus-circle',
    'Changed': 'fa-pen-circle',
    'Fixed': 'fa-bug',
    'Removed': 'fa-trash',
    'Deprecated': 'fa-exclamation-triangle',
    'Security': 'fa-shield-alt',
    'Προσθήκη': 'fa-plus-circle',
    'Αλλαγή': 'fa-pen-circle',
    'Διόρθωση': 'fa-bug',
    'Αφαίρεση': 'fa-trash',
    'Απόσυρση': 'fa-exclamation-triangle',
    'Ασφάλεια': 'fa-shield-alt'
};

function parseChangelog(markdown, lang) {
    const entries = [];
    const sections = markdown.split(/^## /m).filter(s => s.trim());
    
    for (const section of sections) {
        const lines = section.trim().split('\n');
        const headerMatch = lines[0].match(/\[([^\]]+)\]\s*-\s*(.+)/);
        if (!headerMatch) continue;
        
        const version = headerMatch[1];
        const date = headerMatch[2].trim();
        const changes = [];
        let currentCategory = '';
        let currentLangBlock = null;
        
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Detect language markers <!-- en --> or <!-- el -->
            const langMatch = line.match(/^<!--\s*(en|el)\s*-->$/);
            if (langMatch) {
                currentLangBlock = langMatch[1];
                continue;
            }
            
            // Only process lines for the requested language
            if (currentLangBlock && currentLangBlock !== lang) continue;
            
            const categoryMatch = line.match(/^### (.+)/);
            if (categoryMatch) {
                currentCategory = categoryMatch[1];
                continue;
            }
            const itemMatch = line.match(/^- (.+)/);
            if (itemMatch) {
                changes.push({ category: currentCategory, text: itemMatch[1] });
            }
        }
        
        if (changes.length > 0) {
            entries.push({ version, date, changes });
        }
    }
    return entries;
}

async function renderChangelog() {
    const container = document.getElementById('changelogContent');
    if (!container) return;
    
    const lang = currentLang;
    
    if (!changelogRawCache) {
        try {
            container.innerHTML = '<div class="changelog-loading"><i class="fas fa-spinner fa-spin"></i></div>';
            const response = await fetch(CONFIG.changelogFile);
            if (!response.ok) throw new Error('Failed to load changelog');
            changelogRawCache = await response.text();
        } catch (error) {
            // file:/// δεν υποστηρίζει fetch — δείξε link στο GitHub
            const isGreek = lang === 'el';
            container.innerHTML = `<div style="text-align:center; padding: 20px;">
                <p style="opacity:0.6; margin-bottom: 12px;">${isGreek ? 'Το changelog δεν είναι διαθέσιμο τοπικά.' : 'Changelog is not available locally.'}</p>
                <a href="${CONFIG.githubRepoUrl}/blob/main/CHANGELOG.md" target="_blank" 
                   style="color: var(--accent-color); text-decoration: none; font-weight: 600;">
                    <i class="fab fa-github"></i> ${isGreek ? 'Δες στο GitHub' : 'View on GitHub'}
                </a>
            </div>`;
            return;
        }
    }
    
    const entries = parseChangelog(changelogRawCache, lang);
    
    container.innerHTML = entries.map(entry => {
        const changesHtml = entry.changes.map(c => {
            const icon = categoryIconMap[c.category] || 'fa-circle';
            return `<div class="changelog-change"><i class="fas ${icon}"></i> ${c.text}</div>`;
        }).join('');
        
        return `
            <div class="changelog-item">
                <div class="changelog-header">
                    <span class="changelog-version">v${entry.version}</span>
                    <span class="changelog-date">${entry.date}</span>
                </div>
                <div class="changelog-changes">${changesHtml}</div>
            </div>
        `;
    }).join('');
}

// =============== SKILLS RENDER ===============
function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container) return;
    
    container.innerHTML = CONFIG.skills.map((skill, index) => 
        `<span class="skill-badge" style="animation-delay: ${index * 0.1}s">${skill}</span>`
    ).join('');
}

// =============== PORTFOLIO RENDER ===============
function renderPortfolio() {
    const container = document.getElementById('portfolioContainer');
    if (!container) return;
    
    container.innerHTML = CONFIG.portfolio.map((project, index) => `
        <div class="portfolio-card" style="animation-delay: ${index * 0.15}s">
            <img src="${project.image}" alt="${project.title[currentLang]}" loading="lazy">
            <div class="portfolio-info">
                <h4>${project.title[currentLang]}</h4>
                <p>${project.description[currentLang]}</p>
                <a href="${project.link}" target="_blank" class="portfolio-link">
                    ${translations[currentLang]['view-project']} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}
