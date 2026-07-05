function isFizzBuzz(num){
    for (let i = 2; i < num/2; i++){
        if (num % i == 0) return false
    }
    return num !== 1
}

let num = Math.floor(Math.random() * 100 + 1)

console.log(isFizzBuzz(num), num)