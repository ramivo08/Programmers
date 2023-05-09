function solution(x, n) {
    var answer = [];
    
    for(var i=1; i<=n; i++){
      answer.push(i*x); //x씩 증가한다고 생각하여 +를 하였는데, *를 해주어야 x만큼 증가됨
    }   
    return answer;
}