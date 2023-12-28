/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 343:
/***/ (() => {

$(document).ready(function () {
  // $(".menu_web").click(function() {
  //     $(this).toggleClass("exist");   
  //     // if ($(this).hasClass("non-exist")) {
  //     //     $(this).removeClass("non-exist");
  //     //     $(this).toggleClass("exist");   
  //     // }
  //     if ($(".menu_web").hasClass("exist")) {
  //         $(this).addClass("menu_web00");
  //         $(".search").addClass("s_web");   
  //         $(".menu").addClass("menu_web0");  
  //         $(".link, .tags").addClass("menu_web01");   
  //         $(".link").addClass("link_web");  
  //         $(".tag1").addClass("tag1_web"); 
  //         $(".tag1").css('margin-left', '4vw');  
  //         $(".tags").addClass("tags_web");  
  //     }
  //     else {
  //         $(".menu_web").removeClass("menu_web00");
  //         $(".search").removeClass("s_web");   
  //         $(".menu").removeClass("menu_web0");  
  //         $(".link, .tags").removeClass("menu_web01");   
  //         $(".link").removeClass("link_web");  
  //         $(".tag1").removeClass("tag1_web"); 
  //         $(".tags").removeClass("tags_web");  
  //     }
  // });
  // карточка вещества
  $(".bt2").click(function () {
    $(".bt1").removeClass("active");
    $(".bt3").removeClass("active");
    $(this).toggleClass("active");
    $(".bubble_dark").css('margin-left', '12vw');
    $(".bubble_dark").css('width', '13vw');

    if (document.documentElement.clientWidth <= 414) {
      $(".bubble_dark").css('width', '23.7vw');
      $(".bubble_dark").css('margin-left', '20vw');
    }

    document.getElementById('change').textContent = 'Сыворотки для жирной кожи лица могут быть использованы для балансирования уровня жира, увлажнения кожи, уменьшения блеска, сужения пор и улучшения текстуры кожи. ';
  });
  $(".bt1").click(function () {
    $(".bt2").removeClass("active");
    $(".bt3").removeClass("active");
    $(this).toggleClass("active");
    $(".bubble_dark").css('margin-left', '0vw');

    if (document.documentElement.clientWidth <= 414) {
      $(".bubble_dark").css('width', '10.7vw ');
    }

    document.getElementById('change').textContent = 'Сухой коже необходимо глубокое увлажнение. Для этого типа подойдут сыворотки с гиалуроновой кислотой, церамидами или натуральными маслами, которые увлажнят и питают кожу. Можно также обратить внимание на наличие в составе витаминов E, C и B3. ';
  });
  $(".bt3").click(function () {
    $(".bt1").removeClass("active");
    $(".bt2").removeClass("active");
    $(this).toggleClass("active");
    $(".bubble_dark").css('margin-left', '26vw');
    $(".bubble_dark").css('width', '17.9vw');

    if (document.documentElement.clientWidth <= 414) {
      $(".bubble_dark").css('width', '41.7vw');
      $(".bubble_dark").css('margin-left', '46vw');
    }

    document.getElementById('change').textContent = 'Сыворотки для чувствительной кожи предназначены для ухода за кожей, которая склонна к раздражению, покраснениям, сухости и другим проблемам. Они имеют специальные формулы, разработанные с учетом потребностей чувствительной кожи, и содержат ингредиенты, которые помогают уменьшить воспаление, увлажнить и успокоить кожу.';
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _javascript_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(343);
/* harmony import */ var _javascript_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_javascript_all_js__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;