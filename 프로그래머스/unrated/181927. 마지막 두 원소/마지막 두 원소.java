class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[num_list.length+1];
//배열 생성 num_list 배열의 마지막 원소 값을 조건에 맞게 계산한 값을 원소에 추가 해야하므로 길이에+1하여 자리를 만들어준다.
        
        int last =0; //마지막이 될 원소
        
        //num_list의 마지막 원소가 그전 원소보다 크면 
        if(num_list[num_list.length-1] > num_list[num_list.length-2]){
            //last(마지막원소)에서 그전 원소를 뺀 값을 추가
            last = num_list[num_list.length-1] - num_list[num_list.length-2];
        }else{
            //마지막원소가 그 전 원소보다 크지 않다면 마지막원소를 두배한다.
            last = num_list[num_list.length-1] * 2 ;
        }
        
        for(int i=0; i<num_list.length; i++){ //for문으로 answer[i]번째 인덱스에 num_list[i] 인덱스를 할당?
            answer[i] = num_list[i];
        }
        answer[answer.length -1] = last; //answer의 마지막원소 자리에는 if문에서 구한 last변수로 할당한다
        
        return answer;
    }
}