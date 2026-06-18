const kitoblar = [
  { nomi: "O'tkan kunlar", muallif: "Abdulla Qodiriy" },
  { nomi: "Sarob", muallif: "Abdulla Qahhor" },
  { nomi: "Shum bola", muallif: "G'afur G'ulom" },
];

const holat = new WeakMap();

holat.set(kitoblar[0], "O'qilgan");

console.log(holat.get(kitoblar[0]));