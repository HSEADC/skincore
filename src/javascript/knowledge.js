const questions = [
    {
        number: "1/5",
        question: "Какое из перечисленных масел на самом деле представляет собой воск?",
        answers: ["Кокосовое масло", "Масло шиповника", "Масло жожоба", "Облепиховое масло", "Миндальное масло"],
        wrong: 1,
        wrong: 2,
        right: 3,
        wrong: 4,
        wrong: 5
    },
    {
        number: "2/5",
        question: "Что значит термин «некомедогенно»?",
        answers: ["Все ингредиенты средства являются органическими", "Продукт не закупоривает поры", "Средство не раздражает чувствительную кожу", "Средство является гипоаллергенным", "Средство не сушит кожу"],
        wrong: 1,
        right: 2,
        wrong: 3,
        wrong: 4, 
        wrong: 5
    },
    {
        number: "3/5",
        question: "Как правильно наносить крем вокруг глаз?",
        answers: ["Втирать средство круговыми движениями", "Массирующими движениями наносить средство ватным диском", "Мягко наносить средство безымянным пальцем", "Наносить крем только на нижнее веко", "Крем не нужен"],
        wrong: 1,
        wrong: 2,
        right: 3,
        wrong: 4,
        wrong: 5
    },
    {
        number: "4/5",
        question: "Когда необходимо наносить средство с SPF?",
        answers: ["Каждый раз, выходя на улицу дольше, чем на 15 минут", "Только летом и весной", "Только в солнечную погоду", "Каждый день", "Только на пляже при загаре"],
        wrong: 1,
        wrong: 2,
        wrong: 3,
        right: 4,
        wrong: 5
    },
    {
        number: "5/5",
        question: "Какой правильный порядок нанесения этих средств?",
        answers: ["Очищающее средство, сыворотка, тоник, увлажняющее средство", "Сыворотка, очищающее средство, тоник, увлажняющее средство.", "Очищающее средство, тоник, сыворотка, увлажняющее средство", "Очищающее средство, сыворотка, увлажняющее средство, тоник", "Нет определенного порядка, главное использовать все средства"],
        wrong: 1,
        wrong: 2,
        right: 3,
        wrong: 4,
        wrong: 5
    }
]

// находим текст
const numberQuestion = document.querySelector(".ArticleBodyText");
const nameQuestion = document.querySelector(".ArticleH3");
const answersList = document.querySelector(".A_ResponseList");
const button = document.querySelector(".A_PrimaryButton");

//переменные для определения ответа
let wrongScore = 0;
let rightScore = 0;
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
        if (userAnswer === questions[questionIndex]['right']) {
            rightScore +=1;
        }
        else {
            wrongScore +=1;
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
    if (wrongScore > 3){
        const resultText = resultHtml.replace('%summary%', 'Вы еще новичок!').replace('%about%', `Вы еще совсем мало знаете про правильную и эффективную рутину, читайте больше наших статей!
        Правильные ответы:
        1. Масло жожоба относится к воскам, хотя и выглядит как растительное масло.
        2. «Некомедогенно» значит не закупоривает поры, это особенно подойдет для тех, кто страдает от акне.
        3. Кожа вокруг глаз нежная, поэтому лучше наносить продукт безымянным пальцем — самым слабым.
        4. SPF необходимо наносить ежедневно, так как кожа всегда получает УФ-излучение
        5. Сначала вы умываетесь, затем наносите тоник для подготовки кожи к дальнейшему уходу, далее сыворотку, затем — увлажняющее средство: оно как более насыщенный и плотный продукт завершает процедуру ухода.`);
        nameQuestion.innerHTML = resultText;    
    }
    else {
        const resultText = resultHtml.replace('%summary%', 'Вы настоящий эксперт!').replace('%about%', `Поздравляю вы очень хорошо знаете уходовые средства. Правильные ответы:
        1. Масло жожоба относится к воскам, хотя и выглядит как растительное масло.
        2. «Некомедогенно» значит не закупоривает поры, это особенно подойдет для тех, кто страдает от акне.
        3. Кожа вокруг глаз нежная, поэтому лучше наносить продукт безымянным пальцем — самым слабым.
        4. SPF необходимо наносить ежедневно, так как кожа всегда получает УФ-излучение
        5. Сначала вы умываетесь, затем наносите тоник для подготовки кожи к дальнейшему уходу, далее сыворотку, затем — увлажняющее средство: оно как более насыщенный и плотный продукт завершает процедуру ухода.`);
        nameQuestion.innerHTML = resultText;    
    }
    const but = buttonHtml.replace('%next%', "Пройти другие тесты");
    button.innerHTML = but;
    button.addEventListener('click', () => {
        window.location.href = '../activity.html';
    })
    
    
}

document.addEventListener('DOMContentLoaded', () => {
    clearText()
    changeText()
    checkAnswer()
})



