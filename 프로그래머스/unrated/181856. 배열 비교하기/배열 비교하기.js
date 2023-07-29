function solution(arr1, arr2) {
    var sum1 =0;
    var sum2 =0;
    
    for(var i=0; i<arr1.length; i++){
        sum1 += arr1[i];
    }
    for(var i=0; i<arr2.length; i++){
        sum2 += arr2[i];

    }

//채점시 테스트 16,17에서 통과 안됨.
//    if(arr1.length > arr2.length || (arr1.length == arr2.length && sum1 > sum2)){
//        return 1;
//    }else if(arr1.length < arr2.length || (arr1.length == arr2.length && sum1 < arr2)){
//        return -1;
//    }else{
//        return 0;
//    }
//}

    
    if(arr1.length < arr2.length){
        return -1;
    }else if(arr1.length > arr2.length){
        return 1;
    }else{
        if(sum1 > sum2){
            return 1;
        }else if(sum1 < sum2){
            return -1;
        }else{
            return 0;
        }
    }
}
