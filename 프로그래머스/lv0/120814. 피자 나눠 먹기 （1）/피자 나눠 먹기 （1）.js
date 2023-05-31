function solution(n) {
    var answer = 0;
    
    if(n % 7 == 0){
        return answer = n / 7;
    }else{
        return answer = parseInt((n/7)+1);
    }
    
    return answer;
}