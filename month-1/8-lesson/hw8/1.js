const bugun = new Date();

const yil = bugun.getFullYear();
const oy = bugun.getMonth();

const kun = new Date(yil, oy + 1, 0);

console.log(`Joriy oyda ${kun.getDate()} kun bor`);