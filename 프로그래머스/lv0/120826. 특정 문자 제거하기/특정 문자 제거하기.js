function solution(my_string, letter) {

    return my_string.replaceAll(letter,""); //replace로 했을때는 실패..
    
    //다른사람 풀이
    // return my_string.split(letter).join('');
}


  //  var answer = '';
    
 //   for(var i=0; i<my_string.length; i++){
 //       if(my_string[i]===letter){
  //        my_string.replace(letter,'');
  //      }
       
 //   }
 //       return answer;
//}