const refs = {
  burgerBtnEl: document.querySelector('.burger'),
  mobileMenuEl: document.querySelector('.mobile-menu'),
};

const burgerSvg = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M5.33398 23.027V21.6936H26.6673V23.027H5.33398ZM5.33398 16.667V15.3336H26.6673V16.667H5.33398ZM5.33398 10.307V8.97363H26.6673V10.307H5.33398Z" fill="#292929"/>
    </svg>
  `;

const closeSvg = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M24 8L8 24" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 8L24 24" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

function toggleMenu() {
  refs.mobileMenuEl.classList.toggle('active');
  refs.burgerBtnEl.innerHTML = refs.mobileMenuEl.classList.contains('active')
    ? closeSvg
    : burgerSvg;
}

refs.burgerBtnEl.innerHTML = burgerSvg;
refs.burgerBtnEl.addEventListener('click', toggleMenu);

refs.mobileMenuEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    refs.mobileMenuEl.classList.remove('active');
    refs.burgerBtnEl.innerHTML = burgerSvg;
  });
});
