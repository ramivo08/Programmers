class Solution {
    public int solution(int n) {
        int answer = 0;
        
        if(n % 7 == 0 ){
            return answer = n / 7;
        }else{
            return answer = n/7 +1;
        }
        
        //return answer;
    }
}

//삼항연산자로 풀이
//class Solution {
//    public int solution(int n) {
      
//        return n%7 == 0 ? n/7 : n/7 +1;
//    }
//}