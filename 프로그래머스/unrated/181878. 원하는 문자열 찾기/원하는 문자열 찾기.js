function solution(myString, pat) {
   //삼항연산자로 가능
    return myString.toLowerCase().includes(pat.toLowerCase())? 1:0;
}

//function solution(myString, pat) {
//    var answer = 0;
//    if(myString.toLowerCase().includes(pat.toLowerCase())){
//        answer =1;
//    }
//    return answer;
//}