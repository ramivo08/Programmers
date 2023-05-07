function solution(num_list) {
    var answer = 0;
    var sum = 0;
    var mul = 1;
   
    for(var i=0; i < num_list.length; i++){
        if(num_list.length >= 11 ){
        sum+=num_list[i]
        answer=sum;
        }
        else{
        mul*=num_list[i]
        answer=mul;     
        }
       
        
    }
    return answer;
}