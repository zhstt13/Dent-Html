// Dent HTML Quiz Flow
(() => {
  window.DentQuizFlow = {
    questions: [],
    index: 0,
    results: [],

    start(questions = []) {
      this.questions = Array.isArray(questions) ? questions : [];
      this.index = 0;
      this.results = [];
      return this.current();
    },

    async loadFromContent(path = 'content/example-content.json') {
      if (!window.DentContent) return null;

      const content = await DentContent.load(path);
      const quizzes = Array.isArray(content?.quizzes) ? content.quizzes : [];

      this.start(quizzes);
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
