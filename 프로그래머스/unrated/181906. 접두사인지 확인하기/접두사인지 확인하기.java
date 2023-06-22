class Solution {
    public int solution(String my_string, String is_prefix) {
       
        if(my_string.length() < is_prefix.length()){
            return 0;
        }
        
        for(int i=0; i<is_prefix.length(); i++){
            if(my_string.charAt(i) != is_prefix.charAt(i)){
                return 0;
            }
        }
        return 1;
    }
}


//다른 사람 풀이
//class Solution {
//    public int solution(String my_string, String is_prefix) {
//       int answer = my_string.indexOf(is_prefix);
//        return answer==0? 1: 0;
//    }
//}

//다른 사람 풀이의 처음 본 함수 -startsWith
//class Solution {
//    public int solution(String my_string, String is_prefix) {
//        if (my_string.startsWith(is_prefix)) return 1;
//        return 0;
//    }
//}