!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},c=e.parcelRequired7c6;null==c&&((c=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var c={id:t,exports:{}};return o[t]=c,e.call(c.exports,c,c.exports),c.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequired7c6=c),c("i8Q71");var a=c("944jd"),s=c("kvC6y"),l=document.querySelector(".best-books__list"),r=document.querySelector(".category__linkAll");(0,a.getTopBooks)().then((function(t){return e="",t.forEach((function(t){var o="";t.books.forEach((function(t){o+='<li class="best-books__item is-hidden-books">\n      <a href="" class="best-books__link">\n          <img class="best-books__image" loading="lazy" src="'.concat(t.book_image,'" alt="').concat(t.title,'" data-id="').concat(t._id,'">\n      </a>\n      <div class="card-quick">\n         <p class="card-quick-view">Quick view</p>\n      </div>\n      <p class=\'best-book__title\'>').concat(t.title,"</p>\n      <p class='best-book__author'>").concat(t.author,"</p>\n      </li>")})),e+="\n      <li class='best-books-category-wrap'>\n        <p class ='best-books__category__title'>".concat(t.list_name,"</p>\n        <ul class='best-book-category'>").concat(o,'</ul>\n        <button  class=\'best-books-morebutton\' type="button" data-category="').concat(t.list_name,'">see more</button>\n      </li>')})),s.loader.hide(),l.insertAdjacentHTML("afterbegin",e),void r.classList.add("category-selected");var e})),s.loader.show();var i=c("bpxeT"),d=c("2TvXO"),u=(a=c("944jd"),c("dIxxU")),b=(s=c("kvC6y"),document.querySelector(".cat-list-js")),p=document.querySelector(".book-list-js"),k=document.querySelector(".book-title-js"),_=document.querySelector(".category__linkAll"),g=document.querySelector(".category__link"),y=document.querySelector(".best-books");b.addEventListener("click",(function(t){var e=t.target.outerText;console.log(e),s.loader.show(),u.default.get("https://books-backend.p.goit.global/books/category?category=".concat(e)).then((function(t){t.data.map((function(e){e._id,e.book_image,e.title,e.author,e.list_name;return console.log(t)}));p.innerHTML=t.data.map((function(t){var e=t._id,o=t.book_image,n=t.title,c=t.author;return'<li class="category-book-item" data-book-id="'.concat(e,'">\n       <button class="category__link" type=\'button\' data-category>\n       <a href="" class="best-books__link">\n          <img src="').concat(o,'" alt="book" class="category-book-img">\n        </a>\n        <div class="card-quick">\n         <p class="card-quick-view">Quick view</p>\n      </div>\n            <div class="textbox">\n                <div class="titlebox">  \n                  <p class="titlebox-title">').concat(n,'</p>\n                </div>\n                <div class="authorbox">  \n                  <p class="authorbox-author">').concat(c,"</p>\n                </div>\n            </div>          \n        </button>\n      </li>")})).join(""),s.loader.hide()})).catch((function(t){console.log(t)})),_.classList.remove("category-selected"),g.classList.add("category-selected"),k.textContent=e,y.style.display="none"}));var f,m=(f=t(i)(t(d).mark((function e(){var o,n;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,a.getCategoriesList)();case 3:(o=t.sent).sort((function(t,e){return t.list_name.localeCompare(e.list_name)})),n=o.map((function(t){return'<li class="category__item">\n          <button class="category__link">\n            '.concat(t.list_name,"\n          </button>\n        </li>")})).join(""),b.insertAdjacentHTML("beforeend",n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),e,null,[[0,9]])}))),function(){return f.apply(this,arguments)});m(),c("4gMAq");var v=document.querySelector(".scroll-up");window.addEventListener("scroll",(function(){document.body.scrollTop>500||document.documentElement.scrollTop>500?v.style.display="block":v.style.display="none"})),v.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),c("5xtVg"),c("4bJVm"),c("944jd"),c("b3EoS")}();
//# sourceMappingURL=index.009c1c93.js.map
