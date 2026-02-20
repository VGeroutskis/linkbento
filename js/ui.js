// 🍱 LinkBento — UI Effects
// Particles, cursor trail, typewriter, toast, counters, timezone, greeting, confetti

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

// =============== TOAST NOTIFICATION ===============
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

// =============== CONFETTI ===============
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
