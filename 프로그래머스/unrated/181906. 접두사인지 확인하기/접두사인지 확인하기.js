//삼항연산자로 풀이
//function solution(my_string, is_prefix) {

//     return my_string.indexOf(is_prefix) == 0? 1: 0;
//}




function solution(my_string, is_prefix) {    
    for(var i=0; i<is_prefix.length; i++){
        if(my_string[i] != is_prefix[i])
            return 0;
    }
    return 1;
}