function countVowels(str){
    let count = 0;
    for (let i of str){
        if ('euioaEUIOA'.includes(i)){
            count++;
        };
    };
    return count;
};
console.log(countVowels("vaLI"));