class Solution {
    public int[] solution(int[] arr) {
        int sum =0;
        for(int i=0; i<arr.length; i++){
            sum+=arr[i]; //sum변수에 arr[i] 할당하면서 arr 배열의 원소를 모두 더하기
        }
        
        int[] answer = new int[sum]; //answer배열을 생성하고, 배열의 크기는 sum변수 값
        
        int idx=0; //answer배열에 할당할때 index를 지정할 값.
        for(int i=0; i<arr.length; i++){ //arr배열의 길이만큼 순회하여 arr의 모든 원소에 접근
            for(int j=0; j<arr[i]; j++){ //arr[i]번째 원소를 answer의 index j만큼 할당한다.
                answer[idx++] = arr[i]; //j만큼 할당함녀 i값이 증가하게 된다.
            }
        }
        return answer;
    }
}