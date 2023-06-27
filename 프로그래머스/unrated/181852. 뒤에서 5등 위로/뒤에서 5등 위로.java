import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[num_list.length-5]; //배열을 생성하고, 5개를 제외해야 하므로 -5한다.
        Arrays.sort(num_list); //정렬을 한다.
        
        int idx=0;
        for(int i=5; i<num_list.length; i++){ //5부터 시작해서 for문을 순회한다.
            answer[idx++] = num_list[i];
        }
        return answer;
    }
}