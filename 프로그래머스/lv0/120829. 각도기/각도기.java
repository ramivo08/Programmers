class Solution {
    public int solution(int angle) {
        
        if(0<angle && 90>angle){
            return 1;
        }else if(angle == 90){
            return 2;
        }else if(90<angle && angle<180){
            return 3;
        }else{
            return 4;
        }
        
    }
}