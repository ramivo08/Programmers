function solution(slice, n) {
    var answer = 0;
    
    if(n % slice == 0){
        return answer =n / slice;
    }else{
        return answer = Math.floor(n / slice)+1;
    }
    return answer;
}