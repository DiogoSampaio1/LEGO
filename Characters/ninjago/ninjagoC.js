// Realce de navegação ativa
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.style.borderBottom = '2px solid #ffcc00';
  }
});