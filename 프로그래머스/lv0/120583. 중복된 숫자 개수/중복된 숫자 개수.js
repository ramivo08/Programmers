function solution(array, n) {
    var arr = [];
    
   for(var i=0; i<array.length; i++){
        if(array[i] === n){
           arr.push(array[i]);
        }
    }
    return arr.length;
}



//function solution(array, n) {
//    var answer = 0;
    
//   for(var i=0; i<array.length; i++){
//        if(array[i] === n){
//           answer++;
//        }
//    }
//    return answer;
//}