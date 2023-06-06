function solution(num_list) {
    var answer = 0;
    
    for(var i=0; i<num_list.length; i++){
        if(0 > num_list[i]){
            answer = i;
            break;
        }else{
            answer = -1;
        }
    }
    return answer;
}