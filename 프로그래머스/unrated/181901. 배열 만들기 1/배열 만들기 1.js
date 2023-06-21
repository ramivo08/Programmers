function solution(n, k) {
    var answer = [];
    for(var i=1; i<=n/k; i++){
        answer.push(k*i);
    }
    return answer;
}

//다른사람 풀이
//function solution(n, k) {
//    var answer = [];
//    for(let i = k ; i <= n; i+=k){
//        answer.push(i)
//    }
//    return answer;
//}