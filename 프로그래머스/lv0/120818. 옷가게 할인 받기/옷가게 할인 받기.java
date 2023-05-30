class Solution {
    public int solution(int price) {
        int answer = 0;
        
        if(price >= 500000){
            return (int)(price * 0.8);
        }else if(price >= 300000){
            return (int)(price * 0.9);
        }else if(price >= 100000){
            return (int)(price * 0.95);
        }
    
        return price;
    }
}

//자바스크립트로 문제를 풀어보다가 자바풀어보니 int형으로 자료형을 맞춰주는것을 잊어버림!
//그래서 자스와 똑같이 Math.floor(price*0.8) 이런식으로 실행했더니 에러 발생..
//error: incompatible types: possible lossy conversion from double to int
//위와 같이 int로 형변환하니 실행되었다!


//하다가 그냥 값을 곱해버리니 실행도 되었다.
//class Solution {
//    public int solution(int price) {
//        int answer = 0;
        
//        if(price >= 500000){
//            return price *= 0.8;
//        }else if(price >= 300000){
//            return price *= 0.9;
//        }else if(price >= 100000){
//            return price *= 0.95;
//        }
    
//        return price;
//    }
//}