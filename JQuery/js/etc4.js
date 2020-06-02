$(document).ready(function(){
    // *exp.1
    imgAlignHori();

});

// *exp.1
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;

    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();

        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n번째 대상구하기.
            xpos = i * imgWidth;
            image.css("left", xpos);
        }
        $(".reset").click(function(){
            img.css("left", 0);
        });
    });
}