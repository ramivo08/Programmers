class Solution {
    public int solution(int slice, int n) {
        //n=사람수, slice=피자조각수
        int answer = 0;
        if(n % slice == 0){ //n과 slice 나누었을때 나머지가 0이면 
            answer = n / slice;// n 나누기 slice를 return
        }else{
            //n을 slice와 나눴을 때, 나머지가 0이 아니라면
            answer = n / slice+1; //slice는 n보다 +1을 해준다.
        }
        return answer;
    }
}