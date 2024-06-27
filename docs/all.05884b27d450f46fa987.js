/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function search() {
  var search1 = document.querySelectorAll(".Q_Search");
  var searchinput = document.querySelector(".SearchInput");
  search1.forEach(function (searchItem) {
    searchItem.addEventListener('click', function () {
      searchItem.classList.toggle("SearchActive");
      searchinput.classList.toggle("SearchInputActive");
    });
  });
} // const card = document.querySelector(".TruthOrMythInnerCard");
// card.addEventListener("click", function (e) {
//     card.classList.toggle('Flipped');
// });


var oldWidth = window.innerWidth;

window.onresize = function () {
  var newWidth = window.innerWidth;

  if (newWidth > 1024 && oldWidth < 1024 || newWidth < 1024 && oldWidth > 1024) {
    oldWidth = newWidth;
    window.location.reload();
  }
};

function menu() {
  var a = window.innerWidth;

  if (a <= 480) {
    console.log(1);
    var listNone = document.querySelectorAll(".NoneDefault");
    var burger = document.querySelector(".BurgerMobile");
    var menuContainer = document.querySelector(".MenuMobile");
    console.log(burger, listNone);
    burger.addEventListener('click', function () {
      listNone.forEach(function (item) {
        item.classList.toggle("NoneDefault");
        menuContainer.classList.toggle("PositionFixed");
      });
      var windowHeight = window.innerHeight;
      console.log(menuContainer.style.height);

      if (menuContainer.style.height != windowHeight + 'px') {
        menuContainer.style.height = windowHeight + 'px';
      } else {
        menuContainer.style.height = 'fit-content';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  search(), menu();
});
/******/ })()
;