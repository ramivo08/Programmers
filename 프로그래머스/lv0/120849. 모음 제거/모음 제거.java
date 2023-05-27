class Solution {
    public String solution(String my_string) {
        String answer = my_string;
        String[] vowels = {"a", "e","i", "o", "e", "u"};
        
        for(String str : vowels){
            answer = answer.replaceAll(str ,"");
        }
        
        return answer;
    }
}