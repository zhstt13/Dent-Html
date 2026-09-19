// Dent HTML State Manager
(() => {
  const STORAGE_KEY = 'dent-html-state';

  const defaultState = {
    lesson: null,
    flashcards: {},
    quiz: {
      answered: 0,
      correct: 0,
      lastQuestion: null
    },
    progress: 0
  };

  function load() {
    try {
      return { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
    } catch {
      return { ...defaultState };
    }
  }

  let state = load();
  const listeners = new Set();

  window.DentState = {
    get() { return structuredClone(state); },
    update(patch) {
      state = { ...state, ...patch };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      listeners.forEach((listener) => listener(state));
    },
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); }
  };
})();
