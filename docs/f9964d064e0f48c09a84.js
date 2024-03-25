function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var questions = [{
  number: "1/5",
  question: "Какие ощущения возникают на вашей коже после очищения?",
  answers: ["Нет дискомфорта, кожа сияет", "Ощущается сухость, дискомфорт", "Через 10-15 минут появляется жирный блеск", "Появляется чрезмерный блеск лица в Т-зоне, а область щек остается матовой", "Затрудняюсь ответить"],
  normal: 1,
  dry: 2,
  oil: 3,
  mix: 4,
  hard: 5
}, {
  number: "2/5",
  question: "Что происходит с кожей, если пренебречь ее увлажнением?",
  answers: ["Без увлажняющего кремя кожа выглядит свежо", "Кожа стягивается, выглядит сухой и безжизненной", "Жирный блеск усиливается", "Жирный блеск лица усиливается в Т-зоне, а область щек остается матовой", "Затрудняюсь ответить"],
  normal: 1,
  dry: 2,
  oil: 3,
  mix: 4,
  hard: 5
}, {
  number: "3/5",
  question: "Как вы оцениваете состояние пор и высыпаний?",
  answers: ["Поры не заметны, высыпания практически не появляются", "Поры почти не заметны, высыпания редки", "Поры в основном расширенные, часто появляются акне, сыпь, черные точки", "Поры расширены только в T-зоне, в U-зоне пор нет или они не заметны", "Затрудняюсь ответить"],
  normal: 1,
  dry: 2,
  oil: 3,
  mix: 4,
  hard: 5
}, {
  number: "4/5",
  question: "Реагирует ли кожа на неправильное питание, вредные привычки и другие внешние факторы?",
  answers: ["Нет, не реагирует", "Возникает сухость и раздражение кожи", "Появляется акне и жирный блеск", "Появляются высыпания в области лба, носа и подбородка", "Затрудняюсь ответить"],
  normal: 1,
  dry: 2,
  oil: 3,
  mix: 4,
  hard: 5
}, {
  number: "5/5",
  question: "Через 30 минут после очищения кожи приложите матирующую или бумажную салфетку. Опишите ее",
  answers: ["Нет следов", "На салфетке следов нет, но на коже остались покраснения", "На салфетке немного появился себум", "На салфетке появляются большие жирные пятна", "Затрудняюсь ответить"],
  normal: 1,
  dry: 2,
  oil: 3,
  mix: 4,
  hard: 5
}]; // находим текст

var numberQuestion = document.querySelector(".ArticleBodyText");
var nameQuestion = document.querySelector(".ArticleH3");
var answersList = document.querySelector(".A_ResponseList");
var button = document.querySelector(".A_PrimaryButton"); //переменные для определения ответа

var normalScore = 0;
var dryScore = 0;
var oilScore = 0;
var mixScore = 0;
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

    if (userAnswer === questions[questionIndex]['normal']) {
      normalScore += 1;
    }

    if (userAnswer === questions[questionIndex]['dry']) {
      dryScore += 1;
    }

    if (userAnswer === questions[questionIndex]['oil']) {
      oilScore += 1;
    }

    if (userAnswer === questions[questionIndex]['mix']) {
      mixScore += 1;
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

  if (normalScore === 1 && dryScore === 1 && oilScore === 1 && mixScore === 1 && hardScore === 1 || hardScore === Math.max(hardScore, oilScore, dryScore, normalScore, mixScore)) {
    var resultText = resultHtml.replace('%summary%', 'Трудно определить').replace('%about%', 'Ваши ответы оказались противоречивыми, однозначно сложно определить ваш тип кожи, постарайтесь перепройти тест. Помните, что важно подобрать подходящие продукты для очищения, чтобы достичь оптимального состояния кожи и сохранить ее здоровье. По этой причине необходимо знать свой тип кожи.');
    nameQuestion.innerHTML = resultText;
    var but = buttonHtml.replace('%next%', "Пройти тест еще раз");
    button.innerHTML = but;
    button.addEventListener('click', function () {
      history.go();
    });
  } else {
    if (dryScore === Math.max(hardScore, oilScore, dryScore, normalScore, mixScore)) {
      var _resultText = resultHtml.replace('%summary%', 'У вас сухая кожа').replace('%about%', 'Сухая кожа - это состояние, при котором кожа теряет естественную влагу и масла, что делает ее более склонной к шелушению, раздражению и появлению морщин. Это состояние может быть вызвано различными факторами, включая генетическую предрасположенность, климатические условия (холодный воздух, низкая влажность), частое использование мыла и других агрессивных средств для ухода за кожей, недостаток питьевого режима, неправильное питание и некоторые заболевания.');

      nameQuestion.innerHTML = _resultText;
    }

    if (normalScore === Math.max(hardScore, oilScore, dryScore, normalScore, mixScore)) {
      var _resultText2 = resultHtml.replace('%summary%', 'У вас нормальный тип кожи').replace('%about%', 'Нормальный тип кожи считается идеальным, так как он обладает оптимальным балансом масла и влаги. Кожа выглядит здоровой, упругой, гладкой и имеет ровный тон. Поры не слишком расширены, а текстура кожи обычно мягкая и упругая. Лица с нормальным типом кожи обычно не испытывают проблем с жирностью или сухостью кожи. Они могут использовать широкий спектр косметических продуктов без особых ограничений. Однако, даже при наличии нормального типа кожи важно ежедневно ухаживать за ней, очищать, увлажнять и защищать от вредных воздействий окружающей среды.');

      nameQuestion.innerHTML = _resultText2;
    }

    if (oilScore === Math.max(hardScore, oilScore, dryScore, normalScore, mixScore)) {
      var _resultText3 = resultHtml.replace('%summary%', 'У вас жирная кожа').replace('%about%', 'Жирная кожа характеризуется избыточным выделением себума, естественного масла, которое производится кожей. Это приводит к блеску, расширенным порам и склонности к появлению угрей и прыщей. Жирная кожа может быть обусловлена генетическими факторами, гормональными изменениями, стрессом, неправильным питанием или некорректным уходом. Для ухода за жирной кожей рекомендуется использовать специальные очищающие средства, которые помогут удалить излишки себума и очистить поры. Также важно увлажнять кожу, чтобы предотвратить пересушивание и избежать обратной реакции организма — увеличения выработки жира.');

      nameQuestion.innerHTML = _resultText3;
    }

    if (mixScore === Math.max(hardScore, oilScore, dryScore, normalScore, mixScore)) {
      var _resultText4 = resultHtml.replace('%summary%', 'У вас комбинированная кожа').replace('%about%', 'Комбинированная кожа характеризуется смешанным типом: сухие участки на щеках и вокруг глаз, а жирные - в области лба, носа и подбородка (так называемая "T-зона"). Этот тип кожи может быть вызван генетикой, гормональными изменениями, неправильным уходом или внешними факторами. Уход за комбинированной кожей требует баланса между увлажнением сухих участков и контролем жирности в T-зоне. Важно выбирать продукты, которые не будут пересушивать кожу на щеках, но при этом не будут усиливать выработку себума в T-зоне.');

      nameQuestion.innerHTML = _resultText4;
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