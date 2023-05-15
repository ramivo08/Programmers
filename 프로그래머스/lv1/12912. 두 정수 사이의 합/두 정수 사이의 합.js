function solution(a, b) {
    var sum = 0;
    //a와 b의 대소관계가 정해져 있지 않아서 조건문으로 분기문을 작성해 보았다.
    if(a<=b){//조건에 따라서 for문의 시작과 끝이 달라지며, sum에 누적되게 해보았다.
        for(var i=a; i<=b; i++){
            sum += i;
        }
    }else{
        for(var i=b; i<=a; i++){
            sum += i
        }
    }
    return sum;
}