function solution(dot) {
//x=dot[0] , y=dot[1]
    if(dot[0] > 0 && dot[1] >0){
        return 1;
    }else if(dot[0] < 0 && dot[1] > 0){
        return 2;
    }else if(dot[0] < 0 && dot[1] < 0){
        return 3;
    }else {
        return 4;
    }
    
}


   
//이중삼항연사자를 사용한 풀이
function solution(dot) {
 
    return dot[0] > 0? (dot[1] > 0 ? 1 : 4) : (dot[1] > 0 ? 2 : 3);
    // dot[0] > 0 일때(true), 즉 x좌표가 양수일때 dot[1](y좌표)의 값이 0보다 크면 1사분면, 아니면 4사분면
    // dot[0] > 0 아닐때(false), x좌표가 음수일때 dot[1](y좌표)의 값이 0보다 작으면 2사분면, 아니면 3사분면 
}