//map 사용 - 다른사람 풀이 참조
function solution(arr) {
    return arr.map(a => {
        if(a >= 50 && a %2 ===0) return Math.floor(a/2)
        if(a < 50 && a %2 === 1) return a*2
        return a
    })
}