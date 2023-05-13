// Nazar
const btnModalOpen = document.querySelector('.modal__open');
const btnModalCLose = document.querySelector('.modal__close-btn');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

btnModalOpen.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  backdrop.style.display = 'block';
}

document.addEventListener('keydown', onEsc);
function onEsc(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    backdrop.style.display = 'none';
  }
}

backdrop.addEventListener('click', onBackdropClick);
function onBackdropClick(evt) {
  if (evt.target === backdrop) {
    backdrop.style.display = 'none';
  }
}

btnModalCLose.addEventListener('click', onBtnClose);
function onBtnClose(evt) {
  evt.preventDefault();
  evt.preventDefault();
  backdrop.style.display = 'none';
}
