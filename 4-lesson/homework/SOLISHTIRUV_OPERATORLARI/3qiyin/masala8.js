let a = NaN;

console.log(a == a);

console.log(Object.is(a,a))

// default rule
// NaN === NaN         false
// Object.is(NaN, NaN) true

// 0 === -0            true
// Object.is(0, -0)    false

// qolgan payit Object.is() ni === dan farqi yo'q