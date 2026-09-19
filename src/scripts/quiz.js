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
          const selected = button === option;
          button.classList.toggle('is-selected', selected);
          button.setAttribute('aria-pressed', selected ? 'true' : 'false');
        });

        quiz.dataset.selectedAnswer = option.dataset.quizOption || '';
      });
    },

    checkAnswer(question, answer) {
      const selected = String(answer ?? '');
      const correct = String(question?.answer ?? '');
      const result = {
        correct: selected === correct,
        answer: selected,
        expected: correct
      };

      if (window.DentState) {
        const current = DentState.get();
        DentState.update({
          quiz: {
            ...current.quiz,
            answered: current.quiz.answered + 1,
            correct: current.quiz.correct + (result.correct ? 1 : 0),
            lastQuestion: question?.id ?? null
          }
        });
      }

      return result;
    }
  };
})();
