/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// toggle switch
function toggleSwitch() {
  var activeBlock = document.querySelector('.ButtonActive');
  var all = document.querySelector('.ABT_1');
  var substance = document.querySelector('.ABT_2');
  var product = document.querySelector('.ABT_3');
  substance.addEventListener('click', function () {
    activeBlock.classList.add("BA_2");
    activeBlock.classList.remove("BA_1");
    activeBlock.classList.remove("BA_3");
    all.classList.remove("DarkBlue");
    product.classList.remove("DarkBlue");
    substance.classList.add("DarkBlue");
  });
  all.addEventListener('click', function () {
    activeBlock.classList.add("BA_1");
    activeBlock.classList.remove("BA_2");
    activeBlock.classList.remove("BA_3");
    all.classList.add("DarkBlue");
    product.classList.remove("DarkBlue");
    substance.classList.remove("DarkBlue");
  });
  product.addEventListener('click', function () {
    activeBlock.classList.add("BA_3");
    activeBlock.classList.remove("BA_1");
    activeBlock.classList.remove("BA_2");
    all.classList.remove("DarkBlue");
    product.classList.add("DarkBlue");
    substance.classList.remove("DarkBlue");
  });
}

document.addEventListener('DOMContentLoaded', function () {
  toggleSwitch();
});
/******/ })()
;