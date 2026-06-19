function firstUnique(arr) {
  const map = new Map();

  for (let i of arr) {
    let count = 0;
    for (let j of arr) {
      if (i === j)  count++;
    }
    map.set(i, count);
  }
  for (let [i, j] of map.entries()) {
    if (j === 1)  return i;
  }
  return null;
}

const arr = ["a", "b", "z", "a", "b"];
console.log(firstUnique(arr));