class Solution {
    public String solution(String my_string, String alp) {
       String answer ="";
        for(int i=0; i<my_string.length(); i++){
            String str = my_string.charAt(i)+"";
            if(str.equals(alp)){
                str = str.toUpperCase();
            }
              answer += str;          
        }
        return answer;
    }
}


//첫풀이
//class Solution {
//    public String solution(String my_string, String alp) {
       
//        return my_string.replace(alp, alp.toUpperCase());
//    }
//}
