import java.util.*;

class Solution {
    public String solution(String my_string, int[] index_list) {
        String answer = "";
        
        String[] str = my_string.split("");
        System.out.println(Arrays.toString(str));

        for (int j : index_list) {
            answer += str[j];
        }
        return answer;
    	}
    }