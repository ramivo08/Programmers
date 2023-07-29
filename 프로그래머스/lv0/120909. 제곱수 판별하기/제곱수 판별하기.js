function solution(n) {
    var answer=0;
    for(var i=1; i<1000000; i++){
        if(i*i==n){
            answer= 1;
            break;
        }else{
            answer= 2;
        }
    }
return answer;
}