// ======================================
// PAGE NAVIGATION
// ======================================

const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".nextBtn");
const dots = document.querySelectorAll(".dot");

let currentPage = 0;

function showPage(index){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

    currentPage = index;

    updateDots();

}

// ======================================
// UPDATE DOTS
// ======================================

function updateDots(){

    dots.forEach(dot=>dot.classList.remove("active"));

    if(dots[currentPage]){

        dots[currentPage].classList.add("active");

    }

}

// ======================================
// NEXT BUTTONS
// ======================================

nextBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        // Start music only on Begin Journey
        if(btn.dataset.next==="page2"){

            if(typeof playMusic==="function"){
                playMusic();
            }

        }

        const next = btn.dataset.next;

        const nextIndex=[...pages].findIndex(
            page=>page.id===next
        );

        if(nextIndex!==-1){

            showPage(nextIndex);

            if(next==="page2"){

                    typeLetter();

}

        }

    });

});

// ======================================
// MEMORY POPUP
// ======================================

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

const memories = [

{
title:"📸 Memory 1 ❤️",

text:
`The beginning of countless memorie
 starts with R^2 Birthdayyyyy....
Happy souls
One last photo Loading in this
B.Tech Life

❤️`
},

{
title:"😂 Memory 2",

text:
`From random jokes...

To endless conversations...

A candid which is our group DP rn
should change atleast this year😂

💕`
},

{
title:"🌸 Memory 3",

text:
`One campus...
One gang...
Countless unforgettable memories.
Together, we made ordinary days extraordinary.
( Especially PPT daysssss....)

Happy Friendship Day ❤️`
}

];

// ======================================
// OPEN MEMORY
// ======================================

function openMemory(index){

    popup.classList.add("show");

    popupTitle.innerHTML = memories[index-1].title;

    popupText.innerHTML = memories[index-1].text;

}

// ======================================
// CLOSE MEMORY
// ======================================

function closePopup(){

    popup.classList.remove("show");

}

// Make functions available to HTML
window.openMemory = openMemory;
window.closePopup = closePopup;

// ======================================
// GIFT BUTTON
// ======================================

const giftBtn = document.getElementById("giftBtn");

giftBtn.addEventListener("click",()=>{

    showPage(4);

});

// ======================================
// KEYBOARD SUPPORT
// ======================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closePopup();

    }

});

// ======================================
// REPLAY
// ======================================

const replayBtn = document.querySelector(".final button");

replayBtn.addEventListener("click",()=>{

    showPage(0);

});

// ======================================
// START
// ======================================

showPage(0);