function solution(my_string, is_suffix) {
    var answer = [];
    
    for(var i=0; i<my_string.length; i++){
        answer.push(my_string.substring(i));
    }
    
    return answer.includes(is_suffix) ? 1:0 ;
}