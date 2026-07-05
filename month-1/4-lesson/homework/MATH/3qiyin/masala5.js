let sum = 0;

for (let i = 0; i < 5; i++){
    sum += Math.floor(Math.random() * 101 - 50)
}

console.log((sum / 5).toFixed(2))