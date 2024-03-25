/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function tag() {
  var tags = document.querySelectorAll(".ATagClickable");
  var a = document.querySelector(".All");
  tags.forEach(function (tagItem) {
    tagItem.addEventListener('click', function () {
      if (tagItem != a) {
        a.classList.remove("Active");
        tagItem.classList.toggle("Active");
        filter();
      }

      var b = document.querySelectorAll(".Active");

      if (tagItem == a && !tagItem.classList.contains("Active")) {
        b.forEach(function (tagItem) {
          tagItem.classList.remove("Active");
        });
        tagItem.classList.add("Active");
        filterall();
      }

      if (b.length == 10) {
        b.forEach(function (tagItem) {
          tagItem.classList.remove("Active");
        });
        a.classList.add('Active');
        filterall();
      }

      if (b.length == 0) {
        a.classList.add('Active');
        filterall();
      }
    });
  });
}

function filterall() {
  var a0 = document.querySelectorAll(".FilterCard");
  var alltags = document.querySelectorAll(".Active");
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
  var a0 = document.querySelectorAll(".FilterCard");
  var alltags = document.querySelectorAll(".Active");
  var tagList = [];
  a0.forEach(function (item) {
    item.classList.add("None");
  });
  alltags.forEach(function (tagItem) {
    var classList = tagItem.className.split(' ');
    classList = classList.sort();
    count = 3;

    if (classList[3] == 'Active') {
      count += 1;
    }

    for (var i = count; i < classList.length; i++) {
      tagList.push(classList[i]);
    }
  });
  tagList.forEach(function (tagName) {
    a0.forEach(function (cardItem) {
      if (cardItem.classList.contains(tagName)) {
        cardItem.classList.remove("None");
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  tag();
});
/******/ })()
;