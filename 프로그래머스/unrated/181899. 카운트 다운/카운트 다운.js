function solution(start, end) {
    
    var answer = [];
    
    for(var i=start; i>=end; i--){
        
        answer.push(i);
       // console.log(answer);
    }
    
    return answer;
}