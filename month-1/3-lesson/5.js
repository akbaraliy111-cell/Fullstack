function countSpace(text){
    let count = 0;
    for (let i in text){
        if (text[i] === " "){
            count ++;
        }
    }
    return count;
}

console.log(countSpace(` Assalom solim solim `));