class Solution {
    public String solution(String my_string) {
        String[] vowels = {"a", "e","i", "o", "e", "u"};
        //모음을 넣을 배열 vowels 생성
        
         for(String str : vowels){ //vowels을 순회하며 my_string의 문자열을 없앤다
            my_string = my_string.replaceAll(str ,"");
             //replaceAll("찾을문자열","바꿀문자열")
        }
        
        return my_string;
    }
}


//다른 방법
//순회하지 않고 바로 리턴
//class Solution {
//    public String solution(String my_string) {
   
//        return my_string.replaceAll("[aeiou]",""); //[] -정규식을 사용
//    }
//}