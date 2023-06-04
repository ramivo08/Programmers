function solution(n) {
    var answer = 0;
    
    while(n > 0){
        answer += n%10; //n%10으로 숫자 추출
         n =Math.floor(n/10);//소수점으로 떨어지므로 정수로 만들어 n에 담는다
    }
    return answer;
}