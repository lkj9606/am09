/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계
*/

// !단일 for

// *exp.1 이름을 10번 출력해보자.

function namePrint10(){
    var userName = "Mark";

    for (var i = 1; i <= 10; i++){
        document.write(i + '.'+ userName + '<br>');
    }
}

// todo.1 이름을 1000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";

    for(var i = 1;  i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}

// todo.2 이름을 500번만찍되 홀수만 나오게 해보자.
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}

// todo.3 javascript engine처럼 생각해보기.
function thinkJS(){
    for (var i = 0; i < 10; i++) { //? 10보다 작을때 (0~9) 까지 만 반복 수행
        document.write("i =" + i, "<br>"); //? 0~ 9번 까지 출력
    } //? i가 10이되는 순간 break.
    document.write("종료 i = " +i); //? 이미 변경된 10이 출력.
}

// *exp.2 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력.
function favorFluit(){
    var array = ['포도','사과','바나나','망고'];

    for (var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}

function arrayFor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", 
    "반복문 for", "반복문 while", "함수", "클래스"];

    for () {
        document.write( + '번째 내용 = ' + '<br>');
    }
}