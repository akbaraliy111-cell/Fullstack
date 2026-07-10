function minMax(arr){
    let max = 0;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
            if (min > arr[i]){
                min = arr[i];
            }
            if (max < arr[i]){
                max = arr[i];
        }
    }
    return {minimum: min, maximum: max};
};
console.log(minMax([3, 7, 1, 9, 4, 10, -1, 101]));
console.log(minMax([301]));