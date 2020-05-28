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
    console.log("0 = " +arguments[0]);
    console.log("1 = "+ arguments[1]);
    alert(arguments[0]+"의 나이는"+arguments[1]);
}
// showInfo("Mark",99);
/*
    ?return (리턴)
    *함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 할 수 없다.
    *이때 매개변수를 활용하면 함수 내부로 데이터를 전달 할 수 있는데, 리턴값은 이와 반대 되는 값.
    *즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 값이라면, 리턴값은 함수 내부에서 처리한 결과값을
    *함수 외부로 전달하기 위해 사용 하는 출력값.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        * function f(x) { return x * x; }
        * alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        * alert('기존매개변수', '추가매개변수');
        * prompt('기존매개변수');
*/
// * exp.6 두 수를 매개변수로 받고, 두 값을 더한 결과값을 리턴하는 함수.
function sumReturn1(num1, num2){
    var result = num1 + num2;
    return result;  //!외부로 출력하는 값. 기본 호출부 리턴.
}
// var value=sumReturn(13,26); 
// alert("두 수의 합은 = " + value); //! alert 함수에서 호출. alert으로 리턴됨.

// *exp.7 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력.
// ! 단 입력값이 0이 들어올경우 즉시 실행 중지.

function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt('숫자만입력해라.'));
        if(value == 0){
            count--;
            document.write('종료');
            document.write("총" + count + "번 실행함.");
            return;
        }
        sum += value;
        document.write(count + "." + sum + '<br>');
        count ++;
    }
}
// todo.1 구구단 출력을 함수로 만들기.

function printGugudan(){
    for (var i = 2; i <= 9; i++) {
        document.write(i + "단 출력", "<br>");
        for(var m = 1; m <= 9; m++){
            document.write(i + "*" + m + "=" +(i*m), "<br>");
        }
        document.write("<br>");
    }
}

// *exp.7 사칙연산 부를 함수로 변환하여 보다 관리가 편한 계산기.

function calculator(op, numb1, numb2){
    var result = '';
    switch(op){
        case "+" :
            result = add(numb1, numb2);
            break;
        case "-" :
            result = sub(numb1, numb2);
            break;
        case "*" :
            result = mul(numb1, numb2);
            break;
        case "/" :
            result = div(numb1, numb2);
            break;
        default :
            result = "잘못된 값입니다.";
            break;
            //? 분리된 각 연산함수 들.
    }
    return result;
}
function add(numb1,numb2){
    addResult = numb1 + numb2;
    return addResult;
}
function sub(numb1,numb2){
    subResult = numb1 - numb2;
    return subResult;
}
function mul(numb1,numb2){
    mulResult = numb1 * numb2;
    return mulResult;
}
function div(numb1,numb2){
    divResult = numb1 / numb2;
    return divResult;
}

// *exp.8 함수를 변수에 담기.
function hello(name){
    console.log(name + " welcome!");
}
// hello("Mark");

//? var func = hello; func 라는 변수에 hello라는 함수를 담았다.
//? func("Stark"); 변수를 호출해서 안에 매개변수를 넣으면 함수가 실행된다.

// *exp.9 매개변수 값으로 함수 사용.

function hi1(){
    console.log('Hello.'); //* Hello를 log로 출력.
}
function hi2(){
    console.log('안녕하세요.'); // * 안녕하세요를 log로 출력.
}
function execute(func){
    func();
}