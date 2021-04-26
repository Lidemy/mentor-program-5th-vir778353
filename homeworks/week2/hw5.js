function join(arr, concatStr) {
    var joinStr= "";
    for(var i=0; i< arr.length; i++){
        i=== (arr.length-1) ? joinStr+= arr[i] : joinStr+= arr[i]+ concatStr
        // if(i=== (arr.length-1))
        //     joinStr= joinStr+ arr[i];
        // else
        //     joinStr= joinStr+ arr[i]+ concatStr;
    }
    return joinStr;
}

function repeat(str, times) {
    var repeatStr= "";
    for(var i= 0; i< times; i++){
        repeatStr+= str;
    }
    return repeatStr;
}

console.log(join(['a'], '!'));
console.log(repeat('yoyo', 5));
console.log(join(["a", 1, "b", 2, "c", 3], ','));