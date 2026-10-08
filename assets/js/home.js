(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });

  const publications = [...document.querySelectorAll('.publication')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const expandButton = document.getElementById('show-publications');
  const count = document.getElementById('publication-count');
  let activeFilter = 'all';
  let expanded = false;
  const renderPublications = () => {
    const matching = publications.filter(paper => activeFilter === 'all' || paper.dataset.topic === activeFilter);
    publications.forEach(paper => {
      const index = matching.indexOf(paper);
      paper.hidden = index < 0 || (!expanded && index >= 6);
    });
    count.textContent = `${matching.length} selected ${matching.length === 1 ? 'work' : 'works'}`;
    expandButton.hidden = matching.length <= 6;
    expandButton.innerHTML = expanded ? 'Show fewer works <span aria-hidden="true">↑</span>' : `View all ${matching.length} selected works <span aria-hidden="true">↓</span>`;
    expandButton.setAttribute('aria-expanded', String(expanded));
  };
  filters.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    expanded = false;
    filters.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    renderPublications();
  }));
  expandButton.addEventListener('click', () => {
    expanded = !expanded;
    renderPublications();
    if (!expanded) document.getElementById('publications').scrollIntoView({block: 'start'});
  });
  renderPublications();

  // Reveal a directly linked paper even when it is beyond the initial six.
  const showLinkedPublication = () => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target?.classList.contains('publication')) return;
    if (target.hidden) {
      activeFilter = 'all';
      expanded = true;
      filters.forEach(filter => {
        const selected = filter.dataset.filter === 'all';
        filter.classList.toggle('active', selected);
        filter.setAttribute('aria-pressed', String(selected));
      });
      renderPublications();
    }
    requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
  };
  window.addEventListener('hashchange', showLinkedPublication);
  showLinkedPublication();

  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('main > section[id]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        nav.querySelectorAll('a').forEach(link => {
          if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -60% 0px' });
    sections.forEach(section => observer.observe(section));
  }
})();

// Play demonstrations only while their cards are in view.
(() => {
  const videos = [...document.querySelectorAll('.team-video, .publication-video')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const visible = new Set();
  const pausedByUser = new Set();
  const automaticPauses = new WeakSet();
  const pauseAutomatically = video => {
    if (!video.paused) {
      automaticPauses.add(video);
      video.pause();
    }
  };
  videos.forEach(video => {
    video.addEventListener('pause', () => {
      if (automaticPauses.delete(video)) return;
      pausedByUser.add(video);
    });
    video.addEventListener('play', () => pausedByUser.delete(video));
  });
  const updatePlayback = () => {
    videos.forEach(video => {
      if (!visible.has(video) || document.hidden) {
        pauseAutomatically(video);
      } else if (!reducedMotion.matches && !pausedByUser.has(video)) {
        video.muted = true;
        video.play().catch(() => {});
      }
    });
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      updatePlayback();
    }, { threshold: [0, 0.2] });
    videos.forEach(video => observer.observe(video));
  }
  reducedMotion.addEventListener?.('change', () => {
    if (reducedMotion.matches) videos.forEach(pauseAutomatically);
    updatePlayback();
  });
  document.addEventListener('visibilitychange', updatePlayback);
})();
