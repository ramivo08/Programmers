function solution(price) {
    var answer = 0;
    
        if(price >= 500000){
            return Math.floor(price - (price*0.2))
            // return Math.floor(price*0.8) => 위와 같은 결과!
            //제한사항에 소수점 이하를 버린 정수를 리턴하라고 하여 Math.floor사용
        }else if(price >= 300000){
            return Math.floor(price - (price * 0.1))
            //(price*0.9)
        }else if(price >= 100000){
           return Math.floor(price - (price * 0.05))
            //(price*0.95)
        }else{
            return Math.floor(price)
            //return price => ok
        }
    return answer;
}
