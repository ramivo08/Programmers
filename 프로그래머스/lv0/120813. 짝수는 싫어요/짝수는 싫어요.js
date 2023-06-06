function solution(n) {
    var answer = [];
    
    for(var i=0; i<=n; i++){
        if(i % 2 ==1 ){ //n이 홀수일때
            answer.push(i); //answer i 넣기
        }
    }
    return answer;
}