function tag() {
    let tags = document.querySelectorAll(".TagClickable");
    tags.forEach((tag) => {
        tag.addEventListener('click', () => {
            tag.classList.toggle("TagActive");
        })
        
    })
}
function search() {
    let search1 = document.querySelectorAll(".Q_Search");
    let searchinput = document.querySelector(".SearchInput");
    search1.forEach((search) => {
        search.addEventListener('click', () => {
            search.classList.toggle("SearchActive");
            searchinput.classList.toggle("SearchInputActive");
        })
        
    })
}

// const card = document.querySelector(".TruthOrMythInnerCard");

// card.addEventListener("click", function (e) {
//     card.classList.toggle('Flipped');
// });

function card() {
    let cards = document.querySelectorAll(".TruthOrMythInnerCard");
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle("Flipped");
        })
        
    })
}
// загрузить еще — тесты

function loadMoreTest() {
    // let testContainer = document.querySelector('.None');
    let testContainer = document.querySelectorAll('.None');
    let buttonTestMore = document.querySelector('.ButtonTestMore');
    let count = 0;
    buttonTestMore.addEventListener('click', () => {
        if (count <2) {
            testContainer[count].style.display = 'flex';
            console.log(testContainer[count]);
            count +=1;
        }
        if (count ==2){
            buttonTestMore.style.display = 'none';
        }
    })
    // buttonTestMore.addEventListener('click', () => {
    //     testContainer.style.display = 'flex';
    // })
    // testContainer.forEach((test) => {
    //     buttonTestMore.addEventListener('click', () => {
    //         test.style.display = 'flex';
    //     })
    // })

}

document.addEventListener('DOMContentLoaded', () => {
    tag()
    search()
    card()
    loadMoreTest()
})






// function cards() {
//     let card = document.querySelectorAll(".TruthOrMythInnerCard");
//     card.forEach((cards) => {
//         card.addEventListener('click', function(e) {
//             card.classList.toggle('Flipped');
//         })
//     })
// }



// $(document).ready(function(){ 

//     $(".menu_web").click(function() {
//         $(this).toggleClass("exist");   
//         // if ($(this).hasClass("non-exist")) {
//         //     $(this).removeClass("non-exist");
//         //     $(this).toggleClass("exist");   
//         // }
//         if ($(".menu_web").hasClass("exist")) {
//             $(this).addClass("menu_web00");
//             $(".search").addClass("s_web");   
//             $(".menu").addClass("menu_web0");  
//             $(".link, .tags").addClass("menu_web01");   
//             $(".link").addClass("link_web");  
//             $(".tag1").addClass("tag1_web"); 
//             $(".tag1").css('margin-left', '4vw');  
//             $(".tags").addClass("tags_web");  
//         }
//         else {
//             $(".menu_web").removeClass("menu_web00");
//             $(".search").removeClass("s_web");   
//             $(".menu").removeClass("menu_web0");  
//             $(".link, .tags").removeClass("menu_web01");   
//             $(".link").removeClass("link_web");  
//             $(".tag1").removeClass("tag1_web"); 
//             $(".tags").removeClass("tags_web");  
//         }
//     });
//     карточка вещества
//     $(".bt2").click(function() {
//         $(".bt1").removeClass("active"); 
//         $(".bt3").removeClass("active"); 
//         $(this).toggleClass("active"); 
//         $(".bubble_dark").css('margin-left', '12vw');
//         $(".bubble_dark").css('width', '13vw');
//         if (document.documentElement.clientWidth <= 414) {
//             $(".bubble_dark").css('width', '23.7vw');
//             $(".bubble_dark").css('margin-left', '20vw');
//         }
//         document.getElementById('change').textContent = 'Сыворотки для жирной кожи лица могут быть использованы для балансирования уровня жира, увлажнения кожи, уменьшения блеска, сужения пор и улучшения текстуры кожи. '
//     });
//     $(".bt1").click(function() {
//         $(".bt2").removeClass("active"); 
//         $(".bt3").removeClass("active"); 
//         $(this).toggleClass("active"); 
//         $(".bubble_dark").css('margin-left', '0vw');
        
//         if (document.documentElement.clientWidth <= 414) {
//             $(".bubble_dark").css('width', '10.7vw ');
//         }
//         document.getElementById('change').textContent = 'Сухой коже необходимо глубокое увлажнение. Для этого типа подойдут сыворотки с гиалуроновой кислотой, церамидами или натуральными маслами, которые увлажнят и питают кожу. Можно также обратить внимание на наличие в составе витаминов E, C и B3. '
//     });
//     $(".bt3").click(function() {
//         $(".bt1").removeClass("active"); 
//         $(".bt2").removeClass("active"); 
//         $(this).toggleClass("active"); 
//         $(".bubble_dark").css('margin-left', '26vw');
//         $(".bubble_dark").css('width', '17.9vw');
//         if (document.documentElement.clientWidth <= 414) {
//             $(".bubble_dark").css('width', '41.7vw');
//             $(".bubble_dark").css('margin-left', '46vw');
//         }
//         document.getElementById('change').textContent = 'Сыворотки для чувствительной кожи предназначены для ухода за кожей, которая склонна к раздражению, покраснениям, сухости и другим проблемам. Они имеют специальные формулы, разработанные с учетом потребностей чувствительной кожи, и содержат ингредиенты, которые помогают уменьшить воспаление, увлажнить и успокоить кожу.'

        
//     });
// });  