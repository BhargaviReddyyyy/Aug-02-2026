// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart(){

    const heart=document.createElement("div");

    const hearts=["❤️","💖","💕","💗","💞"];

    heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.position="fixed";
    heart.style.left=Math.random()*window.innerWidth+"px";
    heart.style.top=window.innerHeight+"px";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="9999";
    heart.style.transition="6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=
        `translateY(-${window.innerHeight+300}px)
         rotate(${Math.random()*360}deg)`;

        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,900);


// ==========================================
// SPARKLES
// ==========================================

function sparkle(){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=Math.random()*window.innerWidth+"px";
    star.style.top=Math.random()*window.innerHeight+"px";
    star.style.fontSize="18px";
    star.style.pointerEvents="none";
    star.style.zIndex="9999";

    document.body.appendChild(star);

    star.animate(

        [

            {
                opacity:0,
                transform:"scale(.3)"
            },

            {
                opacity:1,
                transform:"scale(1.2)"
            },

            {
                opacity:0,
                transform:"scale(.3)"
            }

        ],

        {

            duration:1200

        }

    );

    setTimeout(()=>{

        star.remove();

    },1200);

}

setInterval(sparkle,700);


// ==========================================
// MOUSE GLOW
// ==========================================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="25px";
glow.style.height="25px";
glow.style.borderRadius="50%";
glow.style.background="rgba(255,255,255,.4)";
glow.style.filter="blur(8px)";
glow.style.pointerEvents="none";
glow.style.zIndex="9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-12+"px";
    glow.style.top=e.clientY-12+"px";

});


// ==========================================
// PHOTO HOVER EFFECT
// ==========================================

const photos=document.querySelectorAll(".photo-card");

photos.forEach(photo=>{

    photo.addEventListener("mouseenter",()=>{

        photo.animate(

            [

                {
                    transform:"translateY(0)"
                },

                {
                    transform:"translateY(-12px)"
                }

            ],

            {

                duration:250,

                fill:"forwards"

            }

        );

    });

});


// ==========================================
// GIFT ANIMATION
// ==========================================

const gift=document.querySelector(".gift-box");

if(gift){

gift.addEventListener("mouseenter",()=>{

    gift.animate(

        [

            {
                transform:"rotate(-6deg)"
            },

            {
                transform:"rotate(6deg)"
            },

            {
                transform:"rotate(0deg)"
            }

        ],

        {

            duration:350

        }

    );

});

}


// ==========================================
// FINAL PAGE HEART RAIN
// ==========================================

function heartRain(){

    const page=document.getElementById("page5");

    if(!page.classList.contains("active")) return;

    const h=document.createElement("div");

    h.innerHTML="❤️";

    h.style.position="absolute";
    h.style.left=Math.random()*window.innerWidth+"px";
    h.style.top="-40px";
    h.style.fontSize="28px";
    h.style.pointerEvents="none";

    page.appendChild(h);

    h.animate(

        [

            {

                transform:"translateY(0)",
                opacity:1

            },

            {

                transform:`translateY(${window.innerHeight}px)`,
                opacity:0

            }

        ],

        {

            duration:5000

        }

    );

    setTimeout(()=>{

        h.remove();

    },5000);

}

setInterval(heartRain,500);


// ==========================================
// WELCOME ANIMATION
// ==========================================

window.addEventListener("load",()=>{

    const title=document.querySelector("#page1 h1");

    title.animate(

        [

            {

                opacity:0,
                transform:"translateY(80px)"

            },

            {

                opacity:1,
                transform:"translateY(0)"

            }

        ],

        {

            duration:1200,
            fill:"forwards"

        }

    );

});