// Dent HTML Content Loader
(() => {
  function validate(data) {
    if (!data || typeof data !== 'object') return false;
    if (!data.lesson || !data.lesson.id || !data.lesson.title) return false;
    if (!Array.isArray(data.flashcards)) return false;
    if (!Array.isArray(data.quizzes)) return false;
    return true;
  }

  window.DentContent = {
    async load(path) {
      const response = await fetch(path, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`Content load failed: ${response.status}`);
      }

      const data = await response.json();

      if (!validate(data)) {
        throw new Error('Invalid Dent content schema');
      }

      return data;
    },
    validate
  };
})();
