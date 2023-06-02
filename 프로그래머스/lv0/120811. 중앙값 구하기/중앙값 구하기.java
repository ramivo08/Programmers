import java.util.Arrays;
class Solution {
    public int solution(int[] array) {
    //Arrays.sort = 오름차순 
        Arrays.sort(array);
        return array[array.length/2]; //해당 인덱스를 배열의 길이 /2 하여 중앙값을 나타낸다.
    }
}