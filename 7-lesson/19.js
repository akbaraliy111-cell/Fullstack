const xodimlar = [
  { ism: "Jasur", lavozim: "Dasturchi" },
  { ism: "Malika", lavozim: "Dizayner" },
  { ism: "Sardor", lavozim: "Menejer" },
];

const maxfiyID = new WeakMap();

for (let xodim of xodimlar){
    maxfiyID.set(xodim, Math.random().toString(36).slice(2, 8))
}

console.log(maxfiyID.get(xodimlar[0]));
