function findLongestWord(text){
    let words = text.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

let text = "aaa bbb wwww dddd uzbek";

console.log(findLongestWord(text)); 