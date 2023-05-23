function solution(numbers) {
    var answer = 0;
    
    for(var i=0; i<10; i++){ //9까지 반복해야 하므로 
        if(!numbers.includes(i)) //i가 numbers에 포함되지 않으면
        answer+=i;//누적한다
    }
    
    return answer;
}