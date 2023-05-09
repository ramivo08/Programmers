function solution(n) {
    var answer = [];
    var arr = n.toString().split(''); //n은 숫자열이다. 배열 형태로 리턴하기 이해서 문자열로 만들기
    
    
    for(var i=0; i<arr.length; i++){
        
        answer.push(Number(arr[i]));//다시 숫자형으로! split의 구분자와 같이 들어감
    }
    
    return answer.reverse(); //리턴할때 뒤집기
}