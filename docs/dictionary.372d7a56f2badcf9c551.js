/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function tag() {
  var tags = document.querySelectorAll(".AButtonClickable");
  var a = document.querySelector(".All");
  var a0 = document.querySelector(".Product");
  var a1 = document.querySelector(".Substance");
  var c = document.querySelector('.ButtonActive');
  tags.forEach(function (tagItem) {
    tagItem.addEventListener('click', function () {
      if (tagItem == a0) {
        a.classList.remove("DarkBlue");
        a1.classList.remove("DarkBlue");
        tagItem.classList.toggle("DarkBlue");
        c.classList.toggle("BA_2");
        c.classList.remove("BA_3");
        c.classList.remove("BA_1");
        filter();
      }

      if (tagItem == a1) {
        a.classList.remove("DarkBlue");
        a0.classList.remove("DarkBlue");
        tagItem.classList.toggle("DarkBlue");
        c.classList.toggle("BA_3");
        c.classList.remove("BA_2");
        c.classList.remove("BA_1");
        filter();
      }

      if (tagItem == a) {
        a1.classList.remove("DarkBlue");
        a0.classList.remove("DarkBlue");
        tagItem.classList.toggle("DarkBlue");
        c.classList.toggle("BA_1");
        c.classList.remove("BA_2");
        c.classList.remove("BA_3");
        filterall();
      } // let b = document.querySelectorAll(".Active");
      // if (tagItem == a && !tagItem.classList.contains("Active")) {
      //     b.forEach((tagItem)  => {
      //         tagItem.classList.remove("Active");
      //     })
      //     tagItem.classList.add("Active");
      //     filterall();
      // }

    });
  });
}

function filterall() {
  var a0 = document.querySelectorAll(".FilterCard");
  var alltags = document.querySelectorAll(".DarkBlue");
  alltags.forEach(function (tagItem) {
    var classList = tagItem.className.split(' ');

    if (tagItem.classList.contains("All")) {
      a0.forEach(function (cardItem) {
        cardItem.classList.remove("None");
      });
    }
  });
}

function filter() {
  var loadMore = document.querySelector(".ButtonTestMore");
  loadMore.classList.add("None");
  var a0 = document.querySelectorAll(".FilterCard");
  var alltags = document.querySelector(".DarkBlue");
  var thetag = alltags.className.split(' ')[3];
  a0.forEach(function (item) {
    item.classList.add("None");
  });
  a0.forEach(function (item) {
    if (item.classList.contains(thetag)) {
      item.classList.remove("None");
    }
  });
}

function loadMoreTest() {
  // let testContainer = document.querySelector('.None');
  // if ((document.documentElement.clientWidth < 1024) && (document.documentElement.clientWidth > 767)) {
  //     let theThirdDiv = document.querySelectorAll('.O_DictionaryCard');
  //     theThirdDiv[3].classList.add('None');
  // }
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

      if (count == 16) {
        buttonTestMore.style.display = 'none';
      }
    } else {
      for (item = 0; item < count3; item++) {
        testContainer[item].style.display = 'flex';
      }

      count3 += 3;

      if (count3 == 15) {
        buttonTestMore.style.display = 'none';
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  tag(), loadMoreTest();
});
/******/ })()
;