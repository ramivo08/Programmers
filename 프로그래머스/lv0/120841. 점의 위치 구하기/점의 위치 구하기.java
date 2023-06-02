//방법1
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


//방법2
//class Solution {
//    public int solution(int[] dot) {
        
//        if(dot[0]>0){
//            if(dot[1]>0){
//                return 1;
//            }else{
//                return 4;
//            }
//        }else{
//            if(dot[1]>0){
//                return 2;
//            }else{
//               return 3;
//            }
//        }
        
//    }
//}