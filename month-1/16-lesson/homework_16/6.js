function moveZeroes(arr){
    const array = [];
    const zeroes = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0) zeroes.push(arr[i]);
        else array.push(arr[i]);
    };
    return array.concat(zeroes);
};

console.log(moveZeroes([0,1,0,3,12]));