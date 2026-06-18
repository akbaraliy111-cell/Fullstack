const oylar = [
    "Yanvar", "Fevral", "Mart", 
    "Aprel", "May", "Iyun",
    "Iyul", "Avgust", "Sentabr", 
    "Oktabr", "Noyabr", "Dekabr"];

const sana = new Date();

console.log(oylar[sana.getMonth()]);
