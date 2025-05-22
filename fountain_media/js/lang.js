
function toggleLang() {
  const elements = document.querySelectorAll('[data-en]');
  const lang = document.documentElement.lang === 'en' ? 'ar' : 'en';
  document.documentElement.lang = lang;
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
