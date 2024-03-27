function tag() {
    let tags = document.querySelectorAll(".AButtonClickable");
    let a = document.querySelector(".All");
    let a0 = document.querySelector(".Product");
    let a1 = document.querySelector(".Substance");
    let c = document.querySelector('.ButtonActive');
    tags.forEach((tagItem) => {
        tagItem.addEventListener('click', () => {
            if (tagItem == a0) {
                a.classList.remove("DarkBlue");
                a1.classList.remove("DarkBlue");
                tagItem.classList.toggle("DarkBlue");
                c.classList.toggle("BA_2");
                c.classList.remove("BA_3");
                c.classList.remove("BA_1");
                filter();
            }
            if (tagItem == a1) {
                a.classList.remove("DarkBlue");
                a0.classList.remove("DarkBlue");
                tagItem.classList.toggle("DarkBlue");
                c.classList.toggle("BA_3");
                c.classList.remove("BA_2");
                c.classList.remove("BA_1");
                filter();
            }
            if (tagItem == a) {
                a1.classList.remove("DarkBlue");
                a0.classList.remove("DarkBlue");
                tagItem.classList.toggle("DarkBlue");
                c.classList.toggle("BA_1");
                c.classList.remove("BA_2");
                c.classList.remove("BA_3");
                filterall();
            }
            // let b = document.querySelectorAll(".Active");
            // if (tagItem == a && !tagItem.classList.contains("Active")) {
            //     b.forEach((tagItem)  => {
            //         tagItem.classList.remove("Active");
            //     })
            //     tagItem.classList.add("Active");
            //     filterall();
            // }
        })
        
    })
}
function filterall() {
    let a0 = document.querySelectorAll(".FilterCard");
    let alltags = document.querySelectorAll(".DarkBlue");
    alltags.forEach((tagItem) => {
        var classList = tagItem.className.split(' ');
        if (tagItem.classList.contains("All")) {
            a0.forEach((cardItem) => {
                cardItem.classList.remove("None");
            })
        }
    })
}


function filter() {
    let loadMore = document.querySelector(".ButtonTestMore");
    loadMore.classList.add("None");
    let a0 = document.querySelectorAll(".FilterCard");
    let alltags = document.querySelector(".DarkBlue");
    let thetag = alltags.className.split(' ')[3];
    a0.forEach((item) =>{
        item.classList.add("None");
    })
    a0.forEach((item) =>{
        if (item.classList.contains(thetag)) {
            item.classList.remove("None");
        }
    })
}
function loadMoreTest() {
    // let testContainer = document.querySelector('.None');
    // if ((document.documentElement.clientWidth < 1024) && (document.documentElement.clientWidth > 767)) {
    //     let theThirdDiv = document.querySelectorAll('.O_DictionaryCard');
    //     theThirdDiv[3].classList.add('None');
    // }
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
            if (count == 16) {
                buttonTestMore.style.display = 'none';
            }

        }
        else {
            for (item = 0; item < count3; item ++) {
                testContainer[item].style.display = 'flex';
            }
            count3 +=3;
            if (count3 == 15) {
                buttonTestMore.style.display = 'none';
            }

        }
    })

}
document.addEventListener('DOMContentLoaded', () => {
    tag(),
    loadMoreTest()
    
})