function isPbH(num){
    return num ** 2 > 100;
}

let num = Math.floor(Math.random() * 101 + 1)

console.log(isPbH(num), num)