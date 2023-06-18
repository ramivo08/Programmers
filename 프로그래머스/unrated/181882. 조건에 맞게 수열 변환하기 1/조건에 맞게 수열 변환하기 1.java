class Solution {
    public int[] solution(int[] arr) {
        int[] answer = new int[arr.length];//answer배열을 생성하고 길이는 arr배열의 길이와 동일하게 설정
        
        for(int i=0; i<arr.length; i++){
           if(arr[i] < 50 && arr[i] % 2 != 0){ //50보다 작은 홀수이면
               answer[i] = arr[i] * 2; //answer에 저장될 값을 2로 곱합니다.
           }else if(arr[i] >= 50 && arr[i] % 2 ==0){//50보다 크거나 같은 짝수일때
               answer[i] = arr[i] / 2; //값을 2로 나누어 answer 배열에 저장한다.
           }else{
               answer[i] = arr[i];
           }
        }
        return answer;
    }
}