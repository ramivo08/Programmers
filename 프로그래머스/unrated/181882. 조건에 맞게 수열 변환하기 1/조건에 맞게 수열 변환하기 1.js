//map 사용 - 다른사람 풀이 참조
//function solution(arr) {
//    return arr.map(a => {
//        if(a >= 50 && a %2 ===0) return Math.floor(a/2)
//        if(a < 50 && a %2 === 1) return a*2
//        return a
//    })
//}

function solution(arr){
    var answer = [];
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 50 && arr[i] % 2 != 0){
            answer.push(arr[i]*2)
        }else if(arr[i] >= 50 && arr[i] % 2 == 0){
            answer.push(arr[i]/2)
        }else{
            answer.push(arr[i])
        }
    }
    return answer;
}