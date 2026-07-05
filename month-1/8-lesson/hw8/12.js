const year = 2026;
const firstDay = new Date(year, 0, 1).getDay(); 

const days = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];

console.log(days[firstDay]);