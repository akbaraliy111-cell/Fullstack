function twoSum(arr, target){
    let index = [];
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr.length; j++)
            if ((arr[i]+arr[j]) === target){
                index.push(i);
                index.push(j);
                return index;
            }
}

console.log(twoSum([2,7,1,8], 9));