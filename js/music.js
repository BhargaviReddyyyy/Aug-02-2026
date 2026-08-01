const music = document.getElementById("music");

let started = false;

window.playMusic = function () {

    if (started) return;

    started = true;

    music.currentTime = 18;   // Start from 18 seconds (change to 0 if you want from beginning)
    music.volume = 0.7;

    music.play()
        .then(() => {
            console.log("Music Started");
        })
        .catch((err) => {
            console.log("Music Error:", err);
        });

}

const beginBtn = document.querySelector("#page1 .nextBtn");

beginBtn.addEventListener("click", () => {

    playMusic();

});