var $circle = null;
var railWidth = null;
var runStep = 10;
var timerID = 0;

$(document).ready(function(){
    init();
    initEvent();
});

function init(){
    $circle = $("#circle");
    railWidth = $("#rail").width();
}

function initEvent(){
    $("#btn_start").click(function(){
        moveStart();
    });

    $("#btn_stop").click(function(){
        moveStop();
    });
}

function moveStart(){
    if(timerID == 0){
        timerID = setInterval(function(){
            moveCircle(); //? 움직이는 로직.
        },0);
    }
}

function moveCircle(){
    var xpos = $circle.position().left;
    // ?현재 position left 구해오기.
    
    xpos += runStep;
    
    $circle.css({
        left: xpos
    })

    if(xpos > railWidth || xpos < 0){
        runStep *= -1;
    }
}

function moveStop(){
    clearInterval(timerID); //? timerID 내 setInterval clear
    timerID = 0; //? timerID 초기화
}

/*
$(document).ready(function(){
    var $circle = $("#circle");
    var runStep = 10;
    var xpos = $circle.position().left;
    var railWidth = $("#rail").width();
    var timerID = 0;
    
    startMove($circle, runStep, xpos, railWidth, timerID);
});

function startMove($circle, runStep, xpos, railWidth, timerID){
    $("#btn_start").click(function(){
        timerID = setInterval(function(){
                    xpos += runStep;
    
                    $circle.css({
                        left: xpos
                    });
    
                    if(xpos > railWidth || xpos < 0){
                        runStep *= -1;
                    }
                },0);
        return stopMove(timerID);
    });
}

function stopMove(timerID){
    $("#btn_stop").click(function(){
        clearInterval(timerID);
    });
}
*/