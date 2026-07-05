function nextMonday(date) {

  let current = new Date(date);
  do {
    current.setDate(current.getDate() + 1);
  } while (current.getDay() !== 1);
  
  return current.toDateString(); 
}

console.log(nextMonday("2026-06-12"));