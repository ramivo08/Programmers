function solution(num_list) {
    var answer = 0;
    var odd='';
    var even='';
    
    for(var i=0; i<num_list.length; i++){ //num_list의 길이만큼 순회
        if(num_list[i] % 2 == 0){ //num_list 짝수이면
            even += String(num_list[i]);
            //짝수변수에 num_list[i]를 더해준다. 숫자로 더하는것이 아니므로 String으로 문자열로 형변환
        }else if(num_list[i] % 2 !=0){
            odd += String(num_list[i]);
        }
    }
    answer = parseInt(even) + parseInt(odd); //구해준 값을 정수형으로 바꾸어 짝수와 홀수를 더하여 answer에 할당
    return answer;
}