class Solution {
    public int solution(String myString, String pat) {
        int answer = 0;
        String str = "";
        String[] ms = myString.split("");
        
        for(int i=0; i<ms.length; i++){
            if(ms[i].equals("A")){
                str += "B";
            }else{
                str += "A";
            }
        }
        
        //if문 사용
        //if(str.contains(pat)){
        //    answer =1;
        //}
        //return answer;
       
        //삼항연산자 사용
        return str.contains(pat) ? 1 : 0;
    }
}


//다른사람 풀이
//class Solution {
//    public int solution(String myString, String pat) {
//        myString = myString.replace("A", "a").replace("B", "A").replace("a", "B");
//        return myString.contains(pat) ? 1 : 0;
//    }
//}
