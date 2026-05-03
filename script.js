/* =========================================================
   GREEN FINGERS — script.js
   Navbar scroll, hero carousel, mobile menu, stats counter
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. NAVBAR SCROLL EFFECT ───────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  // ── 2. HAMBURGER / MOBILE MENU ────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Mobile dropdown toggles
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          toggle.closest('.dropdown').classList.toggle('open');
        }
      });
    });

    // Close on nav link click (mobile)
    navLinks.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── 3. HERO CAROUSEL ─────────────────────────────────────
  const slides  = document.querySelectorAll('.hero-slide');
  const dots    = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');

  if (slides.length > 0) {
    let current   = 0;
    let autoTimer = null;
    const DURATION = 6000; // ms between auto-advances

    const goTo = (index) => {
      slides[current].classList.remove('active');
      dots[current]?.classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current]?.classList.add('active');
    };

    const startAuto = () => {
      stopAuto();
      autoTimer = setInterval(() => goTo(current + 1), DURATION);
    };
    const stopAuto = () => {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    };

    prevBtn?.addEventListener('click', () => { goTo(current - 1); startAuto(); });
    nextBtn?.addEventListener('click', () => { goTo(current + 1); startAuto(); });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goTo(parseInt(dot.dataset.index, 10));
        startAuto();
      });
    });

    // Pause on hover
    const heroEl = document.getElementById('hero');
    heroEl?.addEventListener('mouseenter', stopAuto);
    heroEl?.addEventListener('mouseleave', startAuto);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft')  { goTo(current - 1); startAuto(); }
      if (e.key === 'ArrowRight') { goTo(current + 1); startAuto(); }
    });

    // Touch / swipe support
    let touchStartX = 0;
    heroEl?.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    heroEl?.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        goTo(diff > 0 ? current + 1 : current - 1);
        startAuto();
      }
    }, { passive: true });

    startAuto();
  }

  // ── 4. STATS COUNTER ANIMATION ───────────────────────────
  const statNumbers = document.querySelectorAll('.stat-number');

  if (statNumbers.length > 0) {
    const animateCount = (el) => {
      const target   = parseInt(el.dataset.target, 10);
      const duration = 2000; // ms
      const step     = target / (duration / 16);
      let   count    = 0;

      const tick = () => {
        count = Math.min(count + step, target);
        el.textContent = Math.floor(count).toLocaleString();
        if (count < target) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString() + (target >= 1000 ? '+' : '');
      };
      requestAnimationFrame(tick);
    };

    // Trigger when stats strip enters viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statNumbers.forEach(animateCount);
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });

    const strip = document.querySelector('.stats-strip');
    if (strip) observer.observe(strip);
  }

  // ── 5. SCROLL-REVEAL FOR CARDS ───────────────────────────
  const revealEls = document.querySelectorAll(
    '.initiative-card, .mission-grid, .stat-item'
  );

  if ('IntersectionObserver' in window && revealEls.length) {
    revealEls.forEach(el => {
      el.style.opacity  = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 80 * (Array.from(revealEls).indexOf(entry.target) % 6));
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => revealObserver.observe(el));
  }

});
