/* ═══════════════════════════════════════════
   HALIN LANDING — theme.js
   Handles light/dark toggle + persistence.
   Edit STORAGE_KEY if you rename the project.
═══════════════════════════════════════════ */

const STORAGE_KEY = 'halin-theme';

const toggleBtn   = document.getElementById('theme-toggle');
const body        = document.body;
const themeIcon   = document.getElementById('theme-icon');
const hamburger   = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobile-drawer');

/* ── Apply saved theme on load ── */
(function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') applyDark();
  else applyLight();
})();

/* ── Toggle handler ── */
toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark')) applyLight();
  else applyDark();
});

function applyDark() {
  body.classList.add('dark');
  localStorage.setItem(STORAGE_KEY, 'dark');
  if (themeIcon) themeIcon.textContent = '☀️';
}

function applyLight() {
  body.classList.remove('dark');
  localStorage.setItem(STORAGE_KEY, 'light');
  if (themeIcon) themeIcon.textContent = '🌙';
}

/* ── Mobile hamburger ── */
hamburger.addEventListener('click', () => {
  mobileDrawer.classList.toggle('open');
});

/* Close drawer on link click */
mobileDrawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
  });
});

function initHeroOdometer() {
  const labels = ['Sari-Sari Store,', 'Pharmacy,', 'Hardware,'];
  const wrapper = document.querySelector('.hero-odometer');
  const item = wrapper?.querySelector('.hero-odometer-item');
  if (!wrapper || !item) return;

  let current = 0;
  setInterval(() => {
    wrapper.classList.add('slot-flip');
    setTimeout(() => {
      current = (current + 1) % labels.length;
      item.textContent = labels[current];
      wrapper.classList.remove('slot-flip');
    }, 240);
  }, 2400);
}

initHeroOdometer();

/* ── Smooth active nav link ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link-item');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}, { passive: true });
