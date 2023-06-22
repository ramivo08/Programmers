class Solution {
    public String solution(String myString) {
       
        return myString.toLowerCase().replaceAll("a","A");
    }
}


//처음풀이
//class Solution {
//    public String solution(String myString) {
//        String answer = "";
        
//        myString = myString.toLowerCase();
//        answer = myString.replaceAll("a","A");
//        return answer;
//    }
//}