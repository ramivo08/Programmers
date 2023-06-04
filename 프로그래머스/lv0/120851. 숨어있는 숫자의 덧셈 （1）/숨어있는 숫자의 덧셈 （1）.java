class Solution {
    //정규식? 사용해서 숫자를 구분??
    // [^0-9] : 문자열 중에서 0~9를 제외한 문자열 (a~z, A~Z)
    // [0-9] : 문자열 중에서 0~9 까지 숫자가 들어 있는 문자열은 모두 해당
    public int solution(String my_string) {
        int answer = 0;
        String str = my_string.replaceAll("[^0-9]","");
        String[] arr = str.split("");
        for(int i=0; i<arr.length; i++){
            answer += Integer.parseInt(arr[i]);
        }
        return answer;
    }
}