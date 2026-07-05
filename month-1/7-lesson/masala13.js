(function(arr){
    const set1 = new Set(arr);

    console.log(set1.size !== arr.length)

}([1,2,3,4,4,3]))