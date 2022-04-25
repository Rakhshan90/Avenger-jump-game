let score = 0;
let cross = true;
let audio = new Audio('music.mp3');
let audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        let cap = document.querySelector('.captain')
        cap.classList.add('animateCaptain')
        setTimeout(() => {
            cap.classList.remove('animateCaptain')
        }, 1000)
    }
    if (e.keyCode == 39) {
        let cap = document.querySelector('.captain')
        let capX = parseInt(window.getComputedStyle(cap, null).getPropertyValue('left'))
        cap.style.left = capX + 134 + "px";
    }
    if (e.keyCode == 37) {
        let cap = document.querySelector('.captain')
        let capX = parseInt(window.getComputedStyle(cap, null).getPropertyValue('left'))
        cap.style.left = (capX - 134) + "px";
    }
}
setInterval(() => {
    let cap = document.querySelector('.captain')
    let than = document.querySelector('.thanos')
    let gameover = document.querySelector('.gameover')

    let d1x = parseInt(window.getComputedStyle(cap, null).getPropertyValue('left'));
    let d1y = parseInt(window.getComputedStyle(cap, null).getPropertyValue('top'));

    let d2x = parseInt(window.getComputedStyle(than, null).getPropertyValue('left'));
    let d2y = parseInt(window.getComputedStyle(than, null).getPropertyValue('top'));

    let offsetX = Math.abs(d1x - d2x);
    let offsetY = Math.abs(d1y - d2y);
    // console.log(offsetX, offsetY);

    if (offsetX < 73 && offsetY < 52) {
        gameover.innerHTML = "Game Over Reload to Play Again";
        than.classList.remove('animateThanos')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            let aniThan = parseFloat(window.getComputedStyle(than, null).getPropertyValue('animation-duration'))
            let newthan = aniThan - 0.1;
            than.style.animationDuration = newthan + 's';
        }, 500);
    }
}, 10);
function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score;
}
