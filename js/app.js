// 🍱 LinkBento — App
// Core initialization, page setup, language, status badge, links

// =============== INITIALIZATION ===============
document.getElementById("year").textContent = new Date().getFullYear();

// ── Dynamic page setup from CONFIG ──
function initPage() {
    const lang = currentLang;
    const name = getName(lang);

    // Set html lang attribute
    document.documentElement.lang = lang;

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

    // Update html lang attribute
    document.documentElement.lang = lang;

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

// =============== BIND LINK EVENTS ===============
// Called after renderLinks() to bind dynamically created link buttons
function bindLinkEvents() {
    // Contact button
    const contactBtn = document.getElementById('contactBtn');
    contactBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('contactModal').classList.add('active');
    });

    // Calendly button — opens inline embed in custom modal
    const calendlyBtn = document.getElementById('calendlyBtn');
    const calendlyModal = document.getElementById('calendlyModal');
    const calendlyModalClose = document.getElementById('calendlyModalClose');
    let calendlyLoaded = false;

    calendlyBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        calendlyModal?.classList.add('active');

        if (!calendlyLoaded && typeof Calendly !== 'undefined') {
            const container = document.getElementById('calendlyContainer');
            container.innerHTML = '';
            // Append params for compact view without Calendly's own banners
            const url = CONFIG.calendlyUrl + (CONFIG.calendlyUrl.includes('?') ? '&' : '?') +
                'hide_gdpr_banner=1&hide_landing_page_details=1&hide_event_type_details=1';
            Calendly.initInlineWidget({
                url: url,
                parentElement: container,
                prefill: {},
                utm: {}
            });
            calendlyLoaded = true;
        }
        trackEvent('calendly_click', { action: 'click' });
    });

    calendlyModalClose?.addEventListener('click', () => {
        calendlyModal?.classList.remove('active');
    });

    calendlyModal?.addEventListener('click', (e) => {
        if (e.target === calendlyModal) calendlyModal.classList.remove('active');
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

// =============== RUN INITIALIZATION ===============
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

// =============== LOADING SCREEN ===============
window.addEventListener('load', function() {
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 800);
});
