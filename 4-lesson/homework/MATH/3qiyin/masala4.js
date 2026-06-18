let nums = []

for (let i = 0; i < 3; i++){
    nums.push(Math.floor(Math.random() * 101 - 50))
}

console.log(Math.max(...nums))