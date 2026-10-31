const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

const isDark = () => (root.dataset.theme ? root.dataset.theme === 'dark' : systemDark.matches);
const sync = () => toggle.setAttribute('aria-pressed', String(isDark()));

toggle.hidden = false;
sync();

toggle.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
        localStorage.setItem('theme', next);
    } catch (e) {}
    sync();
});

systemDark.addEventListener('change', sync);
