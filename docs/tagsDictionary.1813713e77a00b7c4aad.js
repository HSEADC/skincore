/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function tag() {
  var tags = document.querySelectorAll(".ATagClickable");
  var a = document.querySelector(".All");
  var letters = 0;
  var noletters = 0;
  var subst = document.querySelector(".Subst");
  var prod = document.querySelector(".Prod");
  tags.forEach(function (tagItem) {
    tagItem.addEventListener('click', function () {
      var b = document.querySelectorAll(".Active");

      if (tagItem == a) {
        subst.classList.remove("Active");
        prod.classList.remove("Active");
        a.classList.add("Active");
        filter();
      }

      if (tagItem == subst) {
        a.classList.remove("Active");
        prod.classList.remove("Active");
        subst.classList.toggle("Active");
        filter();
      }

      if (tagItem == prod) {
        subst.classList.remove("Active");
        a.classList.remove("Active");
        prod.classList.toggle("Active");
        filter();
      }

      if (tagItem != a && tagItem != prod && tagItem != subst) {
        tagItem.classList.toggle("Active");
        filter();
      } // if (tagItem == a && !tagItem.classList.contains("Active")) {
      //     b.forEach((tagItem)  => {
      //         tagItem.classList.remove("Active");
      //     })
      //     tagItem.classList.add("Active");
      //     filterall();
      // }
      // if (b.length == 29)
      //     {
      //         b.forEach((tagItem)  => {
      //             tagItem.classList.remove("Active");
      //         })
      //         a.classList.add('Active');
      //         filterall();
      //     }


      if (b.length == 0) {
        a.classList.add('Active');
      }
    });
  });
} // function filter() {
//     if (a == 0) {
//         console.log('all');
//     }
//     let a0 = document.querySelectorAll(".FilterCard");
//     let alltags = document.querySelectorAll(".Active");
//     console.log(alltags)
//     alltags.forEach((tagItem) => {
//         // var classList = tagItem.className.split(' ');
//         if (tagItem.classList.contains("All")) {
//             a0.forEach((cardItem) => {
//                 cardItem.classList.remove("None");
//             })
//         }
//     })
// }


function filter() {
  var a = document.querySelector(".LetterCard");
  all0 = document.querySelector(".All");
  var subst = document.querySelector(".Subst");
  var prod = document.querySelector(".Prod");
  var a0 = document.querySelectorAll(".FilterCard");
  var alltags = document.querySelectorAll(".Active");
  var tagList = [];
  a0.forEach(function (item) {
    item.classList.add("None");
  });
  a0.forEach(function (cardItem) {
    if (all0.classList.contains("Active")) {
      if (cardItem.classList.contains("All")) {
        cardItem.classList.remove("None");
      }
    }

    if (subst.classList.contains("Active")) {
      if (cardItem.classList.contains("Substance")) {
        cardItem.classList.remove("None");
      }
    }

    if (prod.classList.contains("Active")) {
      if (cardItem.classList.contains("Product")) {
        cardItem.classList.remove("None");
      }
    }
  });
  alltags.forEach(function (tagItem) {
    var classList = tagItem.className.split(' ');
    classList = classList.sort();
    count = 5;

    if (classList[6] == 'Active') {
      count += 1;
    }

    for (var i = count; i < classList.length; i++) {
      tagList.push(classList[i]);
    }
  }); // for (let i = 0; i < tagList.length -1; i++){
  //     console.log(tagList[i]);
  //     a0.forEach((cardItem) => {
  //         if (cardItem.classList.contains(tagList[i])) {
  //             cardItem.classList.remove("None");
  //         }
  //         else {
  //             cardItem.classList.add("None");
  //         }
  //     })
  // }

  if (alltags.length >= 2) {
    a0.forEach(function (cardItem) {
      var classList = cardItem.className.split(' ');

      if (!tagList.includes(classList[5])) {
        cardItem.classList.add("None");
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  tag(), filter();
});
/******/ })()
;