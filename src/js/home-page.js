//
import { getTopBooks } from './request';
import Notiflix from 'notiflix';

const bestBooks = document.querySelector('.best-books__list');
const promise = getTopBooks();

promise.then(data => createDate(data));

function createDate(categ) {
  let markup = '';

  categ.forEach(arr => {
    let bookMarkup = '';
    const data = arr.books;
    data.forEach(book => {
      bookMarkup += `<li class ='is-hidden-books' id="${book._id}">
      <img class="best-books__image" src="${book.book_image}" alt="${book.title}">
      <p class='best-book__title'>${book.title}</p>
      <p class='best-book__author'>${book.author}</p></li>`;
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
