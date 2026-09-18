// Dent HTML Quiz Controller
(() => {
  window.DentQuiz = {
    init() {
      const quiz = document.getElementById('quiz-system');
      if (!quiz || quiz.dataset.controllerReady === 'true') return;

      quiz.dataset.controllerReady = 'true';

      quiz.addEventListener('click', (event) => {
        const option = event.target.closest('[data-quiz-option]');
        if (!option || !quiz.contains(option)) return;

        quiz.querySelectorAll('[data-quiz-option]').forEach((button) => {
          button.classList.toggle('is-selected', button === option);
          button.setAttribute('aria-pressed', button === option ? 'true' : 'false');
        });

        quiz.dataset.selectedAnswer = option.dataset.quizOption || '';
      });
    },

    checkAnswer(question, answer) {
      return { question, answer };
    }
  };
})();
