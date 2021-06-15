//오른쪽 이미지 클릭하면 이미지 넘기기
var num = 1;
function nextGallery(){
    num++;
    if(num>7){
        num =1;
    }
    document.getElementById('gallery').src ="../images/img"+num+".jpg";
}
function preGallery(){
    
    if(num<2){
        num = 8;
    }
    num--;
    document.getElementById('gallery').src ="../images/img"+num+".jpg";
}