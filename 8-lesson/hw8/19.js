function previousFriday(date) {

  let current = new Date(date); 
  do {
    current.setDate(current.getDate() - 1); 
  } while (current.getDay() !== 5); 

  return current.toDateString(); 
}

console.log(previousFriday("2026-06-12"));