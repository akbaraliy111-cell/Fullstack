// 21. Berilgan yil kabisa yili ekanligini aniqlang.
const yil = 2024;
console.log((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0 ? "Kabisa yili" : "Kabisa yili emas");