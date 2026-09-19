// Dent HTML application runtime
(() => {
  const components = [
    'header',
    'hero',
    'navigation',
    'lecture',
    'flashcard',
    'quiz',
    'modal'
  ];

  const styledComponents = new Set(components);
  const appScript = document.currentScript;
  const appScriptUrl = appScript?.src
    ? new URL(appScript.src, document.baseURI)
    : new URL('src/scripts/app.js', document.baseURI);
  const componentBaseUrl = new URL('../components/', appScriptUrl);

  function componentUrl(name, file) {
    return new URL(`${name}/${file}`, componentBaseUrl).href;
  }

  function ensureComponentStyle(name) {
    if (!styledComponents.has(name)) return;
    const selector = `link[data-dent-component-style="${name}"]`;
    if (document.querySelector(selector)) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = componentUrl(name, 'component.css');
    link.dataset.dentComponentStyle = name;
    document.head.appendChild(link);
  }

  async function mountComponent(name) {
    const target = document.querySelector(`[data-component="${name}"]`);
    if (!target) return false;

    try {
      const response = await fetch(componentUrl(name, 'component.html'), { cache: 'no-cache' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      ensureComponentStyle(name);
      target.innerHTML = await response.text();
      target.dispatchEvent(new CustomEvent('component-mounted', { bubbles: true, detail: { name } }));
      return true;
    } catch (error) {
      target.dataset.componentState = 'error';
      console.warn(`Component ${name} could not load`, error);
      return false;
    }
  }

  window.DentApp = {
    components: [...components],
    async init() {
      const mountResults = [];
      for (const name of components) {
        mountResults.push({ name, mounted: await mountComponent(name) });
      }

      ['DentTheme', 'DentNavigation', 'DentFlashcard', 'DentQuiz'].forEach((name) => {
        const controller = window[name];
        if (controller?.init) controller.init();
      });

      window.dispatchEvent(new CustomEvent('dent-components-ready', { detail: { mountResults } }));
      window.dispatchEvent(new CustomEvent('dent-app-ready', { detail: { mountResults } }));

      return mountResults;
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.DentApp.init(), { once: true });
  } else {
    window.DentApp.init();
  }
})();
