function isPalindrome(num){
    return num.toString().split("").reverse().join("") === num.toString()
}

console.log(isPalindrome(11211));