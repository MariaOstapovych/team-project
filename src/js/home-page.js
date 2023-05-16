//
import { getTopBooks } from './request';
import { getCategoriesList } from './request';
import Notiflix from 'notiflix';

const bestBooks = document.querySelector('.best-books__list');

const promise = getTopBooks();
const categories = getCategoriesList();

promise.then(data => createDate(data));

function createDate(categ) {
  let markup = '';
  let bookMarkup = '';
  categ.map(arr => {
    const data = arr.books;
    data.forEach(book => {
      bookMarkup += `<li><p>${book.title}</p><img src="${book.books_image}" alt="${book.title}"></li>`;
    });
    markup += `
           <li>
           <p>${arr.list_name}</p>
            <ul>${bookMarkup}</ul>
           <button type="button" data-category="${arr.list_name}">see more
           </button>
           </li>`;
  });
  
  bestBooks.insertAdjacentHTML('afterbegin', markup);
}


