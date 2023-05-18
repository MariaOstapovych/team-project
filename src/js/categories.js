import { getCategoriesList } from './request';
import axios from 'axios';
// import { getBooksCategory } from "./request";

const listElement = document.querySelector('.cat-list-js');
const bookList = document.querySelector('.book-list-js');
const bookTitle = document.querySelector('.book-title-js');
// const bestButton = document.querySelector('.category__linkAll');
// const listItem = document.querySelector('.category__link');
const bestBooksHidden = document.querySelector('.best-books');

listElement.addEventListener('click', onClick);

function onClick(evt) {
  const categoryName = evt.target.outerText;
  console.log(categoryName);

  axios
    .get(
      `https://books-backend.p.goit.global/books/category?category=${categoryName}`
    )
    .then(function (response) {
      bookList.innerHTML = createBookList(response.data);
    });
  // listItem.classList.add('category-selected');
  bookTitle.textContent = categoryName;
  bestBooksHidden.style.display = 'none';
}

function createBookList(arr) {
  return arr
    .map(
      ({
        _id,
        book_image,
        title,
        author,
      }) => `<li class="category-book-item" data-book-id="${_id}">
       <button class="category__link" type='button' data-category>
          <img src="${book_image}" alt="book" class="category-book-img">
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
