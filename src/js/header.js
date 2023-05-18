import openCloseIcon from '../images/img.svg';
const menuHomeEl = document.querySelector('.menu__home');
const menuShoppingEl = document.querySelector('.menu__shopping');
const dropMenuShoppingEl = document.querySelector('.menu_item-shop');
const cart = document.querySelector('menu__shopping_icon-cart')
setCurrentPage();
function setCurrentPage() {
  const currentPageName = window.location.pathname;

  if (currentPageName === '/index.html') {
    menuHomeEl.classList.add('current');
    menuShoppingEl.classList.remove('current');
    cart.classList.add('menu__shopping_icon-cart');
    cart.classList.remove('menu__shopping_icon-cart-black')
  }

  if (currentPageName === '/shopping-list.html') {
    menuShoppingEl.classList.add('current');
    menuHomeEl.classList.remove('current');
    cart.classList.remove('menu__shopping_icon-cart');
    cart.classList.add('menu__shopping_icon-cart-black');
  }
}
dropMenuShoppingEl.addEventListener('click', onShopping);
menuHomeEl.addEventListener('click', onHome)

function onShopping(evt) {
    window.location.href = evt.target.href;
}

function onHome (evt) {
  console.log(evt)
  window.location.href = evt.target.href;
}




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