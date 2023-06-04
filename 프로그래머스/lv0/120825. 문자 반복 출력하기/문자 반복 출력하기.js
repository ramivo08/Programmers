function solution(my_string, n) {
    var answer = '';
 
    for(var i=0; i<my_string.length; i++){
        for(var j=0; j<=n-1; j++){
            answer += my_string.charAt(i);
            //charAt 함수: 문자를 반환
            //my_string i번째를 n(i가 0부터 이므로 n-1)만큼 반복해서 answer에 대입
        }
    }
    return answer;
}


//function solution(my_string, n) {
//    var answer = '';
//    var arr = my_string.split("");
    
//    for(var i=0; i<my_string.length; i++){
//        answer += arr[i].repeat(n);
//    }
//    return answer;
//}