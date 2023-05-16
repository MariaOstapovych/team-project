const scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', onScrollWheel);
scrollUp.addEventListener('click', onScrollClick);

function onScrollClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function onScrollWheel() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollUp.style.display = 'block';
  } else {
    scrollUp.style.display = 'none';
  }
}
