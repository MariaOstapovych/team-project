import './js/header';
import './js/donate-bar';
import './js/fond-items';
import './js/donate-bar';
import './js/request';
import './js/modal';
import './js/switch-theme';
import svgRemove from '../src/images/icons.svg';
import amazonPNG from '../src/images/shopping-list/amazon@2x.png';
import ibooksPNG from '../src/images/shopping-list/books@2x.png';
import bookshopPNG from '../src/images/shopping-list/bookshop@2x.png';


const addElem = document.querySelector('.shopping__books-list');
let massive = [];
if (addElem) {
  storageData();
}

function storageData() {
  const book = JSON.parse(localStorage.getItem('arrayStorage')) || [];
  massive = [...book];
  createMarkup(massive);
}

function createMarkup(arr) {
  let markup = '';
  arr.map(({ _id, book_image, title, publisher, description, author }) => {
    markup += `<li class="books-list__item" id="${_id}">
  <img class="books-list__image" src="${book_image}" alt="${title}">
  <div class="books-info">
  <button type="button" class="dump-button" id="${_id}">
                <svg class="dump-icon">
                  <use href="${svgRemove}#icon-dump2" id="${_id}"></use>
                </svg>
              </button>
    <p class="books-list__name">${title}</p>
    <p class="books-list__categories">${publisher}</p>
    <span class="books-list__description"
      >${description}</span
    ><p class="books-list__author">${author}</p>
    <ul class="shops">
    <li class="amazon"><a href="https://www.amazon.com/"><img src="${amazonPNG}" alt="Amazon"></a></li>
    <li class="ibooks"><a href="https://apps.apple.com/ru/app/apple-books/id364709193"><img src="${ibooksPNG}" alt="iBooks"></a></li>
    <li class="book-shop"><a href="https://books-shop.com.ua/"><img src="${bookshopPNG}" alt="Book Shop"></a></li>
  </ul>
    </div>
    </li>`;
  });

  addElem.insertAdjacentHTML('afterbegin', markup);
  const dumpBtn = document.querySelectorAll('.dump-button');
  // dumpBtn.forEach(btn =>
  addElem.addEventListener('click', removeBook);
  // );
}

function removeBook(evt) {
  if (!evt.target.closest('button').classList.contains('dump-button')) {
    return;
  }
  let idRemoveBtn = evt.target.id;
  const deletedItem = evt.target.closest('li');
  deletedItem.remove();
  const newMassive = massive.filter(({ _id }) => _id !== idRemoveBtn);
  massive = newMassive;
  localStorage.setItem('arrayStorage', JSON.stringify(newMassive));
}