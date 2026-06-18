(function (arr){
    const result = new Map();

    for (let i of arr)
        result.set(i, i**2)

    console.log(result)

}([1,2,3,4,5]))

