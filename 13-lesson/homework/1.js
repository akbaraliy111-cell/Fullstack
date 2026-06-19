function countVowels(text) {
  const obj = {};
  let vowels = "euioaEUIOA";
  for (let i of text.split(" ")) {
    let count = 0;
    for (let s of i.split("")) {
      if (vowels.includes(s)) {
        count++;
      }
    }
    obj[i] = count;
  }
  return obj
}

let text = "Salom Dunyo, Uzbekiston";
console.log(countVowels(text));