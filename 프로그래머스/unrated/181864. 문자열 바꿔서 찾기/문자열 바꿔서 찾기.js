function solution(myString, pat) {
    var answer = 0;
    var str = myString.split("");
    var str2 ="";
   
    for(var i=0; i<str.length; i++){
        if(str[i] === "A"){
            str[i] = "B"
        }else if(str[i] === "B"){
            str[i] = "A"
        }
        str2 += str[i];
        console.log('str2',str2);
    }
    
    if(str2.includes(pat)){
        answer=1;
    }
    return answer;
}