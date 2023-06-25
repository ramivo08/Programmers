function solution(arr) {
    var answer = [];
    
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i]; j++){ //arr[i]만큼 반복해서 배열answer에 넣는다
            answer.push(arr[i]);
        }
    }
    
    return answer;
}
