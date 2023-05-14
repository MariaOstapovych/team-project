// Olga
import { getCategoriesList } from "./request";
import axios from "axios";
// import { getBooksCategory } from "./request";

const listElement = document.querySelector(".cat-list-js");
const bookList = document.querySelector(".book-list-js");

listElement.addEventListener("click", onClick);

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
      const book = response.data.map(
        ({
          _id,
          book_image,
          title,
          author
        }) => console.log(_id,
          book_image,
          title,
          author)
      )

 bookList.insertAdjacentHTML("beforeend", createBookList(response.data));

    })
    .catch(function(error) {
      // обработка ошибки
      console.log(error);
    })
    .finally(function() {
      // выполняется всегда
    });
}

function createBookList(arr) {
  return arr.map(({ _id, book_image, title, author }) => `<li class="item-category-book js-book-modal" data-book-id="${_id}">
       <a class="link-books-render" href="#">   
        <div class="card-book">
            <div class="img-card-book">
            <img src="${book_image}" alt="book" class="img-book">
            </div>
              <div class="box-text-book-category">
                <div class="box-title">  
                  <p class="title-book">${title}</p>
                </div>
                  <div class="box-author">  
                  <p class="author-book">${author}</p>
                  </div>
              </div>
          </div>
      </a>
      </li>`).join("");
}


const createCategoryList = async () => {
  try {
    const categoriesList = await getCategoriesList();
    categoriesList.sort((a, b) => a.list_name.localeCompare(b.list_name));

    const buttonsCategoriesList = categoriesList
      .map(
        category =>
          `<li class="cat-list__item">
          <button class="cat-list__button">
            ${category.list_name}
          </button>
        </li>`
      )
      .join("");
    listElement.insertAdjacentHTML("beforeend", buttonsCategoriesList);
  } catch (error) {
    console.log(error);
  }
};
createCategoryList();
