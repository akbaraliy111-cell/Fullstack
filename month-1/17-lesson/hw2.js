function isPrime(n){
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++){
        if (n % i === 0) return false;
    };
    return true
};

function primeNumbers(a, b){
    const primes = [];
    if (a < b){
        for (a; a <= b; a++){
            if(isPrime(a)){
                primes.push(a);
            };
        };
    } else {
        for (a; a >= b; a--){
            if(isPrime(a)){
                primes.push(a);
            };
        };
    };
    return primes;
};

console.log(primeNumbers(5, 19))
console.log(primeNumbers(20, 5))