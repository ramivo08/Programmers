function solution(numbers) {
    var answer = 0;
    var max =0;
    
    for(var i=0; i<numbers.length; i++){
        for(var j=i+1; j<numbers.length; j++){
            if(numbers[i]*numbers[j] > max){
                max = numbers[i]*numbers[j]
            }
        }
    }
    
    return max;
}