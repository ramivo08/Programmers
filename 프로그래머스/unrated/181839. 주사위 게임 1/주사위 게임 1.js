function solution(a, b) {
    var answer = 0;
    
    if(a%2 != 0 && b%2 !=0){
        answer = (a*a)+(b*b)
    }else if(a%2 != 0 || b%2 !=0){
        answer = 2*(a+b)
    }else{
        answer = Math.abs(a-b)
        //a-b만 했을때, 실패했는데 Math.abs()메서드를 사용해서 절대값으로 풀이
    }
    return answer;
}