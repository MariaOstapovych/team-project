// Nazar
import axios from 'axios';
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

const list = document.getElementById('list');

getTopBooks()
  .then(data => {
    const markup = createMarkup(data);
    console.log(data);
  })
  .catch(err => console.log(err));
