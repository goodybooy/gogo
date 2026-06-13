// Init scroll-reveal animations
AOS.init({
  duration: 700,
  once: true,
  offset: 80,
});

// Header turns solid after scrolling past the top
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ============ Carousels (slide banners) ============
document.querySelectorAll('.carousel').forEach(carousel => {
  const slides = Array.from(carousel.querySelectorAll('.slide'));
  if (slides.length <= 1) return;  // skip placeholders / single image

  const dotsWrap = carousel.querySelector('.dots');
  let current = 0;
  let timer = null;
  const interval = parseInt(carousel.dataset.interval || '4000', 10);

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => { go(i); restart(); });
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function go(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }
  function next() { go(current + 1); }
  function prev() { go(current - 1); }
  function start() { timer = setInterval(next, interval); }
  function restart() { clearInterval(timer); start(); }

  carousel.querySelector('.car-next').addEventListener('click', () => { next(); restart(); });
  carousel.querySelector('.car-prev').addEventListener('click', () => { prev(); restart(); });

  // Pause on hover
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', start);

  start();
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);
