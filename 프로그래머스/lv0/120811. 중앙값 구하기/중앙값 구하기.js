
function solution(array) {
    
   array.sort((a,b) => a-b);
   var arr = parseInt(array.length/2); //배열의 길이가 홀수이면 /2 했을때 소수점이 생기므로 parseInt로 형변환
    return array[arr];
}