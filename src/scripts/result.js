// Dent HTML Result Controller
(() => {
  window.DentResult = {
    render() {
      const target = document.querySelector('[data-result-score]');
      if (!target || !window.DentState) return;

      const quiz = DentState.get().quiz;
      target.textContent = `پاسخ صحیح: ${quiz.correct} از ${quiz.answered}`;
    }
  };

  window.addEventListener('dent-app-ready', () => {
    window.DentResult.render();
  });
})();
