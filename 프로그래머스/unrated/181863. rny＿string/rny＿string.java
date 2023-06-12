class Solution {
    public String solution(String rny_string) {
           
        return rny_string.replaceAll("m","rn");
    }
}

//class Solution {
//    public String solution(String rny_string) {
//        String str="";
//        String arr[] = rny_string.split("");
        
//        for(int i=0; i<arr.length; i++){
//            if(arr[i].equals("m")){
//                str += "rn";
//            }else{
//                str += arr[i];
//            }
//        }
//        return str;
//    }
//}