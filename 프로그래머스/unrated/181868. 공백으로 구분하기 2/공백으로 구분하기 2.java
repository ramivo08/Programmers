import java.util.*;
class Solution {
    public List solution(String my_string) {
        
        List<String> list = new ArrayList<>();
        
        String[] myString = my_string.split(" ");
        for(int i=0; i<myString.length; i++){
            if(!myString[i].equals("")){
                list.add(myString[i]);
            }
        }
        return list;
    }
}