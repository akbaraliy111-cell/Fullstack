function mapQil(arr){
    const result = new Map();

    for (let i of arr)
        result.set(i[0], i[1])

    return result
}


const users = [
    ["ali", 20],
    ["vali", 23],
    ["hasan", 19],
    ["husan", 25],
    ["aziza", 22]
];

console.log(mapQil(users))