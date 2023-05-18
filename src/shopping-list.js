import './js/home-page';
import './js/header';
import './js/donate-bar';
import './js/fond-items';
import './js/donate-bar';
import './js/request';
import './js/modal';

import svgRemove from '../src/images/icons.svg';
import amazonPNG from '../src/images/shopping-list/amazon@2x.png';
import ibooksPNG from '../src/images/shopping-list/books@2x.png';
import bookshopPNG from '../src/images/shopping-list/bookshop@2x.png';


const addElem = document.querySelector('.shopping__books-list');
console.log(addElem)
let massive = [];
let idBooks = [];
let parsedBook;

storageData()

function storageData() {
  const book = localStorage.getItem('arrayStorage');

  parsedBook = JSON.parse(book);
  parsedBook.map(arr => {
    massive.push(arr);
    idBooks.push(arr._id);
  });
  createMarkup(massive);
}

function createMarkup(arr) {
  let markup = '';
  arr.map(({ _id, book_image, title, publisher, description, author }) => {
    markup += `<li class="books-list__item" id="${_id}">
  <img class="books-list__image" src="${book_image}" alt="${title}">
  <div class="books-info">
  <button type="button" class="dump-button" >
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
  dumpBtn.forEach(btn => btn.addEventListener('click', removeBook));
}

function removeBook(evt) {
  const idRemoveBtn = evt.target.id;
  console.log(evt)
  const idselector = document.querySelectorAll('.shopping__books-list');

  for (const value of idselector) {
    if (value.id === idRemoveBtn) {
      for (const elem of parsedBook) {
        if (elem._id === idRemoveBtn) {
          const resultIndex = parsedBook.indexOf(elem);
          parsedBook.splice(resultIndex, 1);
          value.style.display = 'none'
          if(parsedBook.length === 1) {
            localStorage.setItem('books', JSON.stringify(parsedBook));
          } else {
            localStorage.clear()
          }
        }
      }
      
      
    }
  }
}
