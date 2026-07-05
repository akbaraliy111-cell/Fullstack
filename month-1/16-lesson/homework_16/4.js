function reverseString(str){
    let array = [];
    for (let i = str.length -1; i >= 0; i--){
        array.push(str[i]);
    }
    return array.join("")
}

console.log(reverseString('hello')) 