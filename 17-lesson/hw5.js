function fibonacci(n){
    let fib = [0];
    let f1 = 1, f2 = 0, f3 = 0;
    while(f3 <= n){
        f2 = f1 + f3;
        f3 = f1;
        fib.push(f3);
        f1 = f2;
    }
    return fib    
};

console.log(fibonacci(7));