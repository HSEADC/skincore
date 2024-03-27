/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var _ref, _ref2, _ref3, _ref4, _ref5;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var questions = [(_ref = {
  number: "1/5",
  question: "Какое из перечисленных масел на самом деле представляет собой воск?",
  answers: ["Кокосовое масло", "Масло шиповника", "Масло жожоба", "Облепиховое масло", "Миндальное масло"],
  wrong: 1
}, _defineProperty(_ref, "wrong", 2), _defineProperty(_ref, "right", 3), _defineProperty(_ref, "wrong", 4), _defineProperty(_ref, "wrong", 5), _ref), (_ref2 = {
  number: "2/5",
  question: "Что значит термин «некомедогенно»?",
  answers: ["Все ингредиенты средства являются органическими", "Продукт не закупоривает поры", "Средство не раздражает чувствительную кожу", "Средство является гипоаллергенным", "Средство не сушит кожу"],
  wrong: 1,
  right: 2
}, _defineProperty(_ref2, "wrong", 3), _defineProperty(_ref2, "wrong", 4), _defineProperty(_ref2, "wrong", 5), _ref2), (_ref3 = {
  number: "3/5",
  question: "Как правильно наносить крем вокруг глаз?",
  answers: ["Втирать средство круговыми движениями", "Массирующими движениями наносить средство ватным диском", "Мягко наносить средство безымянным пальцем", "Наносить крем только на нижнее веко", "Крем не нужен"],
  wrong: 1
}, _defineProperty(_ref3, "wrong", 2), _defineProperty(_ref3, "right", 3), _defineProperty(_ref3, "wrong", 4), _defineProperty(_ref3, "wrong", 5), _ref3), (_ref4 = {
  number: "4/5",
  question: "Когда необходимо наносить средство с SPF?",
  answers: ["Каждый раз, выходя на улицу дольше, чем на 15 минут", "Только летом и весной", "Только в солнечную погоду", "Каждый день", "Только на пляже при загаре"],
  wrong: 1
}, _defineProperty(_ref4, "wrong", 2), _defineProperty(_ref4, "wrong", 3), _defineProperty(_ref4, "right", 4), _defineProperty(_ref4, "wrong", 5), _ref4), (_ref5 = {
  number: "5/5",
  question: "Какой правильный порядок нанесения этих средств?",
  answers: ["Очищающее средство, сыворотка, тоник, увлажняющее средство", "Сыворотка, очищающее средство, тоник, увлажняющее средство.", "Очищающее средство, тоник, сыворотка, увлажняющее средство", "Очищающее средство, сыворотка, увлажняющее средство, тоник", "Нет определенного порядка, главное использовать все средства"],
  wrong: 1
}, _defineProperty(_ref5, "wrong", 2), _defineProperty(_ref5, "right", 3), _defineProperty(_ref5, "wrong", 4), _defineProperty(_ref5, "wrong", 5), _ref5)]; // находим текст

var numberQuestion = document.querySelector(".ArticleBodyText");
var nameQuestion = document.querySelector(".ArticleH3");
var answersList = document.querySelector(".A_ResponseList");
var button = document.querySelector(".A_PrimaryButton"); //переменные для определения ответа

var wrongScore = 0;
var rightScore = 0;
var questionIndex = 0; // индекс текущего вопроса
// очищаем и меняем текст

function clearText() {
  nameQuestion.innerHTML = '';
  answersList.innerHTML = '';
  numberQuestion.innerHTML = '';
}

