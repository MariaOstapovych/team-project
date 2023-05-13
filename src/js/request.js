import axios from "axios";

export class FetchBooks {
    #BASE_URL = 'https://books-backend.p.goit.global/books/';
    constructor() {
      this.bookId = 0;
      this.category = '';
    }
  
    fetchCategoryList() {
      return axios
        .get(`${this.#BASE_URL}/category-list`)
        .then(response => response)
        .catch(console.error);
    }
  
    fetchTopBooks() {
      return axios
        .get(`${this.#BASE_URL}/top-books`)
        .then(response => response)
        .catch(console.error);
    }
  
    fetchBookId() {
      return axios
        .get(`${this.#BASE_URL}${this.bookId}`)
        .then(response => response)
        .catch(console.error);
    }
  
    fetchCategoryOfBooks() {
  return axios.get(`${this.#BASE_URL}category?category=${this.category}`)
        .then(response => response)
        .catch(error => console.error(error));  }
  }

// //ПЕРЕЛІК КАТЕГОРІЙ КНИГ

// export async function getCategoriesList() {
//     const categoriesList = await axios.get(
//         'https://books-backend.p.goit.global/books/category-list'
//     );
    
//     return categoriesList.data;
// }
// getCategoriesList()

// //ПОПУЛЯРНІ КНИГИ, ЩО НАЛЕЖАТЬ ДО УСІХ КАТЕГОРІЙ

// export async function getTopBooks() {
//     const topBooks = await axios.get(
//         'https://books-backend.p.goit.global/books/top-books'
//     );

//     return topBooks.data;
// }

// getTopBooks();

// //КНИГИ ОКРЕМОЇ КАТЕГОРІЇ

// export async function getBooksCategory(selectedCategory) {
//     const booksCategory = await axios.get(
//         `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
//     );

//     return booksCategory.data;
// }

// //ДЕТАЛЬНА ІНФОРМАЦІЯ ПРО КНИГУ(ID)

// export async function getBookId(bookId) {
//     const bookById = await axios.get(
//         `https://books-backend.p.goit.global/books/${bookId}`
//     );
//     return bookById.data;
// }

