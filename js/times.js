var count = 0;
    for(var i =1; i <=100; i++){
        if(i % 3 === 0){
        document.write(i + ", ");
         count = count +1;
        }
    }
document.write("<br><p>3의 배수의 개수 : " + count + "</p>");