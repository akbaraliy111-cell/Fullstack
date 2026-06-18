function daysUntilEndOfMonth() {

  let today = new Date(); 

  let lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  let diffMs = lastDay - today; 

  let diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  return diffDays;
}

console.log(daysUntilEndOfMonth()); 