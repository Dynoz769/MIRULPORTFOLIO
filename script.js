// Smooth scrolling and scroll-triggered reveals

document.addEventListener('DOMContentLoaded', () => {
    const animatedSections = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    animatedSections.forEach((section) => observer.observe(section));

    const nav = document.querySelector('.hero__nav');
    const toggleNavState = () => {
        if (!nav) return;
        nav.classList.toggle('nav-scrolled', window.scrollY > 12);
    };
    toggleNavState();
    window.addEventListener('scroll', toggleNavState);

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
