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


//다른사람 풀이
// class Solution {
//     public int solution(int n) {
//         int answer = 0;

//         for(int i=2; i<=n; i+=2){ //짝수만 더하니까 i 2부터 시작, i에 2씩 더해서 증가
//             answer+=i;
//         }

//         return answer;
//     }
// }
