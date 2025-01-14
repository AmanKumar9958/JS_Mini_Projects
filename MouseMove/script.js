var main = document.getElementById('main');;
var cursr = document.getElementById('cursor');
var ground = document.getElementById('ground');
var score = document.getElementById('score');
var scoreCount = 0;


main.addEventListener("mousemove", moveCursor);
function moveCursor(dets){
    cursr.style.left = dets.x + "px";
    cursr.style.top = dets.y + "px";
    scoreCount++;
    score.textContent = scoreCount;
}





// var cursorRect = cursr.getBoundingClientRect();
    // var groundRect = ground.getBoundingClientRect();
    // if(
    //     cursorRect.right >= groundRect.left &&
    //     cursorRect.left <= groundRect.right &&
    //     cursorRect.bottom >= groundRect.top &&
    //     cursorRect.top <= groundRect.bottom
    // ){
    //     main.removeEventListener('mousemove');
    // }
