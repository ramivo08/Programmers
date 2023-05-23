function solution(absolutes, signs) {
    var answer = 0;
    
    for(var i=0; i<absolutes.length; i++){
        signs[i] ? answer+=absolutes[i] : answer-=absolutes[i];
    }    
    return answer;
    
}



//for(var i=0; i<absolutes.length; i++){
//        if(signs[i] == true){
//            answer = answer+ absolutes[i];
//        }
//        else{
 //            answer = answer- absolutes[i];
//        }
      
//    }
//    return answer;
//}