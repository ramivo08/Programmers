class Solution {
    public String solution(String myString) {
        String answer = "";
        for(int i=0; i < myString.length(); i++){
            if(myString.charAt(i) < 'l') answer += 'l';
            else answer += myString.charAt(i);
        }
        return answer;
    }
}

//replace 사용
//class Solution {
//    public String solution(String myString) {
        
//        return myString.replaceAll("[^l-z]","l");
        
//    }
//}