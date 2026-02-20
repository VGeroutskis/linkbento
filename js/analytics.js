// 🍱 LinkBento — Analytics
// Google Analytics configuration & event tracking

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-3975PTPNYY');

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
