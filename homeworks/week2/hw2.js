function capitalize(str) {
    var returnStr= "";
    for(var i=0 ;i< str.length; i++){
        if(i==0){
            if(str[i].charCodeAt(0)> 60 && str[i].charCodeAt(0)<123)
                returnStr+= str[i].toUpperCase();
            else
                returnStr+= str[i];
        }else
            returnStr+= str[i];
    //console.log(str[0].toUpperCase());
    }
    return returnStr;
}

console.log(capitalize('hello'));
console.log(capitalize(',hello'));
console.log(capitalize('Nick'));
console.log(capitalize('nick'));