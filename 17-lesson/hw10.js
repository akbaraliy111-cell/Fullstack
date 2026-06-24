function harfChastotasi(str) {
    const obj = {};
    for (let i of str){
        if (i in obj){
            obj[i] += 1;
        } else {
            obj[i] = 1;
        };
    };
    return obj
};


console.log(harfChastotasi("aab"));