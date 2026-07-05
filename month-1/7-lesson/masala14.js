function arrs(arr1, arr2){
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    if (set1.size !== set2.size)
        return false

    for (let i of set1)
        if (!(set2.has(i)))
            return false

    return true 
}

console.log(arrs([1,2,3,4,5],[1,2,3,4,5,6]))