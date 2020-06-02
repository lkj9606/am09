$(document).ready(function(){
    var count = 0;
    var $score = $("#score");
    var $circle = $("#circle");
    var playState = true;

    scoreCount(count, $score, $circle, playState);
})

function scoreCount(count, $score, $circle, playState){
    $circle.click(function(){
        if(playState == true){
            count++;//?점수증가
            $score.text(count + "점"); //? 점수출력
        }
    });
    setTimeout(function(){
        playState = false;
        alert("게임종료!");
    }, 5000);
}