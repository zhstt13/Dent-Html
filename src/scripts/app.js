// Dent HTML application runtime

const components = [
  'header',
  'hero',
  'navigation',
  'lecture',
  'flashcard',
  'quiz'
];

async function mountComponents() {
  for (const name of components) {
    const target = document.querySelector(`[data-component="${name}"]`);
    if (!target) continue;

    try {
      const response = await fetch(`../components/${name}/component.html`);
      if (response.ok) {
        target.innerHTML = await response.text();
      }
    } catch (error) {
      console.warn(`Component ${name} could not load`, error);
    }
  }
}

window.DentApp = {
  components,
  async init() {
    await mountComponents();
    console.log('Dent HTML initialized', components);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  DentApp.init();
});
