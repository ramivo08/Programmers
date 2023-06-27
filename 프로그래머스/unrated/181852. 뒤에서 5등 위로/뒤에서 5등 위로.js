function solution(num_list) {
    var answer = [];
    
    num_list.sort((a,b) => a-b); //오름차순으로 정렬
    
    for(var i=5; i<num_list.length; i++){ //5제외하므로 5부터 시작한다.
        answer.push(num_list[i]);
    }
    return answer;
}