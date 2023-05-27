class Solution {
    public int[] solution(int money) {
        int[] answer = new int[2];
              answer[0] = money / 5500;
              answer[1] = money % 5500;
        
        return answer;
    }
}


//바로 리턴하는 방법! 다른사람 풀이
//class Solution {
//    public int[] solution(int money) {
    
//        return new int[]{money/5500 , money%5500};
//    }
//}