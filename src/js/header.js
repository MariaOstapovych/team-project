const modalBoxEl = document.querySelector('.data-modal');
const openModalBtnEl = document.querySelector('.js-open-menu');
const iconHrefEl = document.querySelector('.icon-href');

// const mobbEl = document.querySelector('.mob-header');

openModalBtnEl.addEventListener('click', toggleModal);

function toggleModal() {
  if (modalBoxEl.classList.contains('is-hidden')) {
    modalBoxEl.classList.remove('is-hidden');
    iconHrefEl.setAttribute('href', `${openCloseIcon}#icon-x-close`);
    document.body.classList.add('modal-open');

    return;
  } else {
    modalBoxEl.classList.add('is-hidden');
    iconHrefEl.setAttribute('href', `${openCloseIcon}#icon-burger`);
    document.body.classList.remove('modal-open');
  }
}