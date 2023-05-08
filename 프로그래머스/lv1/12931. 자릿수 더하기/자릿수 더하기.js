function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    //console.log('Hello Javascript')
   
   // answer= '1'+'2'+'3';
    console.log(`value:${n} , type:${typeof n}`); //n의 타입은 number
   
    var _n = n.toString(); //숫자인 n의 type을 string으로 바꿔준다.
    
    for(var i=0; i<_n.length; i++){
       
        answer += parseInt(_n[i]); //문자열을 숫자로 출력되도록 타입을 바꿔주고 answer에 자릿수를 차례로 더한다.
    }

    return answer;
}