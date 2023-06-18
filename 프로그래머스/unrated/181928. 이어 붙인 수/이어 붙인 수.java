class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        String even =""; //숫자를 붙일 변수 생성
        String odd ="";
        
        for(int i=0; i<num_list.length; i++){
            if(num_list[i] % 2 == 0){
                even += Integer.toString(num_list[i]);
            }else{
                odd += Integer.toString(num_list[i]);
            }
        }
        answer = Integer.parseInt(even) + Integer.parseInt(odd);
        return answer;
    }
}