(function(arr, arr1){
    const set1 = new Set(arr);
    const result = []

    for (let i of set1)
        if (arr1.includes(i))
            result.push(i)

    console.log(result)

}([1,2,3,4,4],[2,3,5,6,7]))