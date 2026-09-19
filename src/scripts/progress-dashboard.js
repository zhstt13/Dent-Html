// Dent HTML Progress Dashboard
(() => {
  window.DentProgress = {
    getSummary() {
      const state = window.DentState?.get() || {};
      const quiz = state.quiz || { answered: 0, correct: 0 };
      const lessons = state.completedLessons || [];

      return {
        lessonsCompleted: lessons.length,
        quizAnswered: quiz.answered || 0,
        quizCorrect: quiz.correct || 0,
        accuracy: quiz.answered ? Math.round((quiz.correct / quiz.answered) * 100) : 0
      };
    }
  };
})();
