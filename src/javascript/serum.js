const questions = [
    {
        number: "1/5",
        question: "Укажите ваш возраст",
        answers: ["До 25 лет", "26-35 лет", "36-45 лет", "Старше 46 лет"],
        bamboo: 1,
        yuzu: 2,
        pepper: 3,
        ginseng: 4,
    },
    {
        number: "2/5",
        question: "Какие проблемы с кожей вас наиболее беспокоят?",
        answers: ["Кожа выглядит тусклой и безжизненной", "Кожа стягивается, выглядит сухой", "Беспокоят возрастные изменения", "Волнуют расширенные поры"],
        pepper: 1,
        bamboo: 2,
        ginseng: 3,
        yuzu: 4,
    },
    {
        number: "3/5",
        question: "Как вы оцениваете состояние своей кожи?",
        answers: ["Кожа сухая и чувствительная, подвержена шелушениям и стянутостью", "Кожа жирная, склонна к жирному блеску, есть расширенные поры и акне", "Кожа комбинированная, сочетаются участки с разными типами", "Нормальная кожа, без явных недостатков"],
        ginseng: 1,
        pepper: 2,
        yuzu: 3,
        bamboo: 4,
    },
    {
        number: "4/5",
        question: "Чего именно не хватает вашей коже?",
        answers: ["Питания", "Энергии", "Увлажнения", "Сияния"],
        bamboo: 1,
        pepper: 2,
        ginseng: 3,
        yuzu: 4,
    },
    {
        number: "5/5",
        question: "Какого эффекта вы ждете после применения сыворотки",
        answers: ["Эффект сияния и свежести, без «тяжести» на лице", "Избавление от возрастных изменений", "Эффект увлажнения и питания на каждый день", "Эффект более ровной кожи с естественным сиянием"],
        bamboo: 1,
        ginseng: 2,
        yuzu: 3,
        pepper: 4,
    }
]

// находим текст
const numberQuestion = document.querySelector(".ArticleBodyText");
const nameQuestion = document.querySelector(".ArticleH3");
const answersList = document.querySelector(".A_ResponseList");
const button = document.querySelector(".A_PrimaryButton");

