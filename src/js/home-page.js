//
import { getTopBooks } from './request';

import Notiflix from 'notiflix';

const bestBooks = document.querySelector('.best-books__list');

const promise = getTopBooks();
// const categories = getCategoriesList();

promise.then(data => createDate(data));

function createDate(categ) {
  let markup = '';

  categ.map(arr => {
    let bookMarkup = '';
    const data = arr.books;
    data.forEach(book => {
      bookMarkup += `<li id="${book._id}"><img class="best-books__image" src="${book.book_image}"alt="${book.title}"><p>${book.title}</p><p>${book.author}</p></li>`;
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


