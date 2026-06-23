const words = ['banana', 'hello', 'earth', 'python'];

const result = words.reduce((a,b) => a.length >= b.length ? a : b);

console.log(result);