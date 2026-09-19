// Dent HTML State Manager
(() => {
  const STORAGE_KEY = 'dent-html-state';
  const STATE_VERSION = 1;

  const defaultState = {
    version: STATE_VERSION,
    lesson: null,
    flashcards: {},
    quiz: {
      answered: 0,
      correct: 0,
      lastQuestion: null
    },
    progress: 0
  };

  function sanitize(input) {
    if (!input || typeof input !== 'object') return { ...defaultState };
    return {
      ...defaultState,
      ...input,
      version: STATE_VERSION,
      quiz: {
        ...defaultState.quiz,
        ...(input.quiz || {})
      }
    };
  }

  function load() {
    try {
      return sanitize(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
    } catch {
      return { ...defaultState };
    }
  }

  let state = load();
  const listeners = new Set();

  window.DentState = {
    get() { return structuredClone(state); },
    update(patch) {
      state = sanitize({ ...state, ...patch });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      listeners.forEach((listener) => listener(state));
    },
    reset() {
      state = { ...defaultState };
      localStorage.removeItem(STORAGE_KEY);
      listeners.forEach((listener) => listener(state));
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
})();
