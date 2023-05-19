import { getCategoriesList } from './request';
import axios from 'axios';
import { loader } from './loader';
const listElement = document.querySelector('.cat-list-js');
const bookList = document.querySelector('.book-list-js');
const bookTitle = document.querySelector('.book-title-js');
const bestBooks = document.querySelector('.best-books__list');
const mainTitleHidden = document.querySelector('.best-books__maintitle');

listElement.addEventListener('click', onClick);

function onClick(evt) {
  const categoryName = evt.target.outerText;
  loader.show();
  axios
    .get(
      `https://books-backend.p.goit.global/books/category?category=${categoryName}`
    )
    .then(function (response) {
      bestBooks.innerHTML = '';
      bookList.innerHTML = createBookList(response.data);

      loader.hide();
    })
    .catch(function (error) {
      console.log(error);
    });
  bookTitle.textContent = categoryName;
  mainTitleHidden.style.visibility = 'hidden';
  mainTitleHidden.style.position = 'absolute';
}

export function createBookList(arr) {
  return arr
    .map(
      ({
        _id,
        book_image,
        title,
        author,
      }) => `<li class="category-book-item" data-book-id="${_id}">
       <button class="category__link" type='button' data-category>
       <a href="" class="best-books__link">
          <img src="${book_image}" alt="book" data-id="${_id}" class="category-book-img best-books__image">
        </a>
        <div class="card-quick">
         <p class="card-quick-view">Quick view</p>
      </div>
            <div class="textbox">
                <div class="titlebox">  
                  <p class="titlebox-title">${title}</p>
                </div>
                <div class="authorbox">  
                  <p class="authorbox-author">${author}</p>
                </div>
            </div>          
        </button>
      </li>`
    )
    .join('');
}

export const createCategoryList = async () => {
  try {
    const categoriesList = await getCategoriesList();
    categoriesList.sort((a, b) => a.list_name.localeCompare(b.list_name));

    const buttonsCategoriesList = categoriesList
      .map(
        category =>
          `<li class="category__item">
          <button class="category__link">
            ${category.list_name}
          </button>
        </li>`
      )
      .join('');
    listElement.insertAdjacentHTML('beforeend', buttonsCategoriesList);
  } catch (error) {
    console.log(error);
  }
};
createCategoryList();
