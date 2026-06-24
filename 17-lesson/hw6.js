function isArmstrong(n){
    const degree = String(n).length;
    
    let sum = 0;
    let temp = n
    while(temp){
        let lastD = Math.floor(temp % 10);
        sum += lastD ** degree
        temp = temp / 10;
    };
    return sum === n;
};

console.log(isArmstrong(8208));