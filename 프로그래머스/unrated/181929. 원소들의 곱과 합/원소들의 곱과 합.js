function solution(num_list) {
    var answer = 0;
    var sum=0; //원소들의 합
    var mul=1; //원소들의 곱
    
    for(var i=0; i<num_list.length; i++){
        sum += num_list[i]
        mul *= num_list[i]
    }
     console.log(sum*sum);
     console.log(mul);
    
    if(sum * sum > mul){
        answer = 1; //합의 제곱보다 작으면 1리턴
    }
    
    return answer;
}