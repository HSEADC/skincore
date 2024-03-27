function tag() {
    let tags = document.querySelectorAll(".ATagClickable");
    let a = document.querySelector(".All");
    tags.forEach((tagItem) => {
        tagItem.addEventListener('click', () => {
            if (tagItem != a) {
                a.classList.remove("Active");
                tagItem.classList.toggle("Active");
                filter();
            }
            
            let b = document.querySelectorAll(".Active");
            if (tagItem == a && !tagItem.classList.contains("Active")) {
                b.forEach((tagItem)  => {
                    tagItem.classList.remove("Active");
                })
                tagItem.classList.add("Active");
                filterall();
            }
            if (b.length == 4)
                {
                    b.forEach((tagItem)  => {
                        tagItem.classList.remove("Active");
                    })
                    a.classList.add('Active');
                    filterall();
                }
            if (b.length == 0)
            {
                a.classList.add('Active');
                filterall();
            }
        })
        
    })
}
function filterall() {
    
    let a0 = document.querySelectorAll(".FilterCard");
    let alltags = document.querySelectorAll(".Active");
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
    let a0 = document.querySelectorAll(".FilterCard");
    let alltags = document.querySelectorAll(".Active");
    var tagList =[];
    a0.forEach((item) =>{
        item.classList.add("None");
    })
    alltags.forEach((tagItem) => {
            var classList = tagItem.className.split(' ');
            classList = classList.sort();
            count = 3;
            if (classList [3] == 'Active')
                {
                    count +=1;
                }
            for (let i = count; i < classList.length; i++) {
                tagList.push(classList[i]);
            }

    })
    tagList.forEach((tagName)=>{
        a0.forEach((cardItem) => {
            if (cardItem.classList.contains(tagName)) {
                cardItem.classList.remove("None");
            }
        })
    }) 
}

document.addEventListener('DOMContentLoaded', () => {
    tag()
})