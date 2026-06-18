function nameIs(phones, phone){
    for (let i of phones){
        if (i[1] == phone)
            return i[0]
    }
}






const phones = new Map([
    ["Ali", "+998901112233"],
    ["Vali", "+998902223344"],
    ["Hasan", "+998903334455"],
    ["Husan", "+998904445566"],
    ["Aziza", "+998905556677"]
]);

console.log(nameIs(phones, "+998903334455"))