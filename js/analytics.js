// 🍱 LinkBento — Analytics
// Google Analytics configuration & event tracking

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
if (CONFIG.googleAnalyticsId) {
    gtag('config', CONFIG.googleAnalyticsId);
}

// =============== ANALYTICS ===============
function trackEvent(eventName, eventData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log('Track:', eventName, eventData);
}

trackEvent('page_view', { page: window.location.pathname });

// =============== CLICK TRACKING ===============
// Παρακολούθηση κλικ σε όλα τα στοιχεία της σελίδας
document.addEventListener('click', (e) => {
    const el = e.target.closest('a, button, .link-btn, .theme-option, .lang-btn, .action-btn, .skill-badge, .portfolio-card');
    if (!el) return;

    // Βρες ένα αναγνωρίσιμο label
    const label = el.textContent?.trim().substring(0, 50)
        || el.getAttribute('aria-label')
        || el.id
        || el.className;

    // Βρες τον τύπο στοιχείου
    let category = 'other';
    if (el.classList.contains('link-btn')) category = 'link';
    else if (el.classList.contains('action-btn')) category = 'action_button';
    else if (el.classList.contains('theme-option')) category = 'theme';
    else if (el.classList.contains('lang-btn')) category = 'language';
    else if (el.classList.contains('skill-badge')) category = 'skill';
    else if (el.classList.contains('portfolio-card')) category = 'portfolio';
    else if (el.tagName === 'A') category = 'link';
    else if (el.tagName === 'BUTTON') category = 'button';

    trackEvent('element_click', {
        event_category: category,
        event_label: label,
        element_id: el.id || '',
        element_class: el.className?.substring?.(0, 100) || '',
        link_url: el.href || '',
        click_x: Math.round(e.pageX),
        click_y: Math.round(e.pageY),
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight
    });
});

// =============== TIME ON PAGE ===============
// Παρακολούθηση χρόνου παραμονής στη σελίδα
const _sessionStart = Date.now();
let _totalActiveTime = 0;
let _lastActiveTimestamp = Date.now();
let _isActive = true;
let _scrollDepthMax = 0;

// Μέτρηση ενεργού χρόνου (σταματάει αν ο χρήστης φύγει από το tab)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (_isActive) {
            _totalActiveTime += Date.now() - _lastActiveTimestamp;
            _isActive = false;
        }
    } else {
        _lastActiveTimestamp = Date.now();
        _isActive = true;
    }
});

// Scroll depth tracking
function _getScrollPercent() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return 100;
    return Math.min(100, Math.round((window.scrollY / scrollable) * 100));
}

window.addEventListener('scroll', () => {
    const scrollPercent = _getScrollPercent();
    if (scrollPercent > _scrollDepthMax) {
        _scrollDepthMax = scrollPercent;
    }
}, { passive: true });

// Scroll depth milestones (25%, 50%, 75%, 100%)
let _scrollMilestones = new Set();
window.addEventListener('scroll', () => {
    const scrollPercent = _getScrollPercent();
    [25, 50, 75, 100].forEach(milestone => {
        if (scrollPercent >= milestone && !_scrollMilestones.has(milestone)) {
            _scrollMilestones.add(milestone);
            trackEvent('scroll_depth', {
                event_category: 'engagement',
                event_label: `${milestone}%`,
                value: milestone
            });
        }
    });
}, { passive: true });

// Αποστολή engagement data πριν φύγει ο χρήστης
function _sendEngagementData() {
    if (_isActive) {
        _totalActiveTime += Date.now() - _lastActiveTimestamp;
    }
    const totalTime = Date.now() - _sessionStart;
    const activeTimeSec = Math.round(_totalActiveTime / 1000);
    const totalTimeSec = Math.round(totalTime / 1000);

    trackEvent('page_engagement', {
        event_category: 'engagement',
        active_time_seconds: activeTimeSec,
        total_time_seconds: totalTimeSec,
        scroll_depth_max: _scrollDepthMax,
        event_label: `${activeTimeSec}s active / ${totalTimeSec}s total`
    });

    // Στείλε και με sendBeacon για αξιοπιστία
    if (navigator.sendBeacon && CONFIG.googleAnalyticsId) {
        const data = {
            v: '2',
            tid: CONFIG.googleAnalyticsId,
            en: 'page_engagement',
            'ep.active_time_seconds': activeTimeSec,
            'ep.total_time_seconds': totalTimeSec,
            'ep.scroll_depth_max': _scrollDepthMax
        };
        navigator.sendBeacon(
            `https://www.google-analytics.com/g/collect?${new URLSearchParams(data).toString()}`
        );
    }
}

// Αποστολή δεδομένων σε beforeunload, pagehide, και ανά 30 δευτερόλεπτα
window.addEventListener('beforeunload', _sendEngagementData);
window.addEventListener('pagehide', _sendEngagementData);

// Periodic engagement ping κάθε 30 δευτερόλεπτα
setInterval(() => {
    if (_isActive) {
        _totalActiveTime += Date.now() - _lastActiveTimestamp;
        _lastActiveTimestamp = Date.now();
    }
    trackEvent('engagement_ping', {
        event_category: 'engagement',
        active_time_seconds: Math.round(_totalActiveTime / 1000),
        scroll_depth_max: _scrollDepthMax
    });
}, 30000);

// =============== EXISTING TRACKING ===============

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
