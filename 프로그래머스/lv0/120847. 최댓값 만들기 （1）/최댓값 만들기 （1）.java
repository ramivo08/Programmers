class Solution {
    public int solution(int[] numbers) {
       
        int max=0;
        
        for(int i=0; i<numbers.length; i++){
            for(int j=i+1; j<numbers.length; j++){ //같은 위치의 값을 곱하지 않게 하기 위해 j의 시작위치를 i+1부터
                if(numbers[i] * numbers[j] > max){ //numbers의 i 값 * numbers의 j의 값이 max보다 크면
                    max = numbers[i] * numbers[j]; //max 변수에 둘을 곱한 값을 대입
                }
            }
        }
        return max;
    }
}