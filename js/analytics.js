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

// =============== BUTTON POPULARITY ===============
// Εύρεση του πιο δημοφιλούς κουμπιού μέσω analytics

function getButtonStats() {
    const clicks = JSON.parse(localStorage.getItem('linkClicks') || '{}');
    const detailed = JSON.parse(localStorage.getItem('linkClicksDetailed') || '{}');

    // Δημιούργησε sorted array με στατιστικά
    const stats = Object.entries(clicks)
        .map(([name, count]) => {
            const detail = detailed[name] || {};
            const clickTimes = detail.clicks || [];

            // Clicks τελευταίες 24 ώρες
            const now = Date.now();
            const last24h = clickTimes.filter(t => now - t < 86400000).length;
            const last7d = clickTimes.filter(t => now - t < 604800000).length;

            return {
                button: name,
                total_clicks: count,
                clicks_24h: last24h,
                clicks_7d: last7d,
                first_click: detail.firstClick ? new Date(detail.firstClick).toLocaleString() : '—',
                last_click: detail.lastClick ? new Date(detail.lastClick).toLocaleString() : '—',
                pct: 0
            };
        })
        .sort((a, b) => b.total_clicks - a.total_clicks);

    // Υπολόγισε ποσοστά
    const totalAll = stats.reduce((s, x) => s + x.total_clicks, 0);
    stats.forEach(s => {
        s.pct = totalAll > 0 ? Math.round((s.total_clicks / totalAll) * 100) : 0;
    });

    return stats;
}

function printButtonStats() {
    const stats = getButtonStats();
    if (stats.length === 0) {
        console.log('📊 Δεν υπάρχουν κλικ ακόμα.');
        return stats;
    }

    console.log('\n🏆 LinkBento — Button Popularity Report');
    console.log('═'.repeat(50));
    console.table(stats.map((s, i) => ({
        '#': i + 1,
        'Button': s.button,
        'Total': s.total_clicks,
        '24h': s.clicks_24h,
        '7d': s.clicks_7d,
        '%': s.pct + '%',
        'Last Click': s.last_click
    })));

    const top = stats[0];
    console.log(`\n🥇 Πιο δημοφιλές: "${top.button}" με ${top.total_clicks} κλικ (${top.pct}%)`);

    if (stats.length > 1) {
        console.log(`🥈 2ο: "${stats[1].button}" (${stats[1].total_clicks} κλικ)`);
    }
    if (stats.length > 2) {
        console.log(`🥉 3ο: "${stats[2].button}" (${stats[2].total_clicks} κλικ)`);
    }

    return stats;
}

// Κάνε διαθέσιμο στην κονσόλα
window.getButtonStats = getButtonStats;
window.printButtonStats = printButtonStats;

// Στείλε popularity report στο GA πριν φύγει ο χρήστης
function _sendPopularityReport() {
    const stats = getButtonStats();
    if (stats.length === 0) return;

    const top = stats[0];
    trackEvent('button_popularity', {
        event_category: 'analytics',
        most_popular: top.button,
        most_popular_clicks: top.total_clicks,
        most_popular_pct: top.pct,
        total_buttons_clicked: stats.length,
        total_clicks: stats.reduce((s, x) => s + x.total_clicks, 0),
        ranking: stats.map(s => `${s.button}:${s.total_clicks}`).join(',').substring(0, 100)
    });
}

window.addEventListener('beforeunload', _sendPopularityReport);
window.addEventListener('pagehide', _sendPopularityReport);

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
