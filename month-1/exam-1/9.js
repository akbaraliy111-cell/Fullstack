function isAnagram(a, b){
    return a.split("").sort().join("") === b.split("").sort().join("")
};
console.log(isAnagram("olma", "mola"));
console.log(isAnagram("listen", "silent"));
