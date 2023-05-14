function solution(x) {
    var answer = 0;
    
    var num = x.toString().split('');
     
    for(var i=0; i<num.length; i++){
      answer+=  Number(num[i])
    }
    
    return (x % answer == 0) ? true : false;
}