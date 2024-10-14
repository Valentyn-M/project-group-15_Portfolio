const refs = {
  burgerBtnEl: document.querySelector('.burger'),
  mobileMenuEl: document.querySelector('.mobile-menu'),
};

const burgerSvg = `
    <svg class="theme-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path class="theme-path" d="M5.33398 23.027V21.6936H26.6673V23.027H5.33398ZM5.33398 16.667V15.3336H26.6673V16.667H5.33398ZM5.33398 10.307V8.97363H26.6673V10.307H5.33398Z"/>
    </svg>
  `;

const closeSvg = `
    <svg class="theme-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path class="theme-path" d="M24 8L8 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="theme-path" d="M8 8L24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

function toggleMenu() {
  if (refs.mobileMenuEl.classList.contains('active')) {
    refs.mobileMenuEl.classList.remove('active');
    refs.burgerBtnEl.innerHTML = burgerSvg;
    document.body.style.overflow = '';
  } else {
    refs.mobileMenuEl.classList.add('active');
    refs.burgerBtnEl.innerHTML = closeSvg;
    document.body.style.overflow = 'hidden';
  }
}

refs.burgerBtnEl.innerHTML = burgerSvg;
refs.burgerBtnEl.addEventListener('click', toggleMenu);

refs.mobileMenuEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    refs.mobileMenuEl.classList.remove('active');
    refs.burgerBtnEl.innerHTML = burgerSvg;
    document.body.style.overflow = '';
  });
});
