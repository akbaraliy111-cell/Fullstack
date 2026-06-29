function wordFrequency(text){
    const object = {};
    const array = text.split(" ");
    for (let i of array){
        if (i in object){
            object[i] += 1;
        } else {
            object[i] = 1;
        };
    };
    return object;
};

console.log(wordFrequency("olma olma anor olma anor"));