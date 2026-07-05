const nimadur = function(map1, map2){
    const result = []
    if (map1.size > map2.size){
        for (let i of map1)
            if (map2.has(i[0]))
                result.push(i[0]) 
    }else {
        for (let i of map1)
            if (map2.has(i[0]))
                result.push(i[0])
    }
    
    return result
}




const map1 = new Map([
    ["Ali", 20],
    ["Vali", 25],
    ["Hasan", 18],
    ["Husan", 30],
    ["Aziza", 22]
]);

const map2 = new Map([
    ["Vali", 90],
    ["Hasan", 85],
    ["Aziza", 95],
    ["Sardor", 88],
    ["Madina", 91]
]);

console.log(nimadur(map1, map2))