class Solution {
    public int solution(int[] arr1, int[] arr2) {
        int sum1=0;
        int sum2=0;
        
        //배열의 원소들의 합 계산
        for(int num : arr1){
            sum1 += num;
        }
        
        for(int num : arr2){
            sum2 += num;
        }
        
        // 배열의 대소관계 비교하기
        if(arr1.length > arr2.length || (arr1.length == arr2.length && sum1 > sum2)){
            return 1;
        }else if(arr1.length < arr2.length || (arr1.length == arr2.length && sum1 < sum2)){
            return -1;
        }else{
            return 0;
        }
      
    }
}