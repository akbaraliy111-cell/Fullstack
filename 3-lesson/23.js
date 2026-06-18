// 23. Ikki son va amal (+, -, *, /) berilgan. switch yordamida natijani hisoblang.
const son1 = 10, son2 = 5, amal = "+";
switch(amal) {
    case "+": console.log(son1 + son2); break;
    case "-": console.log(son1 - son2); break;
    case "*": console.log(son1 * son2); break;
    case "/": console.log(son2 !== 0 ? son1 / son2 : "0 ga bo'lib bo'lmaydi"); break;
    default: console.log("Noto'g'ri amal");
}