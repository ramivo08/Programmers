function solution(phone_number) {
    var answer = '';
  //  var num = Number(phone_number);
 //   console.log(num);
    
    for(var i=0; i<phone_number.length; i++){
       if(i < phone_number.length-4){
           answer = answer+"*";
       }
        else{
            answer = answer+phone_number[i]
        }
    }
    return answer;
}