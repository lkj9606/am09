$(document).ready(function(){
    // * exp.1 원 움직이기
    moveCircle();

    // * exp.2
    // detailMoveCircle();

    // * exp.2-1
    detailMoveCircleExt();

    // *exp.3
    keyControl();
});

// *exp.1
function moveCircle(){
    var $circle = $(".circle");
    $("#btnMoveCircle").click(function(){
        var xpos = window.prompt('0~380이하 숫자만 입력.');
        xpos = parseInt(xpos);
        if(xpos >= 0 && xpos <= 380){
            $circle.css("left",xpos);
        }else{
            alert('잘못된 수치!');
        }
    });
}

// *exp.2
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
            alert('잘못된 수치!');
        }else{
            $circle.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
}

// *exp.2 function grouping

function detailMoveCircleExt(){
    var circle = null;

    circleInit();
    circleEvent();
}
function circleInit(){
    circle = $(".circleDetail");
}
function circleEvent(){
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();
        xpos = parseInt(xpos);
        ypos = parseInt(ypos);
        circleMovCommand(xpos,ypos);
    });
}
function circleMovCommand(xpos, ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert('잘못된 수치!');
    }else{
        $(circle).css({
            "left" : xpos,
            "top" : ypos
        });
    }
}

// *exp.3 keyControl

function keyControl(){
    var circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("입력한 키 코드" + e.keyCode);
    })
}