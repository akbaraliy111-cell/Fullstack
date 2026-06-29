function sumEvenOdd(arr) {
    let odd = 0, even = 0;
    for (let i of arr) {
        if (i % 2 === 0){
            even += i;
        } else {
            odd += i;
        };
    };
    return {Juftlar: even, Toqlar: odd};
};
console.log(sumEvenOdd([1, 2, 3, 4, 5, 6]));