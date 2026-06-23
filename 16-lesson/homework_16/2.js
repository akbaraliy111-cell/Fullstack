function isAnagram(w1, w2){
    return w1.split("").sort().join("") === w2.split("").sort().join("")
}

console.log(isAnagram('listen', 'silent'));