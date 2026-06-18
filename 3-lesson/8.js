function isUnique(num) {
    let str = String(num);
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            return false;
        }
        obj[str[i]] = true;
        
    }
    return true;
}

console.log(isUnique(12345)); 
console.log(isUnique(12341)); 