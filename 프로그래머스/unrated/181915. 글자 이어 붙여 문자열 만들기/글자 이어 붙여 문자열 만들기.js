function solution(my_string, index_list) {
    var answer = '';
   
    console.log(typeof(my_string));
    for(var i=0; i<index_list.length; i++){
       // answer += my_string[index_list[i] ] ;
         //문자열[index] 대괄호 인덱스를 활용하여 index의 문자를 가져올수있다?
       
        //또는 charAt() 이라는 함수를 사용할 수 있다.
        answer += my_string.charAt(index_list[i]);
       
    }
    return answer;
}