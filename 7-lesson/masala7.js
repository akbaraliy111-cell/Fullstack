const maxValue = (map) => {
    const obj = {}

    for (let i of map)
        if (i[1] in obj) 
            obj[i[1]] += 1;
        else 
            obj[i[1]] = 1;

    let maxV = [true, 0];

    for (let i of Object.entries(obj)){
        if (i[1] > maxV[1])
            maxV = i;
    }

    return maxV
}










const map = new Map([
    ["Ali", 90],
    ["Vali", 75],
    ["Hasan", 90],
    ["Husan", 75],
    ["Aziza", 75],
    ["Sardor", 90],
    ["Madina", 75]
]);

console.log(maxValue(map))