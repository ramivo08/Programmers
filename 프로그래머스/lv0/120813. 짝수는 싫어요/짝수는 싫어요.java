class Solution {
    public int[] solution(int n) {
        int[] answer = new int[(n+1)/2]; //배열의 길이 정해줌. 홀수입력해야 하므로 (n+1)/2
        
        for(var i=1; i<=n; i++){
            if(i % 2 == 1){ //홀수일때
                answer[i/2] = i; //홀수값들이 순서대로 들어가게 한다.
            }
        }
        return answer;
    }
}