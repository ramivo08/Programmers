function solution(arr) {
    var sum =0;
    
    for(var i=0; i<arr.length; i++){   
        sum += arr[i]
    }
    
    return  sum / arr.length;  
}



//function solution(arr) {
//    var sum =0;
//    var avg=0;
    
//    for(var i=0; i<arr.length; i++){   
//        sum += arr[i]
//    }
 //    avg = sum / arr.length;  
///    console.log(avg);
    
//    return avg;
//}