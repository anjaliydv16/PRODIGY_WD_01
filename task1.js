const nav = document.getElementById('nav');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

nav.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.add('hovered');
    }
});

nav.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.remove('hovered');
    }
});