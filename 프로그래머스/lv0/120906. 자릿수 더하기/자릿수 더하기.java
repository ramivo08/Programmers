class Solution {
    public int solution(int n) {
        int answer = 0;
        
        while(0 < n){
            answer += n % 10; //n의 각 자리 숫자를 구하기 위해서 10으로 나눈 나머지를 알아낸다.
            n /= 10; //구한 자리수를 없애기 위해 n / 10으로 나눈다
        }
        return answer;
    }
}
