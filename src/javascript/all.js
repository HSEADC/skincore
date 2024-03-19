function search() {
    let search1 = document.querySelectorAll(".Q_Search");
    let searchinput = document.querySelector(".SearchInput");
    search1.forEach((searchItem) => {
        searchItem.addEventListener('click', () => {
            searchItem.classList.toggle("SearchActive");
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
    cards.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle("Flipped");
        })
    })
    
}
// загрузить еще — тесты


var oldWidth = window.innerWidth;
window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        oldWidth = newWidth;
            window.location.reload();
        }
};


function loadMoreTest() {
    // let testContainer = document.querySelector('.None');
    if ((document.documentElement.clientWidth < 1024) && (document.documentElement.clientWidth > 767)) {
        let theThirdDiv = document.querySelectorAll('.O_TruthOrMythCard');
        theThirdDiv[3].classList.add('None');
    }
    let testContainer = document.querySelectorAll('.None');
    let buttonTestMore = document.querySelector('.ButtonTestMore');
    let count = 4;
    let count3 = 3;

    buttonTestMore.addEventListener('click', () => {
        
        if (document.documentElement.clientWidth >= 1024) {
            for (item = 0; item < count; item ++) {
                testContainer[item].style.display = 'flex';
            }
            count +=4;
            if (count == 12) {
                buttonTestMore.style.display = 'none';
            }

        }
        else {
            for (item = 0; item < count3; item ++) {
                testContainer[item].style.display = 'flex';
            }
            count3 +=3;
            if (count3 == 12) {
                buttonTestMore.style.display = 'none';
            }

        }
        // if (count <2) {
        //     testContainer[count].style.display = 'flex';
        //     count +=1;
        // }
        // if (count ==2){
            
        // }
    })

}

document.addEventListener('DOMContentLoaded', () => {
    search()
    card()
    loadMoreTest()
    
})
