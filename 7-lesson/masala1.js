function maxScore(oMap){
    let maxS;

    for (let i of oMap.entries()){
        maxS = i;
        break;
    }
    
    for (let i of oMap.entries())
        if (i[1] > maxS[1]) maxS = i;

    return maxS
}


const students = new Map([
    ["Ali", 780],
    ["Vali", 902],
    ["Hasan", 85],
    ["Husan", 97],
    ["Aziza", 90]
]);

console.log(maxScore(students))