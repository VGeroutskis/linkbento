// 🍱 LinkBento — Extras
// Easter egg, keyboard nav, cookies, vCard, mobile gestures, link clicks, first visit, SW, security

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

// =============== KEYBOARD NAVIGATION ===============
// Sections: action-btn use Left/Right, everything else uses Up/Down
let navSectionIndex = 0; // 0 = actions, 1 = links, 2 = portfolio
let navItemIndex = -1;

function getNavSections() {
    return [
        { elements: document.querySelectorAll('.action-btn'), horizontal: true },
        { elements: document.querySelectorAll('.link-btn'), horizontal: false },
        { elements: document.querySelectorAll('.portfolio-card-link'), horizontal: true }
    ].filter(s => s.elements.length > 0);
}

function clearNavFocus() {
    document.querySelectorAll('.focused').forEach(el => el.classList.remove('focused'));
}

function isAnyModalActive() {
    return document.getElementById('contactModal')?.classList.contains('active') ||
        document.getElementById('qrModal')?.classList.contains('active') ||
        document.getElementById('shareModal')?.classList.contains('active') ||
        document.getElementById('changelogModal')?.classList.contains('active') ||
        document.getElementById('calendlyModal')?.classList.contains('active');
}

document.addEventListener('keydown', (e) => {
    if (isAnyModalActive()) return;
    
    const sections = getNavSections();
    if (sections.length === 0) return;

    const isArrow = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key);
    if (!isArrow && e.key !== 'Enter' && e.key !== 'Escape') return;

    if (e.key === 'Escape') {
        clearNavFocus();
        navSectionIndex = 0;
        navItemIndex = -1;
        return;
    }

    if (e.key === 'Enter') {
        if (navItemIndex >= 0 && sections[navSectionIndex]) {
            const el = sections[navSectionIndex].elements[navItemIndex];
            if (el) {
                // For portfolio cards, click the link inside
                const link = el.querySelector('a.portfolio-link') || el;
                link.click();
            }
        }
        return;
    }

    e.preventDefault();
    const currentSection = sections[navSectionIndex];
    
    // Up/Down = switch between sections
    if (e.key === 'ArrowDown') {
        if (navItemIndex === -1 || !currentSection?.horizontal) {
            // In vertical section, try to move within items first
            if (!currentSection?.horizontal && navItemIndex >= 0 && navItemIndex < currentSection.elements.length - 1) {
                clearNavFocus();
                navItemIndex++;
            } else {
                // Move to next section
                clearNavFocus();
                navSectionIndex = (navSectionIndex + 1) % sections.length;
                navItemIndex = 0;
            }
        } else {
            // In horizontal section, down goes to next section
            clearNavFocus();
            navSectionIndex = (navSectionIndex + 1) % sections.length;
            navItemIndex = 0;
        }
    } else if (e.key === 'ArrowUp') {
        if (!currentSection?.horizontal && navItemIndex > 0) {
            clearNavFocus();
            navItemIndex--;
        } else {
            clearNavFocus();
            navSectionIndex = navSectionIndex <= 0 ? sections.length - 1 : navSectionIndex - 1;
            const newSection = sections[navSectionIndex];
            navItemIndex = newSection.elements.length - 1;
        }
    } else if (e.key === 'ArrowRight') {
        if (currentSection?.horizontal) {
            clearNavFocus();
            if (navItemIndex === -1) {
                navItemIndex = 0;
            } else {
                navItemIndex = (navItemIndex + 1) % currentSection.elements.length;
            }
        }
    } else if (e.key === 'ArrowLeft') {
        if (currentSection?.horizontal) {
            clearNavFocus();
            if (navItemIndex <= 0) {
                navItemIndex = currentSection.elements.length - 1;
            } else {
                navItemIndex--;
            }
        }
    }

    // Apply focus
    const section = sections[navSectionIndex];
    if (section && navItemIndex >= 0 && navItemIndex < section.elements.length) {
        const el = section.elements[navItemIndex];
        el.classList.add('focused');
        el.focus();
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
    easterText.textContent = translations[currentLang]['easter-egg'];
    easterText.classList.add('active');
    
    // Initial burst
    for (let i = 0; i < 150; i++) {
        createConfetti();
    }
    // Additional waves
    setTimeout(() => { for (let i = 0; i < 80; i++) createConfetti(); }, 2000);
    setTimeout(() => { for (let i = 0; i < 80; i++) createConfetti(); }, 4000);
    setTimeout(() => { for (let i = 0; i < 50; i++) createConfetti(); }, 6000);
    
    // Confetti stops at 8s, text stays until 12s
    setTimeout(() => {
        document.body.classList.remove('easter-egg-active');
    }, 8000);
    setTimeout(() => {
        easterText.classList.remove('active');
    }, 12000);
}

// =============== SERVICE WORKER ===============
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('SW registered:', reg.scope))
            .catch(err => console.log('SW registration failed:', err));
    });
}

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

// =============== vCARD DOWNLOAD ===============
function generateVCard() {
    const v = CONFIG.vcard;
    const lines = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${v.firstName} ${v.lastName}`,
        `N:${v.lastName};${v.firstName};;;`,
        `EMAIL:${v.email}`,
    ];
    if (v.phone) lines.push(`TEL:${v.phone}`);
    lines.push(`URL:${v.website}`);
    lines.push(`TITLE:${v.title}`);
    if (v.company) lines.push(`ORG:${v.company}`);
    lines.push('END:VCARD');
    const vcard = lines.join('\n');
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
    trackEvent('vcard_download', { action: 'click' });
    if (navigator.vibrate) navigator.vibrate(50);
});

// =============== LINK CLICK COUNTER ===============
function getLinkClicks() {
    return JSON.parse(localStorage.getItem('linkClicks') || '{}');
}

function incrementLinkClick(platform) {
    const clicks = getLinkClicks();
    clicks[platform] = (clicks[platform] || 0) + 1;
    localStorage.setItem('linkClicks', JSON.stringify(clicks));

    // Αποθήκευσε και λεπτομερή στατιστικά (timestamps, sessions)
    const detailed = JSON.parse(localStorage.getItem('linkClicksDetailed') || '{}');
    if (!detailed[platform]) {
        detailed[platform] = { firstClick: Date.now(), lastClick: Date.now(), clicks: [] };
    }
    detailed[platform].lastClick = Date.now();
    // Κράτα μόνο τα τελευταία 100 clicks ανά πλατφόρμα
    detailed[platform].clicks.push(Date.now());
    if (detailed[platform].clicks.length > 100) {
        detailed[platform].clicks = detailed[platform].clicks.slice(-100);
    }
    localStorage.setItem('linkClicksDetailed', JSON.stringify(detailed));

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
