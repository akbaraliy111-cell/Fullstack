function findEKUB(n1, n2){
    let ekub = 1;
    for (let i = 0; i <= n1; i++){
        if (n1 % i === 0 && n2 % i === 0){
            ekub = i;
        }
    }
    return ekub;
};

console.log(findEKUB(30, 10));
console.log(findEKUB(27, 12));
