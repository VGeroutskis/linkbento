// 🍱 LinkBento — Modals
// Contact, QR, Share & Changelog modals

// =============== CONTACT MODAL ===============
const contactModal = document.getElementById('contactModal');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');

modalClose?.addEventListener('click', () => {
    contactModal?.classList.remove('active');
});

contactModal?.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.classList.remove('active');
    }
});

// Handle form submission
contactForm?.addEventListener('submit', (e) => {
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
            trackEvent('share', { method: 'native' });
        } else {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(translations[currentLang]['share-text']);
            
            document.getElementById('shareX').href = `https://x.com/intent/tweet?url=${url}&text=${text}`;
            document.getElementById('shareFacebook').href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            document.getElementById('shareLinkedin').href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            document.getElementById('shareWhatsapp').href = `https://wa.me/?text=${text}%20${url}`;
            document.getElementById('shareTelegram').href = `https://t.me/share/url?url=${url}&text=${text}`;
            
            shareModal.classList.add('active');
            trackEvent('share', { method: 'modal_open' });
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
        trackEvent('share', { method: 'copy_link' });
    } catch (err) {
        console.log('Copy failed:', err);
    }
});

// Copy button
copyBtn?.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        showToast(translations[currentLang]['copied']);
        trackEvent('copy_link', { action: 'click' });
        if (navigator.vibrate) navigator.vibrate(50);
    } catch (err) {
        console.log('Copy failed:', err);
    }
});

// =============== QR CODE ===============
let qrCodeGenerated = false;

qrBtn?.addEventListener('click', () => {
    qrModal.classList.add('active');
    if (!qrCodeGenerated) {
        const qrContainer = document.getElementById('qrCode');
        const pageUrl = window.location.href;
        
        const qrImg = document.createElement('img');
        qrImg.crossOrigin = 'anonymous';
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
    trackEvent('qr_modal', { action: 'open' });
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
        const cvs = document.createElement('canvas');
        cvs.width = 200;
        cvs.height = 200;
        const c = cvs.getContext('2d');
        c.drawImage(img, 0, 0);
        
        const link = document.createElement('a');
        link.download = `${getName().toLowerCase().replace(/\s+/g, '-')}-qr.png`;
        link.href = cvs.toDataURL('image/png');
        link.click();
        trackEvent('qr_download', { action: 'click' });
    }
});

// =============== CHANGELOG MODAL ===============
const changelogBtn = document.getElementById('changelogBtn');
const changelogModal = document.getElementById('changelogModal');
const changelogModalClose = document.getElementById('changelogModalClose');

changelogBtn?.addEventListener('click', () => {
    renderChangelog();
    changelogModal?.classList.add('active');
    trackEvent('changelog_view', { action: 'click' });
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
