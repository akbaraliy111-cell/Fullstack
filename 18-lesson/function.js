// 1-masala Salomlashish
function sayHi(name){
    console.log(`Salom, ${name}!`);
};
// sayHi("Parviz aka");

// 2-masala Kvadrat
function square(n){
    return n * n;
};

// 3-masala Ikki sonni qo'sh
const plus = (a, b) => {return a + b};

// 4-masala Juft yoki toq 
function evenOdd(n) {
    return  n % 2 === 1 ? "Toq" : "Juft";
};

// 5-masala 
function maksimum(...n){
    return Math.max(n);
};
// console.log(maksimum([1,2,3]));

// 6-masala
function sayHi2(name="Mehmon"){
    console.log(`Salom, ${name}!`);
};

// 7-masala Konvertatsiya
function toMetr(n){
    return n / 100;
};
// console.log(toMetr(150));

// 8-masala Faktorial
function fak(n){
    let sum = 1;
    for (i = 1; i <= n; i++){
        sum *= i
    };
    return sum;
};
// console.log(fak(5));

// 9-masala Rest parametr
function sum(...numbers){
    return numbers.reduce((a, b) => a + b);
};
// console.log(sum(1,2,3,4,5));

// 10-masala
function callback(array, func){
    for (let i in array){
        array[i] = func(array[i]);
    };
    return array
};
// console.log(callback([1,2,3], square));

// 11-masala Palindrom tekshir
function palindrom(word){
    return word === word.split("").reverse().join("");
};
// console.log(palindrom("kapak"));

// 12-masala Yuqori tartibli funksiya
function multi(a){
    return function mult(b = 2){
        return a * b;
    };
};
// const c = multi(5);
// console.log(c())