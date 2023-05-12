// Nazar
const btnOpen = document.querySelector('.modal__open');

btnOpen.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
  console.log('click');
  btnOpen.classList.remove('visibility');
}
