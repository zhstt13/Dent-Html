// Dent HTML Progress Dashboard
(() => {
  window.DentProgress = {
    init() {
      const dashboard = document.getElementById('progress-dashboard');
      if (!dashboard) return;

      const render = () => {
        const state = window.DentState?.get?.() || {};
        const quiz = state.quiz || {};
        const cards = Object.keys(state.flashcards || {}).length;
        const answered = quiz.answered || 0;
        const correct = quiz.correct || 0;
        const score = answered ? Math.round((correct / answered) * 100) : 0;

        dashboard.querySelector('[data-progress-lessons]').textContent = (state.completedLessons || []).length;
        dashboard.querySelector('[data-progress-cards]').textContent = cards;
        dashboard.querySelector('[data-progress-answered]').textContent = answered;
        dashboard.querySelector('[data-progress-score]').textContent = `${score}%`;
      };

      render();
      window.DentState?.subscribe?.(render);
    }
  };
})();
