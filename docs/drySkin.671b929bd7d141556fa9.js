/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var _ref;

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
  question: "Сколько стаканов чистой воды вы выпиваете?",
  answers: ["30 мл на кг веса, половину из которых получаю из пищи", "Постоянно держу рядом с собой бутылку или стакан с водой", "Мало пью чистую воду", "Затрудняюсь ответить"],
  one: 1
}, _defineProperty(_ref, "one", 2), _defineProperty(_ref, "two", 3), _defineProperty(_ref, "hard", 4), _ref), {
  number: "2/5",
  question: "Пьете ли вы кофе или крепкий чай?",
  answers: ["Нет или очень редко", "Только по утрам", "Несколько чашек в день", "Затрудняюсь ответить"],
  one: 1,
  two: 2,
  three: 3,
  hard: 4
}, {
  number: "3/5",
  question: "Как ваша кожа отзывается на холодный и сухой климат?",
  answers: ["Появляются покраснения и шелушения", "Бывает легкое шелушение, мороз пощипывает", "Слабо реагирует", "Затрудняюсь ответить"],
  one: 1,
  two: 2,
  three: 3,
  hard: 4
}, {
  number: "4/5",
  question: "На какую кожу наносите увлажняющие средства?",
  answers: ["На слегка влажную кожу", "Когда как", "На абсолютно сухую кожу", "Затрудняюсь ответить"],
  one: 1,
  two: 2,
  three: 3,
  hard: 5
}, {
  number: "5/5",
  question: "Попробуйте слегка прищемить кожу ниже скулы. Как быстро она восстанавливается?",
  answers: ["Моментально", "Постепенно разгладилась", "При зажиме образовалось множество морщинок, которые впоследствии разгладились", "Затрудняюсь ответить"],
  one: 1,
  two: 2,
  three: 3,
  hard: 5
}]; // находим текст

var numberQuestion = document.querySelector(".ArticleBodyText");
var nameQuestion = document.querySelector(".ArticleH3");
var answersList = document.querySelector(".A_ResponseList");
var button = document.querySelector(".A_PrimaryButton"); //переменные для определения ответа

var oneScore = 0;
var twoScore = 0;
var threeScore = 0;
var hardScore = 0;
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

    if (userAnswer === questions[questionIndex]['one']) {
      oneScore += 1;
    }

    if (userAnswer === questions[questionIndex]['two']) {
      twoScore += 1;
    }

    if (userAnswer === questions[questionIndex]['three']) {
      threeScore += 1;
    }

    if (userAnswer === questions[questionIndex]['hard']) {
      hardScore += 1;
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

  if (oneScore === 1 && twoScore === 1 && threeScore === 1 && hardScore === 1 || hardScore === Math.max(hardScore, threeScore, twoScore, oneScore)) {
    var resultText = resultHtml.replace('%summary%', 'Трудно определить').replace('%about%', 'Ваши ответы оказались противоречивыми, однозначно сложно определить ваш тип кожи, постарайтесь перепройти тест. Помните, что важно подобрать подходящие продукты для очищения, чтобы достичь оптимального состояния кожи и сохранить ее здоровье. По этой причине необходимо знать свой тип кожи.');
    nameQuestion.innerHTML = resultText;
    var but = buttonHtml.replace('%next%', "Пройти тест еще раз");
    button.innerHTML = but;
    button.addEventListener('click', function () {
      history.go();
    });
  } else {
    if (twoScore === Math.max(hardScore, threeScore, twoScore, oneScore) || threeScore === Math.max(hardScore, threeScore, twoScore, oneScore)) {
      var _resultText = resultHtml.replace('%summary%', 'У вас немного сухая кожа').replace('%about%', 'Ваша кожа в целом не слишком страдает от сухости, но недостаток влаги ощущается. Пересмотрите питьевой режим и уход. Добавьте в свой ежедневный ритуал гидролаты, увлажняющие тоник и сыворотку для лица. Вы можете использовать гидролаты как тоник для лица, средство для снятия макияжа или просто в качестве освежающего спрея в течение дня.');

      nameQuestion.innerHTML = _resultText;
    }

    if (oneScore === Math.max(hardScore, threeScore, twoScore, oneScore)) {
      var _resultText2 = resultHtml.replace('%summary%', 'У вас увлажненная кожа').replace('%about%', 'Вам хватает влаги и насыщенных аминокислот. Вы можете дополнить уход гидролатами. Для жирной и проблемной кожи рекомендуется использовать гидролат «Шалфей». Он поможет балансировать кожный жир и сужать поры, а также обладает антисептическими свойствами, что помогает бороться с воспалениями и акне. Для сухой и чувствительной кожи подойдет гидролат «Липа». Он увлажняет и смягчает кожу, снимает раздражение и улучшает ее общее состояние. Вы можете использовать гидролаты как тоник для лица, средство для снятия макияжа или просто в качестве освежающего спрея в течение дня.');

      nameQuestion.innerHTML = _resultText2;
    }

    if (threeScore === Math.max(hardScore, threeScore, twoScore, oneScore)) {
      var _resultText3 = resultHtml.replace('%summary%', 'У вас обезвоживание кожи').replace('%about%', 'Кожа испытывает дефицит увлажнения, что проявляется в стянутости, шелушении, красноте и мелких морщинках. Для решения этой проблемы необходимо принять серьезные меры. Рекомендуется уделить внимание питьевому режиму и диете, а также использовать уход с акцентом на интенсивное увлажнение. Добавление в уход увлажняющей и мягкой пенки для умывания, тоника, гидролатов и концентрата масел раз в неделю поможет насытить кожу влагой и сохранить ее от потери влаги.');

      nameQuestion.innerHTML = _resultText3;
    }

    var _but = buttonHtml.replace('%next%', "Пройти другие тесты");

    button.innerHTML = _but;
    button.addEventListener('click', function () {
      window.location.href = '../activity.html';
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  clearText();
  changeText();
  checkAnswer();
});
/******/ })()
;