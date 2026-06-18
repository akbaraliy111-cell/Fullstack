function swapStartToEnd(num){
    let str = String(num);

    let end = str[0]
    let start = str[str.length - 1]
    return start + str.slice(1, str.length - 1) + end;
}

console.log(swapStartToEnd(12345));
