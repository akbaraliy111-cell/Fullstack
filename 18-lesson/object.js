// 1-masala Obyekt yaratish 
const talaba = {
    ism: "Akbar",
    yosh: 20,
    guruh: 'N29'
};
console.log(`Talaba ismi: ${talaba.ism}
Yoshi: ${talaba.yosh}
Guruhi: ${talaba.guruh}`);

// 2-masala Xossaga murojaat 
console.log(talaba.ism, talaba['ism']);

// 3-masala Yangi xossa qo'shish 
talaba.email = 'akbar@gmail.com';
console.log(talaba.email);

// 4-masala Xossani o'chirish 
delete talaba.guruh;
console.log(talaba);

// 5-masala Xossalar sonini sana
let cnt = 0; 
for (let i in talaba){
    cnt ++;
};
console.log(cnt);

// 6-masala Xossa bormi?
console.log('ism' in talaba);

// 7-masala Kalitlarni chiqar
console.log(Object.keys(talaba));

// 8-masala Qiymatlar yig'indisi
const numbers = {a:10,b:20,c:30};
const result = Object.values(numbers).reduce((a, b) => a + b);
console.log(result);

// 9-masala Obyektni teskari aylantir 
const teskari = {a:1,b:2};
for (let i in teskari){
    teskari[teskari[i]] = i;
    delete teskari[i];
};
console.log(teskari);

// 10-masala Ikki obyektni birlashtir
function merge(o1, o2){
    return {...o1, ...o2};
}
console.log(merge({a:1}, {b:2}));

// 11-masala Eng qimmat mahsulot 
function expensive(obj){
    let max = 0;
    for (let i in obj){
        if (obj[i] > max) max = obj[i]
    }
    return max;
};
console.log(expensive({a: 4, b: 3, c: 6}));

// 12-masala Obyektni nusxalash
const user = {name: 'Ali'};
const user1 = {...user};
user1.name = 'Vali';
console.log(user.name);

// 13-masala Qiymat bo'yicha qidir
function keyObj(obj, key){
    for (let i in obj){
        if(obj[i] === key) return i;
    };
    return "not found";
}
console.log(keyObj({a:5,b:9}, 9));

// 14-masala Xossalarni filtrla
function onlyNums(obj){
    for (let i in obj){
        if (!Number.isInteger(obj[i])){
            delete obj[i];
        };
    };
    return obj;
};
console.log(onlyNums({a:1,b:'x',c:3}));

// 15-masala Entries bilan ishlash 
for (let [k, v] of Object.entries(talaba)){
    console.log(`${k}: ${v}`);
};
