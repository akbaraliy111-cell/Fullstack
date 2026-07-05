function anagramma(w1, w2){
    return w1.split("").sort().join("") === w2.split("").sort().join("")
}

console.log(anagramma(`salom`, `olam`));