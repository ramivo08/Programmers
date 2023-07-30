function solution(my_string) {
    var answer =[]
    var arr = my_string.split(" ");
    for(var i=0; i<arr.length; i++){
        if(arr[i] !== ""){
            answer.push(arr[i])
        }
    }
    return answer

}

//function solution(my_string) {
        //trim과 정규식 사용한 풀이
//    return my_string.trim().split(/\s+/);
//}