function solution(start, end) {
    var num = start-end+1;
    var answer = [];
    
    for(var i=0; i<num; i++){
        
        answer[i]= start-i;
       // console.log(answer);
    }
    
    return answer;
}