function solution(my_string, n) {
    var answer = '';
    var arr = my_string.split("");
    
    for(var i=0; i<my_string.length; i++){
        answer += arr[i].repeat(n);
    }
    return answer;
}