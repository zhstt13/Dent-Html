// Dent HTML Navigation Controller
(() => {
  window.DentNavigation = {
    init() {
      const navigation = document.getElementById('main-navigation');
      if (!navigation || navigation.dataset.controllerReady === 'true') return;

      navigation.dataset.controllerReady = 'true';

      navigation.addEventListener('click', (event) => {
        const item = event.target.closest('[data-nav-target]');
        if (!item || !navigation.contains(item)) return;

        const target = item.dataset.navTarget;
        if (!target) return;

        this.navigate(target);

        navigation.querySelectorAll('[data-nav-target]').forEach((button) => {
          button.classList.toggle('active', button === item);
          button.setAttribute('aria-current', button === item ? 'page' : 'false');
        });
      });
    },

    navigate(target) {
      const destination =
        document.querySelector(`[data-component="${target}"]`) ||
        document.getElementById(target);

      if (!destination) return false;

      destination.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      return true;
    }
  };
})();
