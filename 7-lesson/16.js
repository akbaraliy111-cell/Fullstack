function mostFrequent(arr) {
    let obj = {};
    for (let i of arr){
        if (i in obj){
            obj[i] += 1
        } else {
            obj[i] = 1
        }
    }
    const result = []
    for (let i of Object.entries(obj)){
        if (i[1] === 1){
            result.push(i[0]);
        } 
    }
    return result;
}

console.log(mostFrequent([1,2,3,1,2,7,1]));
