function deepReverse(arr) {
  for (let i of arr) {
    if (Array.isArray(i)) {
      deepReverse(i);
    }
  }
  return arr.reverse();
}

console.log(deepReverse([1, [2, [3, 4]]]));