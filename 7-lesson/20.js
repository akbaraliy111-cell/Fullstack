const mahsulotlar = [
  { nomi: "Telefon", narx: 5000000 }
];

const chegirma = new WeakMap();

chegirma.set(mahsulotlar[0], 10);

const result = mahsulotlar[0].narx - (mahsulotlar[0].narx * chegirma.get(mahsulotlar[0]) / 100)
console.log(result);
