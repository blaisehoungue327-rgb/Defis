const card = document.querySelector('.card-2');
const shareButton = document.querySelector('.btn');

if (card && shareButton) {
  shareButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = card.classList.toggle('is-open');
    shareButton.classList.toggle('is-active', isOpen);
    shareButton.setAttribute('aria-expanded', String(isOpen));
  });
  
  document.addEventListener('click', (event) => {
    if (!card.contains(event.target)) {
      card.classList.remove('is-open');
      shareButton.classList.remove('is-active');
      shareButton.setAttribute('aria-expanded', 'false');
    }
  });
}
