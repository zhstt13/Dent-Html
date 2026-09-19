// Dent HTML Flashcard Controller
(() => {
  window.DentFlashcard = {
    init() {
      document.querySelectorAll('[data-flashcard]').forEach((card) => {
        if (card.dataset.controllerReady === 'true') return;

        card.dataset.controllerReady = 'true';

        card.addEventListener('click', () => {
          const flipped = card.classList.toggle('is-flipped');
          card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
        });
      });
    }
  };

  window.addEventListener('dent-components-ready', () => {
    window.DentFlashcard.init();
  });
})();
