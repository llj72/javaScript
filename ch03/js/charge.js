        var age = prompt("나이를 입력하세요","15");
        var charge; //입장료

        //조건문 코딩
        if(age !== null){
            if(age < 8){
                document.write("미취학 아동입니다.<br>");
                charge = 1000;
            }
            else if(age<14){
                document.write("초등학생 입니다.<br>");
                charge = 2000;
            }
            else if(age<20){
                document.write("중, 고등학생 입니다.<br>");
                charge = 2500;
            }
            else{
                document.write("일반인 입니다.<br>");
                charge = 3000;
            }
            document.write("입장료는 <span id='charge'>" + charge + "</span>원 입니다.");
        }
        else{ //age = null
            document.write("입력이 취소되었습니다.");
        }