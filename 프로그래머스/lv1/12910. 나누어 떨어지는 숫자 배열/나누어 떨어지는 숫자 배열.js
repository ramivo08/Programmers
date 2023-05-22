function solution(arr, divisor) {
    var answer = [];
    
    for(var i=0; i<arr.length; i++){ //arr배열의 길이만큼 반복하면서 divisor와 나누어 0인 값을 answer에 push 한다.
        if(arr[i] % divisor == 0 ){
            answer.push(arr[i]);
        }
     }//for
    
       if(answer.length == 0) {//answer의 길이가 0이면 나누어 떨어지는 값이 없다는 의미로 -1을 넣는다.
           answer.push(-1);
       }
    
    answer.sort((a,b) => (a-b)); //오름차순을 한다.
    
    return answer;
    
    
     
}