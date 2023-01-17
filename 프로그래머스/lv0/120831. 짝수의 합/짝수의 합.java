class Solution {
    public int solution(int n) {
        int answer = 0;
            for(int i =0; i <=n; i++){ //n(주어진 횟수)만큼 반복하고
                if(i % 2 == 0){ //짝수일때
                    answer += i; //i를 answer에 누적시킨다.
                }
            }
        return answer;
    }
}
