function countWeeks(date1, date2) {
  
  let start = new Date(date1); 
  let end = new Date(date2);   

  let diffMs = Math.abs(end - start);
 
  let diffDays = diffMs / (1000 * 60 * 60 * 24); 
  let weeks = Math.floor(diffDays / 7);

  return weeks;
}

console.log(countWeeks("2025-01-01", "2025-12-31"));