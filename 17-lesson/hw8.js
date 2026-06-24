function noyob(arr){
    return [...new Set(arr)]
};

console.log(noyob([5, 5, 5]));