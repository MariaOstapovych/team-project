import axios from 'axios';

//ПЕРЕЛІК КАТЕГОРІЙ КНИГ

export async function getCategoriesList() {
  const categoriesList = await axios.get(
    'https://books-backend.p.goit.global/books/category-list'
  );

  return categoriesList.data;
}

//ПОПУЛЯРНІ КНИГИ, ЩО НАЛЕЖАТЬ ДО УСІХ КАТЕГОРІЙ

export async function getTopBooks() {
  const topBooks = await axios.get(
    'https://books-backend.p.goit.global/books/top-books'
  );

  return topBooks.data;
}

//КНИГИ ОКРЕМОЇ КАТЕГОРІЇ

export async function getBooksCategory(selectedCategory) {
  const booksCategory = await axios.get(
    `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`
  );

  return booksCategory.data;
}

//ДЕТАЛЬНА ІНФОРМАЦІЯ ПРО КНИГУ(ID)

// export async function getBookId(id) {
//   const bookById = await axios.get(
//     `https://books-backend.p.goit.global/books/${id}`

export async function getBookId(bookId) {
  const bookById = await axios.get(
    `https://books-backend.p.goit.global/books/${bookId}`
  );
  return bookById.data;
}
