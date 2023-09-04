function solution(myString) {
    for(var i=0; i<myString.length; i++){
        if(myString[i] < 'l'){
            myString = myString.replace(myString[i],'l');
        }
    }
    
    return myString;
}


//replace 사용
function solution(myString) {
    return myString.replace(/[a-k]/g,'l');
}