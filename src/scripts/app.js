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

  const styledComponents = new Set([
    'header',
    'hero',
    'navigation',
    'lecture',
    'flashcard',
    'quiz',
    'modal'
  ]);

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

    target.setAttribute('aria-busy', 'true');

    try {
      const response = await fetch(componentUrl(name, 'component.html'), {
        cache: 'no-cache'
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      ensureComponentStyle(name);
      target.innerHTML = await response.text();
      target.removeAttribute('aria-busy');
      target.dispatchEvent(new CustomEvent('component-mounted', {
        bubbles: true,
        detail: { name }
      }));
      return true;
    } catch (error) {
      target.removeAttribute('aria-busy');
      target.dataset.componentState = 'error';
      console.warn(`Component ${name} could not load`, error);
      return false;
    }
  }

  async function mountComponents() {
    const results = [];

    for (const name of components) {
      results.push({
        name,
        mounted: await mountComponent(name)
      });
    }

    return results;
  }

  function initController(globalName) {
    const controller = window[globalName];
    if (!controller || typeof controller.init !== 'function') return;

    try {
      controller.init();
    } catch (error) {
      console.warn(`${globalName} failed to initialize`, error);
    }
  }

  let initializationPromise = null;

  window.DentApp = {
    components: [...components],
    mountComponent,
    mountComponents,
    init() {
      if (initializationPromise) return initializationPromise;

      initializationPromise = (async () => {
        const mountResults = await mountComponents();

        initController('DentTheme');
        initController('DentNavigation');
        initController('DentFlashcard');
        initController('DentQuiz');

        window.dispatchEvent(new CustomEvent('dent-app-ready', {
          detail: { mountResults }
        }));

        return mountResults;
      })();

      return initializationPromise;
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.DentApp.init();
    }, { once: true });
  } else {
    window.DentApp.init();
  }
})();
