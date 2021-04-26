function search(array, n){
    var L=0
    var R= array.length-1
    var M= Math.floor((L+R)/2)
    if(n> array[R] || n< array[L])
        return -1
    while((R-L+1)> 2){
        if(n> array[M]){
            L= M+ 1
        }else if(n < array[M]){
            R= M- 1
        }else
            return M
        M=  Math.floor((L+R)/2)
    }
    for(var i= L; i<= R; i++){
        if(array[i]=== n)
            return i
        else 
            return -1 
    }
}
console.log(search([1, 3, 10, 14, 39], 14))
console.log(search([1, 3, 10, 14, 39], 299))
