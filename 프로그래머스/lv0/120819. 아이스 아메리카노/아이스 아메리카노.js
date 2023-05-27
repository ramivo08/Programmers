function solution(money) {
    var answer = [];
        answer.push(Math.floor(money/5500));
    //현재 가진 돈 money와 아메리카노값 5500원을 나누면 나머지값이 나오는데
    //Math.floor 메서드로 소수점 이하는 버린다.
       
        answer.push(money%5500);
    //그 나머지값을 구해본다.
    return answer;
}