import java.util.*;

class Solution{
    public String[] solution(String my_string){
        List<String> list = new ArrayList<>();
        String[] arr = my_string.split(" ");
        
        //for문 사용
        //for (int i=0; i<arr.length; i++){
        //    if(!arr[i].equals("")){
        //        list.add(arr[i]);
        //    }
        //}
        
        //확장for문 사용
        for(String str : arr){
            if(!str.equals(""))
            list.add(str);
        }
        
        String[] answer = new String[list.size()];
//        for(int i=0; i<list.size(); i++){
//            answer[i] = list.get(i);
//        }
        for(int i=0; i<answer.length; i++){
            answer[i] = list.get(i);
        }
        return answer;
    }
}


//class Solution {
//    public List solution(String my_string) {
        
//        List<String> list = new ArrayList<>();
        
//        String[] myString = my_string.split(" ");
//        for(int i=0; i<myString.length; i++){
//            if(!myString[i].equals("")){
//                list.add(myString[i]);
//            }
//        }
//        return list;
//    }
//}