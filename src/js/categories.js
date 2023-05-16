// Olga
import { getCategoriesList } from './request';
import axios from 'axios';
// import { getBooksCategory } from "./request";

const listElement = document.querySelector('.cat-list-js');
const bookList = document.querySelector('.book-list-js');
listElement.addEventListener('click', onClick);

function onClick(evt) {
  const categoryName = evt.target.outerText;
  console.log(categoryName);

  axios
    .get(
      `https://books-backend.p.goit.global/books/category?category=${categoryName}`
    )
    .then(function (response) {
      // обработка успешного запроса
      console.log(response.data);
      const book = response.data.map(({ _id, book_image, title, author }) =>
        console.log(_id, book_image, title, author)
      );

      bookList.innerHTML = createBookList(response.data);
    })
    .catch(function (error) {
      // обработка ошибки
      console.log(error);
    });
  // .finally(function () {
  //   // выполняется всегда
  // });
}

function createBookList(arr) {
  return arr
    .map(
      ({
        _id,
        book_image,
        title,
        author,
      }) => `<li class="category-book-item js-book-modal" data-book-id="${_id}">
       <a class="category-book-link" href="#">   
        <div class="category-book">
            <img src="${book_image}" alt="book" class="category-book-img">
            <div class="textbox">
                <div class="titlebox">  
                  <p class="titlebox-title">${title}</p>
                </div>
                  <div class="authorbox">  
                  <p class="authorbox-author">${author}</p>
                  </div>
              </div>
          </div>
      </a>
      </li>`
    )
    .join('');
}

const createCategoryList = async () => {
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
