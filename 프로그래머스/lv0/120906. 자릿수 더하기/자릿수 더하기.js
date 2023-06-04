function solution(n) {
    var answer = 0;
    
    while(n > 0){
        answer += n%10; //n%10으로 숫자 추출
         n =Math.floor(n/10);
    }
    return answer;
}