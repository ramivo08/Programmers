function solution(my_string, alp) {
    var answer ='';
    var str = my_string.split("");
    
    for(var i=0; i<str.length; i++){
        if(str[i] === alp){
            answer += alp.toUpperCase();
        }else{
            answer += str[i];
        }
    }
    return answer;
}

//replaceAll 사용
function solution(my_string, alp) {
    return my_string.replaceAll(alp, alp.toUpperCase());
}

