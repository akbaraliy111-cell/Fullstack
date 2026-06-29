function caesarCipher(str, shift){
    let shifr = ''
    for (let i of str){
        if (i.charCodeAt() <= 122 && i.charCodeAt() >= 97){
            let temp = i.charCodeAt() + shift;
            if (temp <= 122){
                shifr += String.fromCharCode(temp)
            } else {
                shifr += String.fromCharCode(97)
            }
            
        };
    };
    return shifr;
};
console.log(caesarCipher("abc", 1 ));
console.log(caesarCipher("xyz", 1 ));
console.log(caesarCipher("salom", 3));
console.log(caesarCipher("a b c", 2 ));