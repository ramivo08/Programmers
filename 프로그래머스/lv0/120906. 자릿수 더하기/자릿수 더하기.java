class Solution {
    public int solution(int n) {
        int answer = 0;
        
        while(0 < n){
            answer += n % 10;
            n /= 10;
        }
        return answer;
    }
}