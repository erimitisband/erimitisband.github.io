const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let stars = [];

function init() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    const count = window.innerWidth < 1024 ? 50 : 150;
    stars = Array.from({length: count}, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        s: Math.random() * 1.5,
        v: Math.random() * 0.2
    }));
}

function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "#B8952A";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.s, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.v;
        if (star.y > window.innerHeight) star.y = 0;
    });
    requestAnimationFrame(draw);
}

window.addEventListener('resize', init);
init();
draw();
