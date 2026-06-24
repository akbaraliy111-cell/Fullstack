function toBinary(num){
    let str = '';
    while(num){
        str += num % 2
        num = Math.floor(num / 2)
    };
    return str;
};

console.log(toBinary(6));