//переменные для определения ответа
let bambooScore = 0;
let yuzuScore = 0;
let pepperScore = 0;
let ginsengScore = 0;
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
        if (userAnswer === questions[questionIndex]['bamboo']) {
            bambooScore +=1;
        }
        if (userAnswer === questions[questionIndex]['yuzu']) {
            yuzuScore +=1;
        }
        if (userAnswer === questions[questionIndex]['pepper']) {
            pepperScore +=1;
        }
        if (userAnswer === questions[questionIndex]['ginseng']) {
            ginsengScore +=1;
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
    
    if (yuzuScore === Math.max(pepperScore, yuzuScore, bambooScore, ginsengScore)){
        const resultText = resultHtml.replace('%summary%', 'Ваша сыворотка: с Юзу').replace('%about%', 'Юзу сыворотка — это продукт по уходу за кожей, содержащий экстракт юзу, цитрусового фрукта, произрастающего в Восточной Азии. Юдзу богат витамином С и антиоксидантами, что делает его популярным ингредиентом в средствах по уходу за кожей благодаря его осветляющим и омолаживающим свойствам.');
        nameQuestion.innerHTML = resultText;    
    }
    if (bambooScore === Math.max(pepperScore, yuzuScore, bambooScore, ginsengScore)){
        const resultText = resultHtml.replace('%summary%', 'Ваша сыворотка: с бамбуком').replace('%about%', 'Сыворотка с экстрактом бамбука звучит как отличное средство для увлажнения кожи! Экстракт бамбука известен своими увлажняющими и успокаивающими свойствами, которые могут помочь сухой или обезвоженной коже. Текстура, которая превращается в воду при контакте с кожей, позволяет легко и быстро наносить сыворотку, обеспечивая мгновенное увлажнение. Формула на 90% из натуральных ингредиентов также звучит привлекательно, так как натуральные компоненты могут быть более мягкими и дружественными к коже, особенно для тех, у кого чувствительная или склонная к раздражениям кожа.');
        nameQuestion.innerHTML = resultText;    
    }
    if (pepperScore === Math.max(pepperScore, yuzuScore, bambooScore, ginsengScore)){
        const resultText = resultHtml.replace('%summary%', 'Ваша сыворотка: с красным перцем').replace('%about%', 'Красный перец звучит как удивительное средство для оживления кожи! Отшелушивающие компоненты природного происхождения могут помочь удалить омертвевшие клетки кожи и стимулировать естественное обновление клеток, что приведет к более ровной и гладкой текстуре кожи. Это особенно полезно для тех, кто страдает от неровного тонуса кожи или наличия мелких морщин. Невесомая жидкая текстура сыворотки обещает быстрое впитывание и мгновенное ощущение свежести на коже. Это может быть отличным способом «зарядить» кожу и придать ей энергии для нового дня.');
        nameQuestion.innerHTML = resultText;    
    }
    if (ginsengScore === Math.max(pepperScore, yuzuScore, bambooScore, ginsengScore)){
        const resultText = resultHtml.replace('%summary%', 'Ваша сыворотка: с женьшенем').replace('%about%', 'Женьшень звучит как отличное средство для борьбы с признаками старения кожи! Женьшень известен своими антивозрастными свойствами, способствующими уменьшению морщин и улучшению упругости кожи. Комплекс женьшеня и пептидов может помочь стимулировать производство коллагена и эластина, что в свою очередь приводит к более гладкой и упругой коже. Пребиотик в формуле сыворотки также играет важную роль в поддержании здоровой микрофлоры кожи, что способствует улучшению ее общего состояния и увлажненности. Регулярное использование сыворотки с пребиотиком может помочь вашей коже выглядеть более молодой, упругой и здоровой.');
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
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            //     
                            //             "answersView": "1-column",
                            //             "description": "",
                            //             "embed": null,
                            //             "imageBlock": null,
                            //             "text": "\u003Cp\u003EУкажите ваш возраст.\u003C\u002Fp\u003E",
                            //             "uid": "1a10ab07-33a8-438d-a182-f7523c14ebe2"
                            //         }, {
                            //             "answers": [{
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["pepper"],
                            //                 "text": "\u003Cp\u003EТусклость.\u003C\u002Fp\u003E",
                            //                 "uid": "2a67ca87-962e-4933-aed9-41370e997e3e"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["bamboo"],
                            //                 "text": "\u003Cp\u003EСухость.\u003C\u002Fp\u003E",
                            //                 "uid": "21557163-eda6-405b-a841-f3275e12de5e"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["ginseng"],
                            //                 "text": "\u003Cp\u003EВозрастные изменения.\u003C\u002Fp\u003E",
                            //                 "uid": "190af494-6ff8-432d-8a2d-3f9ef8d4ddb7"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["yuzu"],
                            //                 "text": "\u003Cp\u003EРасширенные поры.\u003C\u002Fp\u003E",
                            //                 "uid": "67bfd75b-5fec-44e2-99a4-1da7600d9c37"
                            //             }],
                            //             "answersView": "1-column",
                            //             "description": "",
                            //             "embed": null,
                            //             "imageBlock": null,
                            //             "text": "\u003Cp\u003EКакие особенности кожи вас больше всего беспокоят?\u003C\u002Fp\u003E",
                            //             "uid": "f08398a9-27a6-4e80-91ed-6f651b3f752b"
                            //         }, {
                            //             "answers": [{
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["ginseng"],
                            //                 "text": "\u003Cp\u003EСухая и чувствительная. Кожа отличается шелушениями, ощущением стянутости и недостатком увлажнения.\u003C\u002Fp\u003E",
                            //                 "uid": "03ea9538-77d8-4cd8-924a-ddea9f2e7a00"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["pepper"],
                            //                 "text": "\u003Cp\u003EЖирная и проблемная. Кожа склонна к блеску, имеет неровную текстуру и отличается повышенной выработкой кожного сала. Могут появляться высыпания, расширенные поры и акне.\u003C\u002Fp\u003E",
                            //                 "uid": "44b66dc4-a138-4fdc-85b2-fdc68d15bb95"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["yuzu"],
                            //                 "text": "\u003Cp\u003EКомбинированная. Сочетает в себе участки с разными типами. Как правило, кожа более жирная в Т-образной зоне и сухая&nbsp;— на щеках.\u003C\u002Fp\u003E",
                            //                 "uid": "bd320b2e-79d3-4b10-a2cc-65cfcaf6c21f"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["bamboo"],
                            //                 "text": "\u003Cp\u003EНормальная. Сбалансированный тип кожи без явных недостатков. Достаточно увлажнена, не отличается жирным блеском или излишней сухостью.\u003C\u002Fp\u003E",
                            //                 "uid": "a86e1538-8b52-4d5d-87b3-fc92973955cb"
                            //             }],
                            //             "answersView": "1-column",
                            //             "description": "",
                            //             "embed": null,
                            //             "imageBlock": null,
                            //             "text": "\u003Cp\u003EКак вы опишете свою кожу?\u003C\u002Fp\u003E",
                            //             "uid": "063220bf-c365-4c45-a557-488474ce582f"
                            //         }, {
                            //             "answers": [{
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["bamboo"],
                            //                 "text": "\u003Cp\u003EПитания.\u003C\u002Fp\u003E",
                            //                 "uid": "b8cecc05-422f-41fc-a65f-63cb56ba62ce"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["pepper"],
                            //                 "text": "\u003Cp\u003EЭнергии.\u003C\u002Fp\u003E",
                            //                 "uid": "a46884b8-fc5a-409d-b611-a07d5a831395"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["ginseng"],
                            //                 "text": "\u003Cp\u003EУвлажнения.\u003C\u002Fp\u003E",
                            //                 "uid": "1a3d4982-1019-4207-8e09-5797791343f5"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["yuzu"],
                            //                 "text": "\u003Cp\u003EСияния.\u003C\u002Fp\u003E",
                            //                 "uid": "54ef178e-bc43-4c3d-820f-1985193808ce"
                            //             }],
                            //             "answersView": "1-column",
                            //             "description": "",
                            //             "embed": null,
                            //             "imageBlock": null,
                            //             "text": "\u003Cp\u003EЧего не хватает вашей коже?\u003C\u002Fp\u003E",
                            //             "uid": "347b88fc-8e9c-4971-8aa0-fcbdabad5bbf"
                            //         }, {
                            //             "answers": [{
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["bamboo"],
                            //                 "text": "\u003Cp\u003EХочу, чтобы моя кожа сияла, была напитана и свежа, без ощущения «тяжести» на лице. В поисках идеального средства на каждый день с пролонгированным эффектом.\u003C\u002Fp\u003E",
                            //                 "uid": "65ab7e31-0563-4343-8410-0ac98b2dec7a"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["ginseng"],
                            //                 "text": "\u003Cp\u003EХочу избавиться от возрастных изменений кожи&nbsp;— мелких морщинок и тусклости кожи. Мечтаю об ощущении свежести и упругости.\u003C\u002Fp\u003E",
                            //                 "uid": "01a8cd58-ff5c-48d9-83fb-c85c0e84b9e4"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["yuzu"],
                            //                 "text": "\u003Cp\u003EХочу увлажнения и питания на целый день. Пусть моя кожа будет выглядеть молодо, подтянуто и была защищена от вредного воздействия окружающей среды.\u003C\u002Fp\u003E",
                            //                 "uid": "1881bbd0-f8b4-47e9-a841-32b728c073dc"
                            //             }, {
                            //                 "description": "",
                            //                 "imageBlock": null,
                            //                 "points": 0,
                            //                 "results": ["pepper"],
                            //                 "text": "\u003Cp\u003EХочу более ровную и гладкую кожу с естественным эффектом сияния.\u003C\u002Fp\u003E",
                            //                 "uid": "5d3f5eb3-a30f-41ca-a7a8-fbfc15f1fe26"
                            //             }],
                            //             "answersView": "1-column",
                            //             "description": "",
                            //             "embed": null,
                            //             "imageBlock": null,
                            //             "text": "\u003Cp\u003EКакого эффекта от сыворотки вы хотите добиться?\u003C\u002Fp\u003E",
                            //             "uid": "6afbf3d3-8354-4d4a-91a3-31e703f99a12"
                            //         }],
                            //         "questionsPerPage": 1,
                            //         "results": [{
                            //             "description": "\u003Cp\u003E\u003Cstrong\u003EЧто нужно вашей коже: \u003C\u002Fstrong\u003Eинтенсивное увлажнение и сияние.\u003C\u002Fp\u003E\u003Cp\u003EПожалуй, нет более эффективного средства из коллекции Erborian, чем уникальная \u003Cstrong\u003EБамбук Суперсыворотка\u003C\u002Fstrong\u003E. Этот продукт содержит сразу два вида гиалуроновой кислоты: низкомолекулярная для глубокого увлажнения и высокомолекулярная для разглаживания кожи и предотвращения обезвоживания. В качестве дополнительных компонентов&nbsp;— бетаин, который сохраняет влагу, а также инулин, который поддержит баланс и делает продукт идеальным для ежедневного ухода. Сыворотка наполняет кожу влагой на межклеточном уровне и дарит ощущение комфорта в течение дня.&nbsp;\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EРезультат:\u003C\u002Fstrong\u003E кожа глубоко увлажнена, выглядит свежей и сияющей.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EКак наносить:\u003C\u002Fstrong\u003E перед кремом утром и вечером на слегка влажную кожу.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EГде купить:\u003C\u002Fstrong\u003E \u003Cu\u003E\u003Ca href=\"http:\u002F\u002Fpubads.g.doubleclick.net\u002Fgampad\u002Fclk?id=5862273486&amp;iu=\u002F81006599\u002Fhmiru-elle\u002Fcount\" rel=\"noopener nofollow\" target=\"_blank\"\u003Eerborian.ru\u003C\u002Fa\u003E\u003C\u002Fu\u003E\u003C\u002Fp\u003E",
                            //             "embed": null,
                            //             "imageBlock": {
                            //                 "alt": "",
                            //                 "caption": "",
                            //                 "description": "",
                            //                 "height": 465,
                            //                 "meta": {
                            //                     "origin": "",
                            //                     "style": ""
                            //                 },
                            //                 "url": "https:\u002F\u002Fn1s2.hsmedia.ru\u002Fb3\u002Fe9\u002Fdc\u002Fb3e9dcb14be7f6f210363115e292901e\u002F1920x1440_0xac120003_2025986851639607454.jpeg",
                            //                 "watermarkId": 0,
                            //                 "width": 620
                            //             },
                            //             "pointsMax": 0,
                            //             "pointsMin": 0,
                            //             "text": "Ваша сыворотка: Бамбук Суперсыворотка от Erborian",
                            //             "uid": "bamboo"
                            //         }, {
                            //             "description": "\u003Cp\u003E\u003Cstrong\u003EЧто нужно вашей коже:\u003C\u002Fstrong\u003E питание и защита.\u003C\u002Fp\u003E\u003Cp\u003EОдин из главных компонентов \u003Cstrong\u003EЮзу Суперсыворотки\u003C\u002Fstrong\u003E&nbsp;— витамин C, известный мощными антиоксидантными свойствами. Экстракт плодов юзу содержит керамиды C24, которые значительно укрепляют барьерные функции кожи и помогает защитить ее от негативного воздействия окружающей среды. А сверхлегкая текстура, напоминающая свежевыжатый сок плодов юзу, тонизирует, питает, борется с сухостью кожи и делает ваш ежедневный уход максимально простым, быстрым и эффективным.&nbsp;\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EРезультат:\u003C\u002Fstrong\u003E красивая, сияющая здоровьем кожа, которой не страшны ежедневные испытания мегаполиса.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EКак наносить:\u003C\u002Fstrong\u003E перед кремом утром и вечером на слегка влажную кожу.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EГде купить:\u003C\u002Fstrong\u003E \u003Cu\u003E\u003Ca href=\"http:\u002F\u002Fpubads.g.doubleclick.net\u002Fgampad\u002Fclk?id=5862273483&amp;iu=\u002F81006599\u002Fhmiru-elle\u002Fcount\" rel=\"noopener nofollow\" target=\"_blank\"\u003Eerborian.ru\u003C\u002Fa\u003E\u003C\u002Fu\u003E\u003C\u002Fp\u003E",
                            //             "embed": null,
                            //             "imageBlock": {
                            //                 "alt": "",
                            //                 "caption": "",
                            //                 "description": "",
                            //                 "height": 465,
                            //                 "meta": {
                            //                     "origin": "",
                            //                     "style": ""
                            //                 },
                            //                 "url": "https:\u002F\u002Fn1s1.hsmedia.ru\u002Fc5\u002F52\u002F81\u002Fc55281a4c95fbd88605812a57743a1e6\u002F1920x1440_0xac120003_3628058641639607600.jpeg",
                            //                 "watermarkId": 0,
                            //                 "width": 620
                            //             },
                            //             "pointsMax": 0,
                            //             "pointsMin": 0,
                            //             "text": "Ваша сыворотка: Юзу Суперсыворотка от Erborian",
                            //             "uid": "yuzu"
                            //         }, {
                            //             "description": "\u003Cp\u003E\u003Cstrong\u003EЧто нужно вашей коже:\u003C\u002Fstrong\u003E сияние и выравнивание тона.\u003C\u002Fp\u003E\u003Cp\u003EПридать коже энергию поможет Красный перец Суперсыворотка. В ее основе&nbsp;— экстракт Красного перца, который богат антиоксидантами и подарит вашей коже естественное сияние. Сыворотка содержит отшелушивающие компоненты природного происхождения, которые удаляют омертвевшие клетки кожи и способствуют их обновлению. Легкая и невесомая структура средства позволит вам максимально быстро нанести продукт на кожу и в кратчайшие сроки получить желаемый эффект.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EРезультат:\u003C\u002Fstrong\u003E ровная и гладкая кожа, которая заряжена энергией.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EГде купить:\u003C\u002Fstrong\u003E \u003Ca href=\"http:\u002F\u002Fpubads.g.doubleclick.net\u002Fgampad\u002Fclk?id=5862273492&amp;iu=\u002F81006599\u002Fhmiru-elle\u002Fcount\" rel=\"noopener nofollow\" target=\"_blank\"\u003Eerborian.ru\u003C\u002Fa\u003E\u003C\u002Fp\u003E",
                            //             "embed": null,
                            //             "imageBlock": {
                            //                 "alt": "",
                            //                 "caption": "",
                            //                 "description": "",
                            //                 "height": 465,
                            //                 "meta": {
                            //                     "origin": "",
                            //                     "style": ""
                            //                 },
                            //                 "url": "https:\u002F\u002Fn1s1.hsmedia.ru\u002F5e\u002F75\u002F17\u002F5e7517a0f56d74872597bcb412a2d7ff\u002F1728x1296_0xac120003_14509366251639607699.jpeg",
                            //                 "watermarkId": 0,
                            //                 "width": 620
                            //             },
                            //             "pointsMax": 0,
                            //             "pointsMin": 0,
                            //             "text": "Ваша сыворотка: Красный перец Суперсыворотка от Erborian",
                            //             "uid": "pepper"
                            //         }, {
                            //             "description": "\u003Cp\u003E\u003Cstrong\u003EЧто нужно вашей коже:\u003C\u002Fstrong\u003E увлажнение и сохранение молодости.\u003C\u002Fp\u003E\u003Cp\u003EЛучшее решение для обновления кожи и борьбы с возрастными изменениями&nbsp;— Женьшень Суперсыворотка. В ее основе&nbsp;— комплекс Белого Женьшеня, который предотвращает появление возрастных изменений кожи и помогает разгладить морщины. Ферментированный Красный Женьшень отвечает за сохранение молодости, а пептид поддерживает синтез коллагена для укрепления и разглаживания кожи. Уникальная сыворотка также содержит комплекс экстрактов плодов Тары и Красных водорослей и гиалуроновую кислоту, которые вместе работают на обновление кожи. Концентрированная формула быстро проникает в глубокие слои кожи и преображает ее.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EРезультат:\u003C\u002Fstrong\u003E сияющая, подтянутая и обновленная кожа.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EГде купить:\u003C\u002Fstrong\u003E \u003Cu\u003E\u003Ca href=\"http:\u002F\u002Fpubads.g.doubleclick.net\u002Fgampad\u002Fclk?id=5862273489&amp;iu=\u002F81006599\u002Fhmiru-elle\u002Fcount\" rel=\"noopener nofollow\" target=\"_blank\"\u003Eerborian.ru\u003C\u002Fa\u003E\u003C\u002Fu\u003E\u003C\u002Fp\u003E",
                            //             "embed": null,
                            //             "imageBlock": {
                            //                 "alt": "",
                            //                 "caption": "",
                            //                 "description": "",
                            //                 "height": 465,
                            //                 "meta": {
                            //                     "origin": "",
                            //                     "style": ""
                            //                 },
                            //                 "url": "https:\u002F\u002Fn1s1.hsmedia.ru\u002F42\u002F04\u002Ff8\u002F4204f8ec1c8aee05c614779b96df38cd\u002F5000x3750_0xac120003_19229341791639607785.jpeg",
                            //                 "watermarkId": 0,
                            //                 "width": 620
                            //             },
                            //             "pointsMax": 0,
                            //             "pointsMin": 0,
                            //             "text": "Ваша сыворотка: Женьшень Суперсыворотка от Erborian",
                            //             "uid": "ginseng"
                            //         }],
                            //         "title": "Какая сыворотка подойдет вам лучше всего?",
                            //         "view": "1-column"
                            //     },
                            //     "type": "quiz"
                            // }, {
                            //     "group": null,
                            //     "isHighlighted": false,
                            //     "text": "\u003Cp\u003EФото: архив пресс-служб\u003C\u002Fp\u003E",
                            //     "type": "text"
                            // }],
                            // "contentSource": "",
                            // "contentSourceId": 3,
                            // "createdAt": "2021-12-15T21:33:41.786Z",
                            // "currentPublishedAt": "2021-12-23T12:00:00Z",
                            // "firstPublication": "2021-12-23T12:00:00Z",
                            // "hasFixedNextArticle": false,
                            // "horizontalImage": "https:\u002F\u002Fn1s2.hsmedia.ru\u002F69\u002F40\u002F30\u002F69403031b9a536a3846842802da27ffd\u002F1920x1430_0xac120003_15558294461639607252.jpeg",
                            // "id": 699582,
                            // "inactiveTopics": [],
                            // "isActive": true,
                            // "isAdsDisabled": false,
                            // "isAuthorsHidden": true,
                            // "leadParagraph": "Последнее время сыворотки пользуются огромной популярностью: концентрация полезных веществ в них больше, чем в привычных кремах, а значит и результат можно увидеть гораздо быстрее. Предлагаем ответить на несколько простых вопросов и узнать, какой продукт в кратчайшие сроки улучшит состояние вашей кожи.",
                            // "legacyId": "",
                            // "modifiedAt": "2024-01-17T13:17:16.229Z",
                            // "pageMeta": {
                            //     "amphtml": "",
                            //     "canonical": "https:\u002F\u002Fwww.marieclaire.ru\u002Fkrasota\u002Ftest-kakaya-syvorotka-vam-podkhodit\u002F",
                            //     "description": "Последнее время сыворотки пользуются огромной популярностью: концентрация полезных веществ в них больше, чем в привычных кремах, а значит и результат можно увидеть гораздо быстрее. Предлагае...",
                            //     "h1": "Тест: какая сыворотка вам подходит?",
                            //     "image": "https:\u002F\u002Fn1s2.hsmedia.ru\u002F69\u002F40\u002F30\u002F69403031b9a536a3846842802da27ffd\u002F1920x1430_0xac120003_15558294461639607252.jpeg",
                            //     "ogDescription": "Последнее время сыворотки пользуются огромной популярностью: концентрация полезных веществ в них больше, чем в привычных кремах, а значит и результат можно увидеть гораздо быстрее. Предлагае...",
                            //     "ogImage": "https:\u002F\u002Fn1s2.hsmedia.ru\u002F69\u002F40\u002F30\u002F69403031b9a536a3846842802da27ffd\u002F1200x630_21_329a58ef3ef90608cead7871e6831fc8@1920x1430_0xac120003_15558294461639607252.jpeg",
                            //     "ogImageType": "image\u002Fjpeg",
                            //     "ogTitle": "Тест: какая сыворотка вам подходит?",
                            //     "seoText": "",
                            //     "title": "Тест: какая сыворотка вам подходит?",
                            //     "twitterDescription": "Последнее время сыворотки пользуются огромной популярностью: концентрация полезных веществ в них больше, чем в привычных кремах, а значит и результат можно увидеть гораздо быстрее. Предлагае...",
                            //     "twitterImage": "https:\u002F\u002Fn1s2.hsmedia.ru\u002F69\u002F40\u002F30\u002F69403031b9a536a3846842802da27ffd\u002F1200x630_21_329a58ef3ef90608cead7871e6831fc8@1920x1430_0xac120003_15558294461639607252.jpeg",
                            //     "twitterTitle": "Тест: какая сыворотка вам подходит?"
                            // },
                            // "partner": {
                            //     "displayName": "Рекламодатель по умолчанию",
                            //     "id": 10,
                            //     "image": "",
                            //     "isActive": true,
                            //     "isAdvertiser": true,
                            //     "link": ""
                            // }