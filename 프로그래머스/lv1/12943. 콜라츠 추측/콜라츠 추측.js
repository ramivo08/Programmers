function solution(num) {
    var answer = 0;
   
   while(num != 1){
       
       if(num % 2 == 0){
            num /= 2;   
       }
       else{
            num = num*3+1;   
       }
       answer++;
       
       if(answer >= 500){
           answer = -1;
           break;
       }
       
   }
    
    return answer;
}



//다른 사람 풀이
//function collatz(num) {
//    var answer = 0;
//    while(num !=1 && answer !=500){
//        num%2==0 ? num = num/2 : num = num*3 +1;
//    answer++;
//  }
//    return num == 1 ? answer : -1;
//}