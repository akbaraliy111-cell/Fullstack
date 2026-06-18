const date = new Date();
const birthdayDate = new Date("2006-05-01");

const age = (date - birthdayDate) / (1000 * 60 * 60 * 24);

console.log(`${Math.floor(age)} kun yashagan!`);