// Yil va oy qabul qiluvchi funksiya
function countSundays(year, month) {
  let count = 0; 

  let date = new Date(year, month - 1, 1);


  while (date.getMonth() === month - 1) {
    if (date.getDay() === 0) { 
      count++; 
    }
    date.setDate(date.getDate() + 1);
  }

  return count; 
}

console.log(countSundays(2027, 1));  