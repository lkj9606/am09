/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
//* exp.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기

function helloExp(){
    var comment = '안녕. 방가와!';
    for(var i = 0; i < 3; i++){
        document.write(comment,'<br>');
    }
}
/*
    *document.write("안녕. 방가와","<br>");
    *document.write("안녕. 방가와","<br>");
    *document.write("안녕. 방가와","<br>");
 */

 /* exp.2 기존의 반절피라미드 2회를 함수를 만들어 간결하게.*/

function starPrint(){
    var star = '';
    for (var i = 1; i <= 10; i++) { 
        for (var j = 0; j < i; j++) { 
            star += '*'; 
        }
        star += '<br>';
    }
    document.write(star);
}

// starPrint();starPrint();

// *exp.3 매개변수(Parameter)가 있는 함수 만들기
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.

function sumParam(num1, num2){
    var result = num1 + num2;
    alert("두 수의 합은 = " + result);
}
// sumParam(10,20);
// ?  NaN(Not a Number).표현 불가능한 수치형 결과를 나타내는 값. 은 연산 과정에서 잘못된 입력을 받았음을 나타내는 기호

// *exp.4 매개변수의 자리가 없어도 있는것처럼.. arguments
// ? 가변인자함수 - 배열은 아니지만 배열처럼 사용가능.

/*
    ?arguments? 
    arguments 객체는 모든 함수 안에서 사용하는 지역변수다.
    arguments를 이용해 함수내 인수들을 참조 할 수 있고 이 객채의
    함수에 전달된 각 인수항목을 포함한다.
    단 arguments는 Array와 비슷해보이지만 length를 구하는것을 제외
    Array와 다르다. 하지만 필요에 따라 Array로 변환하여 쓸수있다.
*/

// !ex.1
function sumAll(){
    alert(typeof (arguments) + ':' + arguments.length);
}
//? arguments는 배열같은 매개변수
// sumAll(1,2,3,4,5,6,7,8,9);
//? 함수를 호출할 때, 9개의 매개변수를 입력했기때문에, length가 9가 나온다.

// !ex.2

function sumAll2(){
    var willReturn = 0;
    for (var i in arguments){
        //? for in 반복문은 IE9 이상에서만 가능. vue.js 등의 frontend framework에서 사용.
        willReturn += arguments[i];
        //? willReturn 이라는 변수에 arguments(매개변수의 배열) 내의 값을 더해서 대입해라. 배열의 갯수만큼.
    }
    return willReturn;
    // 나온값을 리턴하라.
}

// *exp.5 매개변수 자리가 없는 곳에 입력된 매개변수를 arguments를 이용. 출력.
function showInfo(){
    
}