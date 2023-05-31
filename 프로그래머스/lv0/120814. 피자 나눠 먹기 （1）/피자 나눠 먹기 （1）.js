
//Math.ceil 함수를 사용하여 바로 return
//function solution(n) {
//    return Math.ceil(n/7);
//}


// if문을 사용해보니 삼항연산자로도 가능하지 않을까 싶어서 해봤음
//실행 ok
function solution(n) {
    return n%7 == 0 ? n/7 : Math.floor((n/7) +1);
}