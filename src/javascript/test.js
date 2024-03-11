const questions = [
    {
        number: "1/5",
        question: "Какие ощущения возникают на вашей коже после очищения?",
        answers: ["Нет дискомфорта, кожа сияет", "Ощущается сухость, дискомфорт", "Через 10-15 минут появляется жирный блеск", "Появляется чрезмерный блеск лица в Т-зоне, а область щек остается матовой", "Затрудняюсь ответить"],
        normal: 1,
        dry: 2,
        oil: 3,
        mix: 4,
        hard: 5
    },
    {
        number: "2/5",
        question: "Что происходит с кожей, если пренебречь ее увлажнением?",
        answers: ["Без увлажняющего кремя кожа выглядит свежо", "Кожа стягивается, выглядит сухой и безжизненной", "Жирный блеск усиливается", "Жирный блеск лица усиливается в Т-зоне, а область щек остается матовой", "Затрудняюсь ответить"],
        normal: 1,
        dry: 2,
        oil: 3,
        mix: 4,
        hard: 5
    },
    {
        number: "3/5",
        question: "Как вы оцениваете состояние пор и высыпаний?",
        answers: ["Поры не заметны, высыпания практически не появляются", "Поры почти не заметны, высыпания редки", "Поры в основном расширенные, часто появляются акне, сыпь, черные точки", "Поры расширены только в T-зоне, в U-зоне пор нет или они не заметны", "Затрудняюсь ответить"],
        normal: 1,
        dry: 2,
        oil: 3,
        mix: 4,
        hard: 5
    },
    {
        number: "4/5",
        question: "Реагирует ли кожа на неправильное питание, вредные привычки и другие внешние факторы?",
        answers: ["Нет, не реагирует", "Возникает сухость и раздражение кожи", "Появляется акне и жирный блеск", "Появляются высыпания в области лба, носа и подбородка", "Затрудняюсь ответить"],
        normal: 1,
        dry: 2,
        oil: 3,
        mix: 4,
        hard: 5
    },
    {
        number: "5/5",
        question: "Через 30 минут после очищения кожи приложите на 15 секунд матирующую или бумажную салфетку. Опишите ее состояние",
        answers: ["Нет следов", "На салфетке следов нет, но на коже остались покраснения", "На салфетке немного появился себум", "На салфетке появляются большие жирные пятна", "Затрудняюсь ответить"],
        normal: 1,
        dry: 2,
        oil: 3,
        mix: 4,
        hard: 5
    }
]

// находим текст
const numberQuestion = document.querySelector(".ArticleBodyText");
const nameQuestion = document.querySelector(".ArticleH3");
const answersList = document.querySelector(".A_ResponseList");
const button = document.querySelector(".A_PrimaryButton");

//переменные для определения ответа
let normalScore = 0;
let dryScore = 0;
let oilScore = 0;
let mixScore = 0;
let hardScore = 0;
let questionIndex = 0; // индекс текущего вопроса

// очищаем и меняем текст
function clearText() {
    nameQuestion.innerHTML = '';
    answersList.innerHTML = '';
    numberQuestion.innerHTML = '';
}
function changeText() {
    // номер
    const numberHtml = '<div class="A_ArticleBodyText ArticleBodyText">%1/5%</div>';
    const num = numberHtml.replace('%1/5%',questions[questionIndex]['number']);
    numberQuestion.innerHTML = num;

    // заголовок
    const nameHtml = '<div class="A_ArticleH3 ArticleH3">%name%</div>';
    const name = nameHtml.replace('%name%',questions[questionIndex]['question']);
    nameQuestion.innerHTML = name;
    
    // варианты ответа
    for ([index,item] of questions[questionIndex]['answers'].entries())
    {
        const questionHtml = 
        `<div class="A_Response">
            <input value ="%number%" type="radio" name="answer">
            <label class = "A_ResponseText" for="radio">%answer%</label>
        </div>`
        let answer = questionHtml.replace('%answer%', item).replace('%number%', index+1);
        answersList.innerHTML += answer;
    }
}

