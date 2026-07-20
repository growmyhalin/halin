/* ═══════════════════════════════════════════
   HALIN LANDING — theme.js
   Handles light/dark toggle + persistence.
   Edit STORAGE_KEY if you rename the project.
═══════════════════════════════════════════ */

const STORAGE_KEY = 'halin-theme';

const toggleBtn    = document.getElementById('theme-toggle');
const body         = document.body;
const themeIcon    = document.getElementById('theme-icon');
const hamburger    = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobile-drawer');

/* ── Apply saved theme on load ── */
(function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') applyDark();
  else applyLight();
})();

/* ── Toggle handler (Cleaned & Restored to your original target ID) ── */
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark')) applyLight();
    else applyDark();
  });
}

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

/* ── Mobile hamburger (Added a null check to prevent app crashes on other pages) ── */
if (hamburger && mobileDrawer) {
  hamburger.addEventListener('click', () => {
    mobileDrawer.classList.toggle('open');
  });

  /* Close drawer on link click */
  mobileDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  });
}

function initHeroOdometer() {
  const labels = ['sales', 'inventory', 'customer credit'];
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

/* ── Smooth active nav link (Debounced and Protected against Layout Input Shifting) ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link-item');

// Only register the scroll computations if sections and nav links actually exist on this screen
if (sections.length > 0 && navLinks.length > 0) {
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    // Debounce the calculation slightly to keep performance completely smooth
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    }, 50); // Minimal delay prevents collision with text box focus loops
  }, { passive: true });
}
