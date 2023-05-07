function solution(n) {
    var answer = [];//배열 생성
    
    for(var i=1; i<=n; i++){ //1부터 n까지 반복해서 구해진 약수를 배열에 넣는다
        if(n%i === 0){
            answer.push(i);
        }
    }
    
    return answer.length;
}