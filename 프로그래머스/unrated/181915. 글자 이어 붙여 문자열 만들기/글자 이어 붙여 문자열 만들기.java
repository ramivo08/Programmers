import java.util.*;

class Solution {
    public String solution(String my_string, int[] index_list) {
        String answer = "";
        
        String[] str = my_string.split("");
        System.out.println(Arrays.toString(str));//z, p, i, a
        //System.out.println(str.toString); 했더니 주소값?이 나왔었다.

        for(int i=0; i<index_list.length; i++){
            answer += str[index_list[i]];
        }
        return answer;
    	}
    }