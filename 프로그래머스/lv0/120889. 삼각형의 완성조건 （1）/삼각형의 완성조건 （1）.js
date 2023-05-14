function solution(sides) {
    var answer = 0;
    
   sides.sort((a,b) => a-b );

    return sides[0]+sides[1] > sides[2] ? 1:2;
}