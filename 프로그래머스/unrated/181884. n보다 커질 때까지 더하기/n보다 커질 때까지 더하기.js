function solution(numbers, n) {
   
    var sum =0;
    
    for(var i=0; i<numbers.length; i++){
        sum += numbers[i]
       // console.log(sum);
        if(sum > n){
            break;
            
        }
    }
    return sum
    
}