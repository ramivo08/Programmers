function solution(arr) {
    
    if(arr.length ==1) //배열의 길이가 하나일때 -1 리턴
        return [-1];
    
    var i=0;
    for(var j=0; j<arr.length; j++){
        if(arr[i] > arr[j]){
            i=j;
        }
       
    }
     arr.splice(i,1);
    return arr;
}