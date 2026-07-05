function toTitle(text){
    let words = text.split(" ")
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words;
}

let text = `javascript backend developer`;
console.log(toTitle(text));
