function solution(seoul) {
    //틀렸던이유: Kim 을 소문자로 썼기때문..
//    var answer = '';
    
//    for(var i=0; i<seoul.length; i++){
 //      if(seoul[i] === 'Kim') {
 //          answer = "김서방은 " +i+ "에 있다";
 //      }
 //   }
 //   return answer;
    
    var idx = seoul.indexOf('Kim');
   
    return "김서방은 " + idx + "에 있다";

    
}