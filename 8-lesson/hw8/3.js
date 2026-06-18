const bugun = new Date();
const yangiYil = new Date(bugun.getFullYear() + 1, 0, 1);
const farqMs = yangiYil - bugun;
const kunlar = Math.ceil(farqMs / (1000 * 60 * 60 * 24));
console.log(`Yangi yilgacha ${kunlar} kun qoldi`);