function checkAnswer() {
    button.addEventListener('click', () => {
        const checkedRadio = answersList.querySelector('input:checked');
        // если ответа нет
        if (!checkedRadio) {
            return
        }

        // если ответ есть
        const userAnswer = parseInt(checkedRadio.value);
        if (userAnswer === questions[questionIndex]['normal']) {
            normalScore +=1;
        }
        if (userAnswer === questions[questionIndex]['dry']) {
            dryScore +=1;
        }
        if (userAnswer === questions[questionIndex]['oil']) {
            oilScore +=1;
        }
        if (userAnswer === questions[questionIndex]['mix']) {
            mixScore +=1;
        }
        if (userAnswer === questions[questionIndex]['hard']) {
            hardScore +=1;
        }
        if (questionIndex != questions.length - 1) {
            questionIndex += 1;
            clearText();
            changeText();
        }
        else {
            clearText();
            result();
        }
    })

}
function result()
{
    const resultHtml = 
    `<div class="A_ArticleBodyText">Ваш результат:</div>
    <div class="A_ArticleH3">%summary%</div>
    <div class="A_ArticleBodyText">%about%</div>`;
    const buttonHtml = 
    `%next%
    <div class="Q_Arrow ArrowWhite"></div>`;
    if ((normalScore === 1 && dryScore === 1 && oilScore === 1 && mixScore === 1 && hardScore === 1) || (hardScore === Math.max(hardScore, oilScore, dryScore, normalScore, mixScore)))
    {
        const resultText = resultHtml.replace('%summary%', 'Трудно определить').replace('%about%', 'Ваши ответы оказались противоречивыми, однозначно сложно определить ваш тип кожи, постарайтесь перепройти тест. Помните, что важно подобрать подходящие продукты для очищения, чтобы достичь оптимального состояния кожи и сохранить ее здоровье. По этой причине необходимо знать свой тип кожи.');
        nameQuestion.innerHTML = resultText;
        const but = buttonHtml.replace('%next%', "Пройти тест еще раз");
        button.innerHTML = but;
        button.addEventListener('click', () => {
            history.go()
        })
    }
    else {
        if (dryScore === Math.max(hardScore, oilScore, dryScore, normalScore, mixScore)){
            const resultText = resultHtml.replace('%summary%', 'У вас сухая кожа').replace('%about%', 'Сухая кожа - это состояние, при котором кожа теряет естественную влагу и масла, что делает ее более склонной к шелушению, раздражению и появлению морщин. Это состояние может быть вызвано различными факторами, включая генетическую предрасположенность, климатические условия (холодный воздух, низкая влажность), частое использование мыла и других агрессивных средств для ухода за кожей, недостаток питьевого режима, неправильное питание и некоторые заболевания.');
            nameQuestion.innerHTML = resultText;    
        }
        if (normalScore === Math.max(hardScore, oilScore, dryScore, normalScore, mixScore)){
            const resultText = resultHtml.replace('%summary%', 'У вас нормальный тип кожи').replace('%about%', 'Нормальный тип кожи считается идеальным, так как он обладает оптимальным балансом масла и влаги. Кожа выглядит здоровой, упругой, гладкой и имеет ровный тон. Поры не слишком расширены, а текстура кожи обычно мягкая и упругая. Лица с нормальным типом кожи обычно не испытывают проблем с жирностью или сухостью кожи. Они могут использовать широкий спектр косметических продуктов без особых ограничений. Однако, даже при наличии нормального типа кожи важно ежедневно ухаживать за ней, очищать, увлажнять и защищать от вредных воздействий окружающей среды.');
            nameQuestion.innerHTML = resultText;    
        }
        if (oilScore === Math.max(hardScore, oilScore, dryScore, normalScore, mixScore)){
            const resultText = resultHtml.replace('%summary%', 'У вас жирная кожа').replace('%about%', 'Жирная кожа характеризуется избыточным выделением себума, естественного масла, которое производится кожей. Это приводит к блеску, расширенным порам и склонности к появлению угрей и прыщей. Жирная кожа может быть обусловлена генетическими факторами, гормональными изменениями, стрессом, неправильным питанием или некорректным уходом. Для ухода за жирной кожей рекомендуется использовать специальные очищающие средства, которые помогут удалить излишки себума и очистить поры. Также важно увлажнять кожу, чтобы предотвратить пересушивание и избежать обратной реакции организма — увеличения выработки жира.');
            nameQuestion.innerHTML = resultText;    
        }
        if (mixScore === Math.max(hardScore, oilScore, dryScore, normalScore, mixScore)){
            const resultText = resultHtml.replace('%summary%', 'У вас комбинированная кожа').replace('%about%', 'Комбинированная кожа характеризуется смешанным типом: сухие участки на щеках и вокруг глаз, а жирные - в области лба, носа и подбородка (так называемая "T-зона"). Этот тип кожи может быть вызван генетикой, гормональными изменениями, неправильным уходом или внешними факторами. Уход за комбинированной кожей требует баланса между увлажнением сухих участков и контролем жирности в T-зоне. Важно выбирать продукты, которые не будут пересушивать кожу на щеках, но при этом не будут усиливать выработку себума в T-зоне.');
            nameQuestion.innerHTML = resultText;    
        }
        const but = buttonHtml.replace('%next%', "Пройти другие тесты");
        button.innerHTML = but;
        button.addEventListener('click', () => {
            window.location.href = 'index.html';
        })
    }
    
    
}

document.addEventListener('DOMContentLoaded', () => {
    clearText()
    changeText()
    checkAnswer()
})



