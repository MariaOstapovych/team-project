function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},c=t.parcelRequired7c6;null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var c={id:e,exports:{}};return o[e]=c,t.call(c.exports,c,c.exports),c.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=c),c("kyEFX").register(JSON.parse('{"5ZPII":"index.0e5a7a7d.js","8OQ7p":"icons.e7757261.svg","a8cj2":"shopping-list.84dc229d.js"}')),c("dohZK"),c("bUb57"),c("bLj5o");var l=c("e5MbR"),a=c("2shzp");const s=document.querySelector(".cat-list-js"),i=document.querySelector(".book-list-js"),r=document.querySelector(".category__link");s.addEventListener("click",(function(e){const t=e.target.outerText;a.default.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then((function(e){e.data.map((({_id:e,book_image:t,title:o,author:n})=>console.log(e,t,o,n)));i.innerHTML=e.data.map((({_id:e,book_image:t,title:o,author:n})=>`<li class="category-book-item" data-book-id="${e}">\n       <a class="category__link" href="#">\n          <img src="${t}" alt="book" class="category-book-img">\n            <div class="textbox">\n                <div class="titlebox">  \n                  <p class="titlebox-title">${o}</p>\n                </div>\n                <div class="authorbox">  \n                  <p class="authorbox-author">${n}</p>\n                </div>\n            </div>          \n        </a>\n      </li>`)).join("")})).catch((function(e){console.log(e)})),r.classList.add("category-selected")}));(async()=>{try{const e=await(0,l.getCategoriesList)();e.sort(((e,t)=>e.list_name.localeCompare(t.list_name)));const t=e.map((e=>`<li class="category__item">\n          <button class="category__link">\n            ${e.list_name}\n          </button>\n        </li>`)).join("");s.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}})(),c("k9SMe");const d=document.querySelector(".scroll-up");window.addEventListener("scroll",(function(){document.body.scrollTop>500||document.documentElement.scrollTop>500?d.style.display="block":d.style.display="none"})),d.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),c("e5MbR");var u;u=new URL(c("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const g=document.querySelector(".mode-switch"),b=document.querySelector("body"),p=document.querySelector(".header__logo-icon use"),m=localStorage.getItem("selectedMode");m?(b.classList=m,g.checked="dark"===m,"dark"===m&&p.setAttribute("href",`${e(u)}#icon-logo-dark`)):b.classList="light",g.addEventListener("change",(function(){const t=this.checked?"dark":"light";b.classList=t,"dark"===t?p.setAttribute("href",`${e(u)}#icon-logo-dark`):p.setAttribute("href",`${e(u)}#icon-logo-light`),localStorage.setItem("selectedMode",t)})),c("bTcpz");
//# sourceMappingURL=index.0e5a7a7d.js.map