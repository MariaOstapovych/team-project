const menuHomeEl = document.querySelector('.menu__home');
const menuShoppingEl = document.querySelector('.menu__shopping');
const dropMenuShoppingEl = document.querySelector('.menu_item-shop');

setCurrentPage();
function setCurrentPage() {
  const currentPageName = window.location.pathname;

  if (currentPageName === '/index.html') {
    menuHomeEl.classList.add('current');
    menuShoppingEl.classList.remove('current');
  }

  if (currentPageName === '/shopping-list.html') {
    menuShoppingEl.classList.add('current');
    menuHomeEl.classList.remove('current');
  }
}
dropMenuShoppingEl.addEventListener('click', onShopping);

function onShopping(evt) {
    window.location.href = evt.target.href;
}