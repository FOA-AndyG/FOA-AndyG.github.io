/* ============================================
   FPL – Furniture Pros Logistics Solution
   Main JavaScript
   ============================================ */


/* ── Mobile Menu Toggle ─────────────────────
   Called by the hamburger <button>.
   Toggles the .open class on the menu and
   keeps aria-expanded in sync for screen readers.
   ─────────────────────────────────────────── */
function toggleMenu(btn) {
  const menu   = document.getElementById('mobile-menu');
  const button = btn || document.getElementById('hamburger');
  const isOpen = menu.classList.toggle('open');

  // Keep aria-expanded in sync so screen readers announce the state
  button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}


/* ── Sticky Nav Border on Scroll ────────────
   Subtly strengthens the nav bottom border
   once the user scrolls past the hero.
   ─────────────────────────────────────────── */
(function () {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  window.addEventListener('scroll', function () {
    const scrolled = window.scrollY > 50;
    nav.style.borderBottomColor = scrolled
      ? 'rgba(255, 255, 255, 0.18)'
      : 'rgba(255, 255, 255, 0.07)';
  }, { passive: true });
})();


/* ── Close Mobile Menu on Outside Click ─────
   Tapping anywhere outside the nav closes
   the mobile menu on small screens.
   ─────────────────────────────────────────── */
document.addEventListener('click', function (e) {
  const nav    = document.getElementById('main-nav');
  const menu   = document.getElementById('mobile-menu');
  const button = document.getElementById('hamburger');

  if (!nav || !menu || !button) return;
  if (!menu.classList.contains('open')) return;

  // If the click was outside the nav element, close the menu
  if (!nav.contains(e.target)) {
    menu.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  }
});