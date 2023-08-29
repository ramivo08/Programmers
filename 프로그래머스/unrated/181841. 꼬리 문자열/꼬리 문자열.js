function solution(str_list, ex) {
    
    var answer = '';
    for(var i=0; i<str_list.length; i++){
        if(!str_list[i].includes(ex)){
            //str_list에 ex를 포함하지 않을때!
            answer += str_list[i];
            //answer에 str_list를 누적한다.
        }
    }
    return answer;
}