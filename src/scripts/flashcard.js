// Dent HTML Flashcard Controller
(() => {
  window.DentFlashcard = {
    init() {
      const system = document.getElementById('flashcard-system');
      if (!system || system.dataset.controllerReady === 'true') return;

      const card = system.querySelector('[data-flashcard]');
      if (!card) return;

      system.dataset.controllerReady = 'true';

      card.addEventListener('click', () => {
        const flipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
      });
    }
  };
})();
