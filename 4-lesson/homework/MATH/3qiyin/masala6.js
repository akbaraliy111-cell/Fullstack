function isFizzBuzz(num){
    return !(num % 3) && !(num % 5)
}

let num = Math.floor(Math.random() * 101 + 1)

console.log(isFizzBuzz(num), num)