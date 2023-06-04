function solution(my_string) {
    var answer = 0;
    var arr = my_string.split("");
    //console.log(arr);
    
    for(var i=0; i<arr.length; i++){
        if(Number(arr[i]))
        answer += Number(arr[i]);
        console.log(answer);
    }
    return answer;
    
}