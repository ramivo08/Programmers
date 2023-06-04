class Solution {
    public int solution(int[] array, int height) {
        int answer = 0;
       
        for(int i : array){
            if( i > height) answer++;
        }
  
        return answer;
    }
}

//class Solution {
//    public int solution(int[] array, int height) {
//        int answer = 0;
//        for(int i=0; i<array.length; i++){
//            if(array[i] > height ){
//                answer++;
//            }
//        }
//        return answer;
//    }
//}