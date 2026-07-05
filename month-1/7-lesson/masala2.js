const yuzdanKop = function(products){
    const arr = [];

    for (let i of products)
        if (i[1] > 100) arr.push(i[0])

    return arr

}




const products = new Map([
    ["Non", 30],
    ["Sut", 25],
    ["Go'sht", 180],
    ["Pishloq", 120],
    ["Shakar", 45],
    ["Yog'", 110],
    ["Olma", 20]
]);

console.log(yuzdanKop(products))