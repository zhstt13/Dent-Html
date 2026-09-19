// Dent HTML Content Loader
(() => {
  window.DentContent = {
    async load(path) {
      const response = await fetch(path, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`Content load failed: ${response.status}`);
      }
      return response.json();
    }
  };
})();
