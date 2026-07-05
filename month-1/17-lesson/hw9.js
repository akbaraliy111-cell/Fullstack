function engKopTakror(str) {
    const obj = {};
    for (let i of str){
        if (i in obj){
            obj[i] += 1;
        } else {
            obj[i] = 1;
        };
    };
    maxValue = 0;
    maxKey = "";
    for (let i in obj){
        if (obj[i] > maxKey){
            maxValue = obj[i];
            maxKey = i;
        };
    };

    return maxKey;
};


console.log(engKopTakror([1, 2, 2, 3, 2]));