function daysBetween(date1, date2){
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return Math.abs((d1 - d2) / (1000*60*60*24));
};

console.log(daysBetween("2025-01-01", "2025-01-10"));
console.log(daysBetween("2025-03-10", "2025-03-01"));