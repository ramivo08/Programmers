function solution(n) {
   var answer = 0;
    
    for(var i=1; i*i<=n; i++){
         
        if(i*i == n){
          answer=  (i+1)*(i+1);
        }
        else   
        answer = -1;

    }
    
    return answer;
}




//채점시 18번만 틀림
//function solution(n) {
//   var answer = 0;
    
//    for(var i=0; i<n; i++){
         
//        if(i*i == n){
//          answer=  (i+1)*(i+1);
//            return answer;
            
//        }
//        else if(i*i > n){
           
//            answer = -1;
//            break;
//            return answer;
//        }
//    }
    
//    return answer;
//}