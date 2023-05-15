// Nazar
import './categories';
import axios from 'axios';
const btnModalOpen = document.querySelector('.modal__open');
const btnModalClose = document.querySelector('.modal__close-btn');
const backdrop = document.querySelector('.backdrop-js');
const modal = document.querySelector('.modal-js');
const btnList = document.querySelector('.modal__add-btn-js');
const localDescr = document.querySelector('.modal__descr-local');

btnList.addEventListener('click', onShoppingList);
function onShoppingList(evt) {
  evt.preventDefault();
  btnList.textContent = 'Remove from the shopping list';
  btnList.classList.toggle('toggle-js');
  localDescr.style.display = 'block';
}

btnModalOpen.addEventListener('click', onModal);
function onModal(evt) {
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

btnModalClose.addEventListener('click', onBtnClose);
function onBtnClose(evt) {
  evt.preventDefault();
  backdrop.style.display = 'none';
}

async function getTopBooks() {
  try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/top-books'
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function createMarkup(arr) {
  return arr.map(book => {
    console.log(book.books[0]);
  });
}
// function createMarkup(arr) {
//   return arr.map(book => {
//     console.log(book._id);
//   });
// }
// getTopBooks()
//   .then(data => {
//     const markup = createMarkup(data);
//     console.log(data);
//   })
//   .catch(err => console.log(err));
