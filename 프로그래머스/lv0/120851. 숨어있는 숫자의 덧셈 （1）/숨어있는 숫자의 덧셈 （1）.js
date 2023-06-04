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


//다른사람 풀이
// isNaN 사용

//function solution(my_string) {
//    const arr = my_string.split('');
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//        if (!isNaN(arr[i])) sum += Number(arr[i]);
//    }
//    return sum;
//}
