function reverse(str) {
    var reverseStr= "";
    for(var i=0; i< str.length; i++){
        reverseStr= str[i]+ reverseStr;
    }
    console.log(reverseStr);
}

reverse('hello');
reverse('yoyoyo');
reverse('1abc2');
reverse('1,2,3,2,1');