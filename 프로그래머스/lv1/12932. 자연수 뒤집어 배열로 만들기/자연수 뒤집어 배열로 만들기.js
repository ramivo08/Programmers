function solution(n) {
    var answer = [];
    var arr = n.toString().split(''); //문자열로 만들어서 넣기
    
    
    for(var i=0; i<arr.length; i++){
        
        answer.push(Number(arr[i]));//다시 숫자형으로! split의 구분자와 같이 들어감
    }
    
    return answer.reverse();
}