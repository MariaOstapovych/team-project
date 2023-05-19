import { getCategoriesList, getBooksCategory } from './request';
import axios from 'axios';
import { loader } from './loader';
const listElement = document.querySelector('.cat-list-js');
const bookList = document.querySelector('.book-list-js');
const bookTitle = document.querySelector('.book-title-js');
const bestBooks = document.querySelector('.best-books__list');
const mainTitleHidden = document.querySelector('.best-books__maintitle');

listElement.addEventListener('click', onClick);

async function onClick(evt) {
  const categoryName = evt.target.textContent.trim();
  loader.show();
  try {
    const response = await getBooksCategory(categoryName);
    console.log('response:', response);

    bestBooks.innerHTML = '';
    bookList.innerHTML = createBookList(response);

    loader.hide();

    bookTitle.textContent = categoryName;
    mainTitleHidden.style.visibility = 'hidden';
    mainTitleHidden.style.position = 'absolute';
  } catch (error) {
    console.log(error);
  }
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





























