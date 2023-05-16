// Nazar
const btnModalOpen = document.querySelector('.modal__open');
const backdrop = document.querySelector('.backdrop');
const btnModalClose = document.querySelector('.modal__close-btn');
const modalContainer = document.querySelector('.modal__container');
const modalBtn = document.querySelector('.modal__btn');
const localDescr = document.querySelector('.modal__descr-local');
const body = document.body;

// Масив обк'єкта, який приходить із бекенду
const data = [
  {
    _id: '642fd89ac8cf5ee957f12361',
    list_name: 'Middle Grade Paperback Monthly',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: "Barbara O'Connor",
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: '',
    book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
    contributor: "by Barbara O'Connor",
    contributor_note: '',
    created_date: '2023-04-05 23:10:17',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250144051',
    primary_isbn13: '9781250144058',
    publisher: 'Square Fish',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WISH',
    updated_date: '2023-04-05 23:10:17',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
];

// Створення розмітки
function createMarkup(data) {
  return data.map(
    ({ book_image, title, description, author }) =>
      `<img src="${book_image}" alt="${title}"  class="modal__img"/>
        <div class="modal__content">
          <h2 class="modal__title">${title || 'No title'}</h2>
          <p class="modal__author">$${author || 'No author'}</p>
          <p class="modal__description">${description || 'No description'}</p>
        </div>`
  );
}

// Відкриття модалки
btnModalOpen.addEventListener('click', openModal);
function openModal(evt) {
  evt.preventDefault();
  backdrop.style.display = 'block';
  modalContainer.innerHTML = createMarkup(data);
  btnModalClose.addEventListener('click', onClosebtn);
  backdrop.addEventListener('click', onBackdrop);
  window.addEventListener('keydown', onKeyDown);
  backdrop.classList.remove('backdrop__hidden');
  body.classList.add('modal__open');
}

function onClosebtn() {
  backdrop.classList.add('backdrop__hidden');
  body.classList.remove('modal__open');
}

function onBackdrop(evt) {
  if (evt.target === backdrop) {
    backdrop.removeEventListener('click', onBackdrop);
    backdrop.classList.add('backdrop__hidden');
    body.classList.remove('modal__open');
  }
}

function onKeyDown({ code }) {
  if (code === 'Escape') {
    window.removeEventListener('keydown', onKeyDown);
    backdrop.classList.add('backdrop__hidden');
    body.classList.remove('modal__open');
  }
}

// function onBackdrop(evt) {
//   debugger;
//   if (evt.target.classList.contains('backdrop')) {
//     backdrop.removeEventListener('click', onBackdrop);
//     backdrop.classList.add('backdrop__hidden');
//     body.classList.remove('modal__open');
//   }
// }

// backdrop.addEventListener('click', onBackdropClick);
// function onBackdropClick(evt) {
//   if (evt.target === backdrop) {
//     backdrop.style.display = 'none';
//   }
// }
