function solution(s){
 // p 개수 == y true, p != y false
    
    var p_cnt =0;
    var y_cnt =0;
    
    for(var i=0; i < s.length; i++){
        if(s[i] == 'p' || s[i] == 'P'){
            p_cnt++;
        }if(s[i] == 'y' || s[i] == 'Y'){
            y_cnt++;
        }
    }
    

    return p_cnt == y_cnt ? true : false;
}