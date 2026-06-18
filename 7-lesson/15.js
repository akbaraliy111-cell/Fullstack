function mostFrequent(arr) {
    let obj = {};
    for (let i of arr){
        if (i in obj){
            obj[i] += 1
        } else {
            obj[i] = 1
        }
    }
    let result = [true, 0]
    for (let i of Object.entries(obj)){
        if (result[1] < i[0]){
            result = i;
        } 
    }
    return result[0];
}

console.log(mostFrequent([1,2,3,1,2,1]));
