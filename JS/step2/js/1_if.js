/*
    ? 조건문
    
    실무사용의 예
    1. 로그인 후 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.

	if(273 < 100){
		//표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
		 alert('273<100=>true');
	}
	alert('종료');
    
*/

// *case.1 현재시각이 오후인가 오전인가
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    // ? 변수선언

    // ? 조건문
    if(hour < 12){
        //hour변수값(현재시간)이 12보다 작을때 실행
        alert('오전');
    }
    if(hour >= 12){
        //hour변수값(현재시간)이 12보다 크거나 같을때 실행
        alert('오후');
    }
}

// * case.2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDay();
    // ? 변수선언

    if(day < 30){
        alert('아직 말일 아님.');
    }else{
        alert('말일.');
    }
} 

// * case.3 아침? 점심? 저녁?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 11){ //11시보다 현시각이 작으면 아침
        alert('아침먹어.'); 
    }else if(hour < 15){ // 그것이 아니고15시보다 현시각이 작으면 점심
        alert('점심먹어.');
    }else{ // 그것도 아닐경우 저녁
        alert('저녁먹어.');
    }
}

// *exp.1 숫자판별 (입력받은수 양수? 음수? 0)
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요.','양수,음수 상관없음');

    if(numb > 0){
        alert('양수!');
    }else if(numb < 0){
        alert('음수!');
    }else{
        alert('0!');
    }
}

// *exp.2 홀,짝 판별 (입력받은수 홀수? 짝수?)
function oddOrEven(){
    var numb = prompt('숫자를 입력.', '홀,짝을 구분해주지');

    if(numb%2 == 0){
        alert('짝수!');
    }else{
        alert('홀수!');
    }
}

// *exp.3 다음 세과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가 출력.
function avgScore(){
    var koreanScore = prompt('국어점수를 입력하시오.'); 
    var englishScore = prompt('영어점수를 입력하시오.'); 
    var mathScore = prompt('수학점수를 입력하시오.'); 
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;

    if(avg > 100){
        alert('100점이넘는과목은없다. 사기구먼.');
    }else if(avg >= 90){
        alert('평균' + avg + '점 \n' + '수. 특급이구먼.');
    }else if(avg >= 80){
        alert('평균' + avg + '점 \n' + '우. 우수하구먼.');
    }else if(avg >= 70){
        alert('평균' + avg + '점 \n' + '미. 괜찮구먼.');
    }else if(avg >= 60){
        alert('평균' + avg + '점 \n' + '양. 망했구먼.');
    }else{
        alert('평균' + avg + '점 \n' + '가. 맞겠구먼.');
    }
}