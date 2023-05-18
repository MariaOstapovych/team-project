import { getTopBooks } from './request';

import Notiflix from 'notiflix';

const bestBooks = document.querySelector('.best-books__list');

const promise = getTopBooks();
// const categories = getCategoriesList();

promise.then(data => createDate(data));

function createDate(categ) {
  let markup = '';

  categ.forEach(arr => {
    let bookMarkup = '';
    const data = arr.books;
    data.forEach(book => {
      bookMarkup += `<li class="best-books__item is-hidden-books">
      <a href="" class="best-books__link">
          <img class="best-books__image" loading="lazy" src="${book.book_image}" alt="${book.title}" data-id="${book._id}">
      </a>
      <div class="card-quick">
         <p class="card-quick-view">Quick view</p>
      </div>
      <p class='best-book__title'>${book.title}</p>
      <p class='best-book__author'>${book.author}</p>
      </li>`;
    });
    markup += `
      <li class='best-books-category-wrap'>
        <p class ='best-books__category__title'>${arr.list_name}</p>
        <ul class='best-book-category'>${bookMarkup}</ul>
        <button  class='best-books-morebutton' type="button" data-category="${arr.list_name}">see more</button>
      </li>`;
  });

  bestBooks.insertAdjacentHTML('afterbegin', markup);
}
