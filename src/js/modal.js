// // Nazar
import axios from 'axios';
import { getBookId } from './request';

const backdrop = document.querySelector('.backdrop');
const btnModalClose = document.querySelector('.modal__close-btn');
const modalContainer = document.querySelector('.modal__container');
const modalBtn = document.querySelector('.modal__btn');
const localDescr = document.querySelector('.modal__descr-local');
const body = document.body;
const arrayStorage = [];

// Масив обк'єкта, який приходить із бекенду

let markupModalBook = '';

// Створення розмітки
async function createMarkup(bookData) {
  try {
    const resp = await bookData;
    markupModalBook = `
    <img src="${resp.book_image}" alt="${resp.title}" class="modal__img"/>
    <div class="modal__content">
      <h2 class="modal__title">${resp.title || 'No title'}</h2>
      <p class="modal__author">${resp.author || 'No author'}</p>
      <p class="modal__description">${resp.description || 'No description'}</p>
      <ul class="modal__shops">
        <li class="modal__shops-link"></li>
        <li class="modal__shops-link"></li>
        <li class="modal__shops-link"></li>
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
  evt.preventDefault();
  if (evt.target.classList.contains('best-books__image')) {
    modalContainer.innerHTML = '';
    backdrop.style.display = 'block';
    const bookItem = evt.target.closest('.best-books__image');
    const bookId = bookItem.dataset.id;
    const bookData = getBookId(bookId);
    createMarkup(bookData);
    console.log(bookId);
    try {
      // const bookData = getBookId(bookId);
      // const markup = createMarkup(bookData);
      console.log(bookData);
      // modalContainer.innerHTML = markupModalBook;
      // modalBtn.addEventListener('click', onLocalClick(bookId));
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
          console.log(arrayStorage);
        });
      }
    } catch (error) {
      console.error('Помилка при отриманні даних про книгу', error);
    }
  }
}
