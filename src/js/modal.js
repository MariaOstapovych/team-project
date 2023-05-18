// // Nazar
import { getBookId } from './request';

import amazonPNG from '../images/shopping-list/amazon@2x.png';
import ibooksPNG from '../images/shopping-list/books@2x.png';
import bookshopPNG from '../images/shopping-list/bookshop@2x.png';

const backdrop = document.querySelector('.backdrop');
const btnModalClose = document.querySelector('.modal__close-btn');
const modalContainer = document.querySelector('.modal__container');
const modalBtn = document.querySelector('.modal__btn');
const localDescr = document.querySelector('.modal__descr-local');
const body = document.body;
const arrayStorage = [];

let markupModalBook = '';

// Створення розмітки
async function createMarkup(bookData) {
  try {
    const resp = await bookData;
    const links = resp.buy_links;
    const names = links.map(obj => obj.name);
    const urls = links.map(obj => obj.url);
    markupModalBook = `.
    <img src="${resp.book_image}" alt="${resp.title}" class="modal__img"/>
    <div class="modal__content">
      <h2 class="modal__title">${resp.title || 'No title'}</h2>
      <p class="modal__author">${resp.author || 'No author'}</p>
      <p class="modal__description">${resp.description || 'No description'}</p>
      <ul class="modal__shop">
        <li class="modal__shop-item">
          <a class="modal__shop-list" href="${urls[0]}" target="_blank">
            <img
              class="modal__shop-amazon"
              src="${amazonPNG}"
              alt="${names[0]}"
            >
          </a>
        </li>
        <li class="modal__shop-item">
          <a class="modal__shop-list" href="${urls[1]}" target="_blank">
            <img
              class="modal__shop-ibooks"
              src="${ibooksPNG}"
              alt="${names[1]}"
            >
          </a>
        </li>
        <li class="modal__shop-item">
          <a class="modal__shop-list" href="${urls[2]}" target="_blank">
            <img
              class="modal__shop-bookShop"
              src="${bookshopPNG}"
              alt="${names[2]}"
            >
          </a>
        </li>
      </ul>
    </div>`;
    modalContainer.innerHTML = markupModalBook;
  } catch (error) {
    console.error('Помилка при отриманні даних про книгу', error);
  }
}

function onClosebtn() {
  backdrop.classList.add('backdrop__hidden');
  body.classList.remove('modal__open');
}

function onBackdrop(evt) {
  if (evt.target === backdrop) {
    backdrop.removeEventListener('click', onBackdrop);
    backdrop.classList.add('backdrop__hidden');
    body.classList.remove('modal__open');
  }
}

function onKeyDown({ code }) {
  if (code === 'Escape') {
    window.removeEventListener('keydown', onKeyDown);
    backdrop.classList.add('backdrop__hidden');
    body.classList.remove('modal__open');
  }
}

// Відкриття модалки
document.addEventListener('click', openModal);
async function openModal(evt) {
  if (evt.target.classList.contains('best-books__image')) {
    evt.preventDefault();
    backdrop.style.display = 'flex';
    modalContainer.innerHTML = '';
    backdrop.style.overflow = 'hidden';
    const bookItem = evt.target.closest('.best-books__image');
    const bookId = bookItem.dataset.id;
    const bookData = getBookId(bookId);
    modalBtn.textContent = 'add to shopping list';
    createMarkup(bookData);
    try {
      btnModalClose.addEventListener('click', onClosebtn);
      backdrop.addEventListener('click', onBackdrop);
      window.addEventListener('keydown', onKeyDown);
      backdrop.classList.remove('backdrop__hidden');
      body.classList.add('modal__open');
      modalBtn.addEventListener('click', onStorage);
      function onStorage() {
        bookData.then(response => {
          const bookObject = response;
          arrayStorage.push(bookObject);
          localStorage.setItem('arrayStorage', JSON.stringify(arrayStorage));
          modalBtn.removeEventListener('click', onStorage);
          modalBtn.textContent = 'remove from the shopping list';
          modalBtn.addEventListener('click', onRemove);
          localDescr.style.display = 'block';
        });
      }
    } catch (error) {
      console.error('Помилка при отриманні даних про книгу', error);
    }
  }
}

// Функція видалення із LocalStorage
function onRemove() {
  const bookId = modalBtn.dataset.bookId;
  const existingIndex = arrayStorage.findIndex(obj => obj.bookId === bookId);
  if (existingIndex !== -1) {
    arrayStorage.splice(existingIndex, 1);
    localStorage.setItem('arrayStorage', JSON.stringify(arrayStorage));
    modalBtn.removeEventListener('click', onRemove);
    modalBtn.textContent = 'add to shopping list';
    localDescr.style.display = 'none';
  }
}
