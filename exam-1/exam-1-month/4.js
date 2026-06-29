function isPalindrome(word){
    return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
};

console.log(isPalindrome(`laziz`));
console.log(isPalindrome(`aziza`));
