const scrollUp = document.querySelector('.scroll-up');

scrollUp.addEventListener('click'.onScrolClick);

function onScrolClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

window.addEventListener('scroll', onScrollWheel);

function onScrollWheel() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUp.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}
