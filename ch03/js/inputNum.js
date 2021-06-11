//숫자를 입력받아서 그 숫자까지 출력하는 프로그램
var n = 1;
var m = prompt("숫자를 입력해주세요.");

if(m !== null){
    while(true){
        document.write(n + "<br>");
        n = n + 1
        if(n > m){ //반복 조건문
            break;
        }
    }
}
else{
    document.write("입력이 취소되었습니다.")
}

