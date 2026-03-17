function toggleMenu() {
    const menu = document.getElementById('menu');
    const links = document.querySelectorAll('.nav-links a');
    if (!menu) return;
    const isVisible = menu.style.display === 'block';
    menu.style.display = isVisible ? 'none' : 'block';
    
    // Split second fade for menu options
    setTimeout(() => {
        links.forEach((link, i) => {
            setTimeout(() => { 
                link.style.opacity = isVisible ? '0' : '1'; 
            }, i * 100);
        });
    }, 50);
}

window.addEventListener('scroll', () => {
    const logo = document.getElementById('ghostLogo');
    if (logo) {
        // Slow ghost follow scroll
        let offset = window.pageYOffset;
        logo.style.top = (45 + offset * 0.03) + '%';
    }
});
