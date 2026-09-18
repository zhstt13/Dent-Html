// Dent HTML component loader

async function loadComponents() {
  const mounts = document.querySelectorAll('[data-component]');

  for (const mount of mounts) {
    const name = mount.dataset.component;

    try {
      const response = await fetch(`../components/${name}/component.html`);
      if (!response.ok) continue;
      mount.innerHTML = await response.text();
    } catch (error) {
      console.warn(`Component load failed: ${name}`, error);
    }
  }
}

window.addEventListener('DOMContentLoaded', loadComponents);
