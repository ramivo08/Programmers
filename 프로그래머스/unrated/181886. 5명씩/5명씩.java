import java.util.*;

class Solution {
    public String[] solution(String[] names) {
       
        List<String> list = new ArrayList<>();
        
        for(int i=0; i<names.length; i+=5){
            list.add(names[i]);
        }
        return list.toArray(new String[0]);
        //list를 배열로 변환하기 위해 toArray() 메서드를 사용
        //파라미터로 변환할 배열의 타입과 같은 객체를 생성하여 넣어준다.
    }
}