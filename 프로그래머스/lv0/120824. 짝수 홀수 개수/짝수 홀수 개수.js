function solution(num_list) {
    var answer = [];
    var even = [];
    
    for(var i=0; i<num_list.length; i++){
        if(num_list[i]%2==0){
           even.push(i);//ㅑ번째 원소? 짝수 배열에 넣기
        }
           
    }
    
    return answer=[even.length, num_list.length - even.length];
    //짝수개수, 정수가 담긴 num_list.length - 짝수 even.length
}