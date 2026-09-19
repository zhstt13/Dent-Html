// Dent HTML Progress Tracker
(() => {
  window.DentProgress = {
    completeLesson(id) {
      const state = window.DentState?.get();
      if (!state) return;

      const completed = new Set(state.completedLessons || []);
      completed.add(id);

      window.DentState.update({
        completedLessons: [...completed],
        progress: [...completed].length
      });
    },

    isCompleted(id) {
      return (window.DentState?.get().completedLessons || []).includes(id);
    }
  };
})();
