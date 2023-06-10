class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[num_list.length +1];
    //배열 생성 num_list 배열의 마지막 원소 값을 조건에 맞게 계산한 값을 원소에 추가 해야하므로 길이에+1하여 자리를 만든다.
        
        for(int i=0; i<num_list.length; i++){//for문을 돌면서 answer[i]번째 인덱스에 num_list[i] 인덱스를 할당?대입?
            answer[i] = num_list[i];
        }
        
        //num_list의 마지막 원소가 그전 원소보다 크면 
        if(num_list[num_list.length-1] > num_list[num_list.length-2]){
            //마지막원소에서 그전 원소를 뺀값을 마지막에 넣는다.
            answer[answer.length-1] = num_list[num_list.length-1] - num_list[num_list.length-2];
        }else{
            //조건이 충족되지 않으면, 마지막자리에 마지막원소값에 두배를 곱하여 넣는다.
            answer[answer.length-1] = num_list[num_list.length-1] *2;
        }
        return answer;
    }
}