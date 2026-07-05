a = false, b = true, c = false;

console.log(a || b && !c );

// 1) &&      2) !        3) ||

// 1) true va !false
// 2) true va true           => true
// 3) false yoki true        => true
