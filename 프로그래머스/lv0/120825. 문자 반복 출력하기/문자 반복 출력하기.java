class Solution {
    public String solution(String my_string, int n) {
        String answer = "";
        String[] arr = my_string.split(""); 
        //각 문자를 n만큼 반복해야하므로 문자를 분리하여
        //String 타입의 arr 배열에 담아준다.
        
        for(int i=0; i<my_string.length(); i++){ //my_string의 한글자씩 빼온다.
            answer += arr[i].repeat(n); //repeat(반복횟수)로 담아준다.
        }
        
        
        return answer;
    }
}