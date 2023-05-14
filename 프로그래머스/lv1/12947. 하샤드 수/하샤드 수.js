function solution(x) {
    var answer = 0;
    
    var num = x.toString().split(''); //number형인 x를 문자열로 만들고 구분자로 잘라 num에 대입
     
    for(var i=0; i<num.length; i++){ 
      answer+=  Number(num[i]) //num의 i번째를 다시 숫자형으로 바꾸고 answer에 넣어 누적하여 더한다.
    }
    
    return (x % answer == 0) ? true : false; 
    //x의 숫자가 answer와 나뉘어 떨어지면 true, 나누어떨어지지 않으면 하샤드수가 아니므로 false
}