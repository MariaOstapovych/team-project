//
import { getTopBooks } from './request';
import { getCategoriesList } from './request';
import Notiflix from 'notiflix';

const bestBooks = document.querySelector('.best-books__list');

const promise = getTopBooks();
const categoryList = getCategoriesList();

categoryList.then(value => {
  let markupCategories = '';

  value.map(({ list_name }) => {
    console.log(list_name);
    markupCategories += `
      <li class="best-books__category">
      <h2 class="best-books__name">${list_name}</h2>
      </li>`;
  });

  bestBooks.insertAdjacentHTML('beforeend', markupCategories);
  const bestBooksInfo = document.querySelector('.best-books__category');

  promise.then(value => {
    value.map(list_name => {
      const data = list_name.books;
      let markupTopBooks = '';

      data.map(({ book_image, title, author }) => {
        markupTopBooks += `
        <ul>
        <p>${title}</p>
        <p>${author}</p></li>
        <li><img class="best-books__image" src="${book_image}" alt="${title}" />
        <p>${title}</p>
        <p>${author}</p></li>
        <li><img class="best-books__image" src="${book_image}" alt="${title}" />
        <p>${title}</p>
        <p>${author}</p></li>
        <li><img class="best-books__image" src="${book_image}" alt="${title}" />
        <p>${title}</p>
        <p>${author}</p></li>
        <li><img class="best-books__image" src="${book_image}" alt="${title}" />
        <p>${title}</p>
        <p>${author}</p></li>
        <li><img class="best-books__image" src="${book_image}" alt="${title}" />
      </ul>`;
      });

      bestBooksInfo.insertAdjacentHTML('beforeend', markupTopBooks);
    });
  });
});

