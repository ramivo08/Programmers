class Solution {
    public int solution(int[] dot) {
        int answer = 0;
        
        if(dot[0]>0 && dot[1]>0){
            return answer=1;
        }else if(dot[0]<0 && dot[1]>0){
            return answer=2;
        }else if(dot[0]<0 && dot[1]<0){
            return answer=3;
        }else if(dot[0]>0 && dot[1]<0){
            return answer=4;
        }
        
        return answer;
    }
}