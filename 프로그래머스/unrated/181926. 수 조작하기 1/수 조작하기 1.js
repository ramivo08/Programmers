function solution(n, control) {
   var answer = n

    
    for(var i=0; i < control.length; i++){
        if(control[i]===("w")){
            answer+=1;
        }
        else if(control[i]===("s")){
            answer-=1;
        }
        else if(control[i]===("d")){
            answer+=10;
        }
        else if(control[i]===("a")){
            answer-=10;
        }
    }
    return answer;
}