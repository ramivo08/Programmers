class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] answer; //answer 배열을 생성
        if(num_list.length % n == 0){//num_list의 길이를 나눈 나머지가 0이면, 수가 맞아 떨어지면
            answer = new int[num_list.length / n]; //num_list를 n으로 나눈 값으로 지정한다.
        }else{
            answer = new int[num_list.length / n+1]; //아니면 num_list를 n으로 나눈 값에 +1 한다.
        }
        
        int idx=0;// 배열의 위치 변수 생성
        for(int i=0; i<num_list.length; i+=n){ //i가 n의 값만큼 증가
            answer[idx++] = num_list[i]; //answer의 index번째에 num_list[i]를 할당한다.
                                        //index가 1씩 증가하면서 num_list에 원소가 채워진다.
           
        }
        return answer;
    }
}