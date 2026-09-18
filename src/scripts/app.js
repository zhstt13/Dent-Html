// Dent HTML application runtime foundation

const components = [
  'header',
  'hero',
  'navigation',
  'flashcard',
  'lecture',
  'quiz'
];

window.DentApp = {
  components,
  init() {
    console.log('Dent HTML initialized', components);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  DentApp.init();
});
