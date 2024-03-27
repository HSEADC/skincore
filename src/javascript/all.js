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



var oldWidth = window.innerWidth;
window.onresize = function () {
    var newWidth = window.innerWidth;
    if (((newWidth > 1024) && (oldWidth < 1024)) || ((newWidth < 1024) && (oldWidth > 1024))){
        oldWidth = newWidth;
            window.location.reload();
        }
};
function menu() {
    const a = window.innerWidth;
    if (a <= 480) {
        console.log(1);
        let listNone = document.querySelectorAll(".NoneDefault");
        let burger = document.querySelector(".BurgerMobile");
        let menuContainer = document.querySelector(".MenuMobile");
        console.log(burger, listNone);
        burger.addEventListener('click', () => {
            listNone.forEach((item) =>{
                item.classList.toggle("NoneDefault");
                menuContainer.classList.toggle("PositionFixed");
            })
            const windowHeight = window.innerHeight;
            console.log(menuContainer.style.height);
            if (menuContainer.style.height != windowHeight +'px') 
            {
                menuContainer.style.height = windowHeight +'px';
            }
            else {
                
                menuContainer.style.height = 'fit-content';
            }
        })
    }
}
document.addEventListener('DOMContentLoaded', () => {
    search(),
    menu()
})
