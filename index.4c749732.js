!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},c=e.parcelRequired7c6;null==c&&((c=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var c={id:t,exports:{}};return o[t]=c,e.call(c.exports,c,c.exports),c.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequired7c6=c),c("4bJVm"),c("944jd"),c("i8Q71");var a=c("944jd");c("944jd");c("kvC6y");var r=c("bpxeT"),s=c("2TvXO"),i=(a=c("944jd"),c("kvC6y")),l=document.querySelector(".cat-list-js"),u=document.querySelector(".book-list-js"),d=document.querySelector(".book-title-js"),b=document.querySelector(".best-books__list"),p=document.querySelector(".best-books__maintitle");function k(){return(k=t(r)(t(s).mark((function e(o){var n,c;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.target.textContent.trim(),i.loader.show(),t.prev=2,t.next=5,(0,a.getBooksCategory)(n);case 5:c=t.sent,console.log("response:",c),b.innerHTML="",u.innerHTML=f(c),i.loader.hide(),d.textContent=n,p.style.visibility="hidden",p.style.position="absolute",t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),console.log(t.t0);case 18:case"end":return t.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}function f(t){return t.map((function(t){var e=t._id,o=t.book_image,n=t.title,c=t.author;return'<li class="category-book-item" data-book-id="'.concat(e,'">\n       <button class="category__link" type=\'button\' data-category>\n       <a href="" class="best-books__link">\n          <img src="').concat(o,'" alt="book" data-id="').concat(e,'" class="category-book-img best-books__image">\n        </a>\n        <div class="card-quick">\n         <p class="card-quick-view">Quick view</p>\n      </div>\n            <div class="textbox">\n                <div class="titlebox">  \n                  <p class="titlebox-title">').concat(n,'</p>\n                </div>\n                <div class="authorbox">  \n                  <p class="authorbox-author">').concat(c,"</p>\n                </div>\n            </div>          \n        </button>\n      </li>")})).join("")}l.addEventListener("click",(function(t){return k.apply(this,arguments)}));var _,v=(_=t(r)(t(s).mark((function e(){var o,n;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,a.getCategoriesList)();case 3:(o=t.sent).sort((function(t,e){return t.list_name.localeCompare(e.list_name)})),n=o.map((function(t){return'<li class="category__item">\n          <button class="category__link">\n            '.concat(t.list_name,"\n          </button>\n        </li>")})).join(""),l.insertAdjacentHTML("beforeend",n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),e,null,[[0,9]])}))),function(){return _.apply(this,arguments)});v();var g=document.querySelector(".book-list-js"),y=document.querySelector(".best-books__list");(0,a.getTopBooks)().then((function(t){return function(t){var e="";function o(t){t.preventDefault(),(0,a.getTopBooks)().then((function(t){console.log(t),y.innerHTML=e}))}function n(t){if("BUTTON"===t.target.nodeName){var e=t.target.getAttribute("data-category");(0,a.getBooksCategory)(e).then((function(t){y.innerHTML="",g.innerHTML=f(t)}))}}t.forEach((function(t){var o="";t.books.forEach((function(t){o+='<li class="best-books__item is-hidden-books">\n      <a href="" class="best-books__link">\n          <img class="best-books__image" loading="lazy" src="'.concat(t.book_image,'" alt="').concat(t.title,'" data-id="').concat(t._id,'">\n      </a>\n      <div class="card-quick">\n         <p class="card-quick-view">Quick view</p>\n      </div>\n      <p class=\'best-book__title\'>').concat(t.title,"</p>\n      <p class='best-book__author'>").concat(t.author,"</p>\n      </li>")})),e+="\n      <li class='best-books-category-wrap'>\n        <p class ='best-books__category__title'>".concat(t.list_name,"</p>\n        <ul class='best-book-category'>").concat(o,'</ul>\n        <button  class=\'best-books-morebutton\' type="button" data-category="').concat(t.list_name,'">see more</button>\n      </li>')})),y.insertAdjacentHTML("afterbegin",e),document.querySelector(".category__linkAll").addEventListener("click",o),document.querySelector(".best-books__list").addEventListener("click",n)}(t)})),c("5xtVg"),c("4gMAq");var m=document.querySelector(".scroll-up");window.addEventListener("scroll",(function(){document.body.scrollTop>500||document.documentElement.scrollTop>500?m.style.display="block":m.style.display="none"})),m.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),c("b3EoS")}();
//# sourceMappingURL=index.4c749732.js.map
