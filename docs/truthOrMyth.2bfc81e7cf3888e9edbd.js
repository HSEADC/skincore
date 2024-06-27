/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function card() {
  var cards = document.querySelectorAll(".TruthOrMythInnerCard");
  cards.forEach(function (item) {
    item.addEventListener('click', function () {
      item.classList.toggle("Flipped");
    });
  });
}

function loadMoreTest() {
  // let testContainer = document.querySelector('.None');
  if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth > 767) {
    var theThirdDiv = document.querySelectorAll('.O_TruthOrMythCard');
    theThirdDiv[3].classList.add('None');
  }

  var testContainer = document.querySelectorAll('.None');
  var buttonTestMore = document.querySelector('.ButtonTestMore');
  var count = 4;
  var count3 = 3;
  buttonTestMore.addEventListener('click', function () {
    if (document.documentElement.clientWidth >= 1024) {
      for (item = 0; item < count; item++) {
        testContainer[item].style.display = 'flex';
      }

      count += 4;

      if (count == 12) {
        buttonTestMore.style.display = 'none';
      }
    } else {
      for (item = 0; item < count3; item++) {
        testContainer[item].style.display = 'flex';
      }

      count3 += 3;

      if (count3 == 12) {
        buttonTestMore.style.display = 'none';
      }
    } // if (count <2) {
    //     testContainer[count].style.display = 'flex';
    //     count +=1;
    // }
    // if (count ==2){
    // }

  });
}

document.addEventListener('DOMContentLoaded', function () {
  card();
  loadMoreTest();
});
/******/ })()
;