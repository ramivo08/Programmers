class Solution {
    public int[] solution(String[] strlist) {
        int[] answer = new int[strlist.length];
        
        for(int i=0; i< answer.length; i++){
            answer[i] = strlist[i].length(); //strlist의 i의 위치에 있는 값의 길이를 answer에 넣어준다
        }
        return answer;
    }
}