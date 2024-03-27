/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// Toggle Switch Skin
function toggleSwitchSkin() {
  var activeBlock = document.querySelector('.ButtonActiveSkin');
  var all = document.querySelector('.ABTS_1');
  var substance = document.querySelector('.ABTS_2');
  var product = document.querySelector('.ABTS_3');
  var dry0 = document.querySelector('.ABT01');
  var oil0 = document.querySelector('.ABT02');
  var sensitive0 = document.querySelector('.ABT03');
  substance.addEventListener('click', function () {
    activeBlock.classList.add("BAS_2");
    activeBlock.classList.remove("BAS_1");
    activeBlock.classList.remove("BAS_3");
    all.classList.remove("DarkBlue");
    product.classList.remove("DarkBlue");
    substance.classList.add("DarkBlue");
    dry0.classList.add("None");
    oil0.classList.remove("None");
    sensitive0.classList.add("None");
  });
  all.addEventListener('click', function () {
    activeBlock.classList.add("BAS_1");
    activeBlock.classList.remove("BAS_2");
    activeBlock.classList.remove("BAS_3");
    all.classList.add("DarkBlue");
    product.classList.remove("DarkBlue");
    substance.classList.remove("DarkBlue");
    dry0.classList.remove("None");
    oil0.classList.add("None");
    sensitive0.classList.add("None");
  });
  product.addEventListener('click', function () {
    activeBlock.classList.add("BAS_3");
    activeBlock.classList.remove("BAS_1");
    activeBlock.classList.remove("BAS_2");
    all.classList.remove("DarkBlue");
    product.classList.add("DarkBlue");
    substance.classList.remove("DarkBlue");
    dry0.classList.add("None");
    oil0.classList.add("None");
    sensitive0.classList.remove("None");
  });
}

document.addEventListener('DOMContentLoaded', function () {
  toggleSwitchSkin();
});
/******/ })()
;