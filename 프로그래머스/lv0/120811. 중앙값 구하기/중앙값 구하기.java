import java.util.Arrays;
class Solution {
    public int solution(int[] array) {
    //Arrays.sort = 오름차순 
        Arrays.sort(array);
        return array[array.length/2];
    }
}