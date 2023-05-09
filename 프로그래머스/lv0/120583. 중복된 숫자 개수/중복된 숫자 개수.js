function solution(array, n) {
    var arr = [];
    
   for(var i=0; i<array.length; i++){
        if(array[i] === n){
            arr.push(array[i]);
        }
    }
    return arr.length;
}