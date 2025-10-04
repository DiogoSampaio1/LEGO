document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const universe = card.getAttribute('data-universe');
    window.location.href = `/Characters/${universe}/${universe}C.html`;
  });
});