function changeText() {
  // номер
  var numberHtml = '<div class="A_ArticleBodyText ArticleBodyText">%1/5%</div>';
  var num = numberHtml.replace('%1/5%', questions[questionIndex]['number']);
  numberQuestion.innerHTML = num; // заголовок

  var nameHtml = '<div class="A_ArticleH3 ArticleH3">%name%</div>';
  var name = nameHtml.replace('%name%', questions[questionIndex]['question']);
  nameQuestion.innerHTML = name; // варианты ответа

  var _iterator = _createForOfIteratorHelper(questions[questionIndex]['answers'].entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2);

      index = _step$value[0];
      item = _step$value[1];
      var questionHtml = "<div class=\"A_Response\">\n            <input value =\"%number%\" type=\"radio\" name=\"answer\">\n            <label class = \"A_ResponseText\" for=\"radio\">%answer%</label>\n        </div>";
      var answer = questionHtml.replace('%answer%', item).replace('%number%', index + 1);
      answersList.innerHTML += answer;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function checkAnswer() {
  button.addEventListener('click', function () {
    var checkedRadio = answersList.querySelector('input:checked'); // если ответа нет

    if (!checkedRadio) {
      return;
    } // если ответ есть


    var userAnswer = parseInt(checkedRadio.value);

    if (userAnswer === questions[questionIndex]['right']) {
      rightScore += 1;
    } else {
      wrongScore += 1;
    }

    if (questionIndex != questions.length - 1) {
      questionIndex += 1;
      clearText();
      changeText();
    } else {
      clearText();
      result();
    }
  });
}

function result() {
  var resultHtml = "<div class=\"A_ArticleBodyText\">\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:</div>\n    <div class=\"A_ArticleH3\">%summary%</div>\n    <div class=\"A_ArticleBodyText\">%about%</div>";
  var buttonHtml = "%next%\n    <div class=\"Q_Arrow ArrowWhite\"></div>";

  if (wrongScore > 3) {
    var resultText = resultHtml.replace('%summary%', 'Вы еще новичок!').replace('%about%', "\u0412\u044B\xA0\u0435\u0449\u0435 \u0441\u043E\u0432\u0441\u0435\u043C \u043C\u0430\u043B\u043E \u0437\u043D\u0430\u0435\u0442\u0435 \u043F\u0440\u043E\xA0\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0443\u044E \u0438\xA0\u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0443\u044E \u0440\u0443\u0442\u0438\u043D\u0443, \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0430\u0448\u0438\u0445 \u0441\u0442\u0430\u0442\u0435\u0439!\n        \u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B:\n        1. \u041C\u0430\u0441\u043B\u043E \u0436\u043E\u0436\u043E\u0431\u0430 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A\xA0\u0432\u043E\u0441\u043A\u0430\u043C, \u0445\u043E\u0442\u044F \u0438\xA0\u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u043A\u0430\u043A \u0440\u0430\u0441\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E.\n        2. \xAB\u041D\u0435\u043A\u043E\u043C\u0435\u0434\u043E\u0433\u0435\u043D\u043D\u043E\xBB \u0437\u043D\u0430\u0447\u0438\u0442 \u043D\u0435\xA0\u0437\u0430\u043A\u0443\u043F\u043E\u0440\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u0440\u044B, \u044D\u0442\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043F\u043E\u0434\u043E\u0439\u0434\u0435\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0441\u0442\u0440\u0430\u0434\u0430\u0435\u0442 \u043E\u0442\xA0\u0430\u043A\u043D\u0435.\n        3. \u041A\u043E\u0436\u0430 \u0432\u043E\u043A\u0440\u0443\u0433 \u0433\u043B\u0430\u0437 \u043D\u0435\u0436\u043D\u0430\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043B\u0443\u0447\u0448\u0435 \u043D\u0430\u043D\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0431\u0435\u0437\u044B\u043C\u044F\u043D\u043D\u044B\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u2014 \u0441\u0430\u043C\u044B\u043C \u0441\u043B\u0430\u0431\u044B\u043C.\n        4. SPF \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043D\u0430\u043D\u043E\u0441\u0438\u0442\u044C \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E, \u0442\u0430\u043A \u043A\u0430\u043A \u043A\u043E\u0436\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0423\u0424-\u0438\u0437\u043B\u0443\u0447\u0435\u043D\u0438\u0435\n        5. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B \u0443\u043C\u044B\u0432\u0430\u0435\u0442\u0435\u0441\u044C, \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u043D\u043E\u0441\u0438\u0442\u0435 \u0442\u043E\u043D\u0438\u043A \u0434\u043B\u044F\xA0\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u043A\u043E\u0436\u0438 \u043A\xA0\u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C\u0443 \u0443\u0445\u043E\u0434\u0443, \u0434\u0430\u043B\u0435\u0435 \u0441\u044B\u0432\u043E\u0440\u043E\u0442\u043A\u0443, \u0437\u0430\u0442\u0435\u043C \u2014 \u0443\u0432\u043B\u0430\u0436\u043D\u044F\u044E\u0449\u0435\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E: \u043E\u043D\u043E \u043A\u0430\u043A \u0431\u043E\u043B\u0435\u0435 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u0439 \u0438\xA0\u043F\u043B\u043E\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0443 \u0443\u0445\u043E\u0434\u0430.");
    nameQuestion.innerHTML = resultText;
  } else {
    var _resultText = resultHtml.replace('%summary%', 'Вы настоящий эксперт!').replace('%about%', "\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E \u0432\u044B\xA0\u043E\u0447\u0435\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u043E \u0437\u043D\u0430\u0435\u0442\u0435 \u0443\u0445\u043E\u0434\u043E\u0432\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430. \u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B:\n        1. \u041C\u0430\u0441\u043B\u043E \u0436\u043E\u0436\u043E\u0431\u0430 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A\xA0\u0432\u043E\u0441\u043A\u0430\u043C, \u0445\u043E\u0442\u044F \u0438\xA0\u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u043A\u0430\u043A \u0440\u0430\u0441\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E.\n        2. \xAB\u041D\u0435\u043A\u043E\u043C\u0435\u0434\u043E\u0433\u0435\u043D\u043D\u043E\xBB \u0437\u043D\u0430\u0447\u0438\u0442 \u043D\u0435\xA0\u0437\u0430\u043A\u0443\u043F\u043E\u0440\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u0440\u044B, \u044D\u0442\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043F\u043E\u0434\u043E\u0439\u0434\u0435\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0441\u0442\u0440\u0430\u0434\u0430\u0435\u0442 \u043E\u0442\xA0\u0430\u043A\u043D\u0435.\n        3. \u041A\u043E\u0436\u0430 \u0432\u043E\u043A\u0440\u0443\u0433 \u0433\u043B\u0430\u0437 \u043D\u0435\u0436\u043D\u0430\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043B\u0443\u0447\u0448\u0435 \u043D\u0430\u043D\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0431\u0435\u0437\u044B\u043C\u044F\u043D\u043D\u044B\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u2014 \u0441\u0430\u043C\u044B\u043C \u0441\u043B\u0430\u0431\u044B\u043C.\n        4. SPF \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043D\u0430\u043D\u043E\u0441\u0438\u0442\u044C \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E, \u0442\u0430\u043A \u043A\u0430\u043A \u043A\u043E\u0436\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0423\u0424-\u0438\u0437\u043B\u0443\u0447\u0435\u043D\u0438\u0435\n        5. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B \u0443\u043C\u044B\u0432\u0430\u0435\u0442\u0435\u0441\u044C, \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u043D\u043E\u0441\u0438\u0442\u0435 \u0442\u043E\u043D\u0438\u043A \u0434\u043B\u044F\xA0\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u043A\u043E\u0436\u0438 \u043A\xA0\u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C\u0443 \u0443\u0445\u043E\u0434\u0443, \u0434\u0430\u043B\u0435\u0435 \u0441\u044B\u0432\u043E\u0440\u043E\u0442\u043A\u0443, \u0437\u0430\u0442\u0435\u043C \u2014 \u0443\u0432\u043B\u0430\u0436\u043D\u044F\u044E\u0449\u0435\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E: \u043E\u043D\u043E \u043A\u0430\u043A \u0431\u043E\u043B\u0435\u0435 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u0439 \u0438\xA0\u043F\u043B\u043E\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0443 \u0443\u0445\u043E\u0434\u0430.");

    nameQuestion.innerHTML = _resultText;
  }

  var but = buttonHtml.replace('%next%', "Пройти другие тесты");
  button.innerHTML = but;
  button.addEventListener('click', function () {
    window.location.href = '../activity.html';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  clearText();
  changeText();
  checkAnswer();
});
/******/ })()
;