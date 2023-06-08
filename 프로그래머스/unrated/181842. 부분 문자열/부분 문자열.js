//if문으로 조건을 주어 풀어보니 삼항연산자로도 풀이 가능할거 같아서 작성해보니 실행되었다.
function solution(str1, str2) {

    return str2.includes(str1) ? 1 : 0;
}


//처음에 풀었던 것.
//function solution(str1, str2) {
//    var answer = 0;
    
//    if(str2.includes(str1)){
//        answer=1;
//    }
//    return answer;
//}
