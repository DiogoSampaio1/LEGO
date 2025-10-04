// Realce de navegação ativa
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.style.borderBottom = '2px solid #ffcc00';
  }
});

// Efeito de entrada suave no conteúdo
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('#hero');
  hero.style.opacity = 0;
  hero.style.transform = 'translateY(20px)';
  setTimeout(() => {
    hero.style.transition = 'all 0.6s ease-out';
    hero.style.opacity = 1;
    hero.style.transform = 'translateY(0)';
  }, 100);
});
