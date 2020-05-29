$(document).ready(function(){
    // *exp.1
    var $divs = $("div");
    $divs.css("color","#f00"); //? color: #f00;

    // *exp.2
    sayHello();
    // *exp.3
    addBorder();
    // todo.1
    textChange();
});

// *exp.2
function sayHello(){
    $('#btnCheck').click(function(){
        alert('hello');
    });
}

// *exp.3
function addBorder(){
    $("#btnAddBorder").click(function(){
        $("#panel").css("border", "5px solid black");
    });
}

// todo.1 #btnTextChange 버튼을 클릭하면 패널 (#panel2)의 글자크기,색을바꿔라.
function textChange(){
    $("#btnTextChange").click(function(){
        $("#panel2").css({
            "font-size" : 25, //! fontSize <-- js
            "color" : 'green'
        });
    });
}