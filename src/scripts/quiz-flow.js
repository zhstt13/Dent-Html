// Dent HTML Quiz Flow
(() => {
  window.DentQuizFlow = {
    start(questions = []) {
      this.questions = questions;
      this.index = 0;
      this.results = [];
      return this.current();
    },
    current() {
      return this.questions?.[this.index] || null;
    },
    answer(value) {
      const question = this.current();
      if (!question) return null;
      const result = window.DentQuiz?.checkAnswer(question, value);
      this.results.push(result);
      this.index += 1;
      return result;
    },
    finish() {
      return {
        total: this.results.length,
        correct: this.results.filter((item) => item?.correct).length
      };
    }
  };
})();
