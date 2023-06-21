function solution(a, b) {
    var answer = 0;
    
    if(a%2 != 0 && b%2 !=0){
        answer = (a*a)+(b*b)
        //제곱을 구할 때, a** 하면 제곱이 된다. (a*a)==a**2
    }else if(a%2 != 0 || b%2 !=0){
        answer = 2*(a+b)
    }else{
        answer = Math.abs(a-b)
        //Math.abs() : 주어진 숫자의 절대값을 반환
        //a-b만 했을때, 실패했는데 Math.abs()메서드를 사용해서 절대값으로 풀이
    }
    return answer;
}
