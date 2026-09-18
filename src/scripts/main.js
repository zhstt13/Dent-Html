document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-component]').forEach(section=>{
    section.dataset.ready='true';
  });
});
