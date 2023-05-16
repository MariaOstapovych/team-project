//
import { getTopBooks } from './request';
import { getCategoriesList } from './request';
import Notiflix from 'notiflix';

const bestBooks = document.querySelector('.best-books__list');

const promise = getTopBooks();
const categories = getCategoriesList();

promise.then(data => createBooks(data));
categories.then(categ => createMarkup(categ));

let markupBooks = '';

function createBooks(data) {
  data.map(arr => {
    const dataBooks = arr.books;
    dataBooks.map((mas) => {
        markupBooks += `<li><p>${mas.title}</p></li>`
    })
  });
}

console.log(markupBooks)

function createMarkup(categ) {
  let markup = '';
  categ.map(arr => {
    markup += `
           <li>
           <p>${arr.list_name}</p>
            <ul></ul>
           <button type="button" data-category="${arr.list_name}">see more
           </button>
           </li>`;
  });
  // .join('')
  //   console.log(markup)
  bestBooks.insertAdjacentHTML('afterbegin', markup);
}

///////////////////////
// console.log(books)
// .map(category => {
//     return `
//          <li class='all-categories__item'>
//          <p class='category-books__title'>${category.list_name}</p>
//           <ul class='category-books__list-js card-set'>
//          ${makeMarkupGategory(category.books)}
//          </ul>
//          <button class="load-more-js" type="button" data-category="${
//            category.list_name
//          }">see more</button>
//          </li>
//     `;
//   })
//   .join('');
// };
// const dataBook = arr.books;
//     dataBook.map((book) => {
//       return ` <li><p>${arr.list_name}</p>
//       <ul><li>${book.title}</li></ul>
//     <button type="button" data-category="${arr.list_name}">see more</button></li>`;
//     });
//     return
//   });
