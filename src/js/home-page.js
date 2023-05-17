//
import { getTopBooks } from './request';
import { getCategoriesList } from './request';
import Notiflix from 'notiflix';

const bestBooks = document.querySelector('.best-books__list');
const promise = getTopBooks();

// const categories = getCategoriesList();

promise.then(data => createDate(data));

function createDate(categ) {
  let markup = '';
  let bookMarkup = '';
  categ.map(arr => {
    const data = arr.books;
    data.forEach(book => {
      console.log(book);
      bookMarkup += `<li class='is-hidden-books'>
      <img class="best-books__image" src="${book.book_image}"alt="${book.title}">
      <p class='best-book__title'>${book.title}</p>
      <p class='best-book__author'>${book.author}</p>
      </li>`;
    });
    markup += `
           <li class='best-book-item'>
           <p class='best-books__category__title'>${arr.list_name}</p>
           <ul class='best-book-category'>${bookMarkup}</ul>
           <button  class='best-books-morebutton' type="button" data-category="${arr.list_name}">see more
           </button>
           </li>`;
  });

  bestBooks.insertAdjacentHTML('afterbegin', markup);
}
