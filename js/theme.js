// 🍱 LinkBento — Theme
// Theme picker and system theme auto-detection

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
