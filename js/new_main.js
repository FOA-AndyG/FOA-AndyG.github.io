/* ============================================
   FPL – Furniture Pros Logistics Solution
   Main JavaScript
   ============================================ */

/* ── Mobile Menu Toggle ── */
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}

/* ── Contact Form Submission Feedback ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target;
  btn.textContent = '✓ Request Sent!';
  btn.style.background = '#1d7a3e';
  setTimeout(() => {
    btn.textContent = 'Send Request →';
    btn.style.background = '';
  }, 3000);
}

/* ── Sticky Nav Border on Scroll ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.12)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.07)';
  }
});