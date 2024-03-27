const questions = [
    {
        number: "1/5",
        question: "Сколько стаканов чистой воды вы выпиваете?",
        answers: ["30 мл на кг веса, половину из которых получаю из пищи", "Постоянно держу рядом с собой бутылку или стакан с водой", "Мало пью чистую воду", "Затрудняюсь ответить"],
        one: 1,
        one: 2,
        two: 3,
        hard: 4
    },
    {
        number: "2/5",
        question: "Пьете ли вы кофе или крепкий чай?",
        answers: ["Нет или очень редко", "Только по утрам", "Несколько чашек в день", "Затрудняюсь ответить"],
        one: 1,
        two: 2,
        three: 3,
        hard: 4
    },
    {
        number: "3/5",
        question: "Как ваша кожа отзывается на холодный и сухой климат?",
        answers: ["Появляются покраснения и шелушения", "Бывает легкое шелушение, мороз пощипывает", "Слабо реагирует", "Затрудняюсь ответить"],
        one: 1,
        two: 2,
        three: 3,
        hard: 4
    },
    {
        number: "4/5",
        question: "На какую кожу наносите увлажняющие средства?",
        answers: ["На слегка влажную кожу", "Когда как", "На абсолютно сухую кожу", "Затрудняюсь ответить"],
        one: 1,
        two: 2,
        three: 3,
        hard: 5
    },
    {
        number: "5/5",
        question: "Попробуйте слегка прищемить кожу ниже скулы. Как быстро она восстанавливается?",
        answers: ["Моментально", "Постепенно разгладилась", "При зажиме образовалось множество морщинок, которые впоследствии разгладились", "Затрудняюсь ответить"],
        one: 1,
        two: 2,
        three: 3,
        hard: 5
    }
]

// находим текст
const numberQuestion = document.querySelector(".ArticleBodyText");
const nameQuestion = document.querySelector(".ArticleH3");
const answersList = document.querySelector(".A_ResponseList");
const button = document.querySelector(".A_PrimaryButton");

//переменные для определения ответа
let oneScore = 0;
let twoScore = 0;
let threeScore = 0;
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
        if (userAnswer === questions[questionIndex]['one']) {
            oneScore +=1;
        }
        if (userAnswer === questions[questionIndex]['two']) {
            twoScore +=1;
        }
        if (userAnswer === questions[questionIndex]['three']) {
            threeScore +=1;
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
    if ((oneScore === 1 && twoScore === 1 && threeScore === 1 && hardScore === 1) || (hardScore === Math.max(hardScore, threeScore, twoScore, oneScore)))
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
        if (twoScore === Math.max(hardScore, threeScore, twoScore, oneScore)|| (threeScore === Math.max(hardScore, threeScore, twoScore, oneScore))){
            const resultText = resultHtml.replace('%summary%', 'У вас немного сухая кожа').replace('%about%', 'Ваша кожа в целом не слишком страдает от сухости, но недостаток влаги ощущается. Пересмотрите питьевой режим и уход. Добавьте в свой ежедневный ритуал гидролаты, увлажняющие тоник и сыворотку для лица. Вы можете использовать гидролаты как тоник для лица, средство для снятия макияжа или просто в качестве освежающего спрея в течение дня.');
            nameQuestion.innerHTML = resultText;    
        }
        if (oneScore === Math.max(hardScore, threeScore, twoScore, oneScore)){
            const resultText = resultHtml.replace('%summary%', 'У вас увлажненная кожа').replace('%about%', 'Вам хватает влаги и насыщенных аминокислот. Вы можете дополнить уход гидролатами. Для жирной и проблемной кожи рекомендуется использовать гидролат «Шалфей». Он поможет балансировать кожный жир и сужать поры, а также обладает антисептическими свойствами, что помогает бороться с воспалениями и акне. Для сухой и чувствительной кожи подойдет гидролат «Липа». Он увлажняет и смягчает кожу, снимает раздражение и улучшает ее общее состояние. Вы можете использовать гидролаты как тоник для лица, средство для снятия макияжа или просто в качестве освежающего спрея в течение дня.');
            nameQuestion.innerHTML = resultText;    
        }
        if (threeScore === Math.max(hardScore, threeScore, twoScore, oneScore)){
            const resultText = resultHtml.replace('%summary%', 'У вас обезвоживание кожи').replace('%about%', 'Кожа испытывает дефицит увлажнения, что проявляется в стянутости, шелушении, красноте и мелких морщинках. Для решения этой проблемы необходимо принять серьезные меры. Рекомендуется уделить внимание питьевому режиму и диете, а также использовать уход с акцентом на интенсивное увлажнение. Добавление в уход увлажняющей и мягкой пенки для умывания, тоника, гидролатов и концентрата масел раз в неделю поможет насытить кожу влагой и сохранить ее от потери влаги.');
            nameQuestion.innerHTML = resultText;    
        }
        const but = buttonHtml.replace('%next%', "Пройти другие тесты");
        button.innerHTML = but;
        button.addEventListener('click', () => {
            window.location.href = '../activity.html';
        })
    }
    
    
}

document.addEventListener('DOMContentLoaded', () => {
    clearText()
    changeText()
    checkAnswer()
})



