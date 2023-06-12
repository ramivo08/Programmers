function solution(rny_string) {
    var answer = rny_string.split("");
    console.log(answer);//	[ 'b', 'u', 'r', 'n' ]
    var str = ''; 

    for(var i=0; i<answer.length; i++){ //split으로 자른 문자들을 for문을 돌면서
        if(answer[i] === "m"){ //M과 같으면
            str += "rn"; //rn으로 대입?누적?할당??
        }else{
            str += answer[i] //M과 같은 경우가 아니라면 그냥 str로 리턴해준다
        }
    }
    return str;
}



//function solution(rny_string) {  
//    return rny_string.replaceAll("m","rn"); //처음에 replace만 사용해서 채점에서 틀림. replaceAll 사용
//}

