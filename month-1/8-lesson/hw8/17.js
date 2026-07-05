// Keyingi tug'ilgan kungacha qolgan kunlarni hisoblovchi funksiya
function daysUntilBirthday(birthDate) {

  let today = new Date();                  
  let birth = new Date(birthDate);         

  let nextBirthday = new Date(
    today.getFullYear(), 
    birth.getMonth(),    
    birth.getDate()      
  );

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  let diffMs = nextBirthday - today;
  let diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24)); 

  return diffDays;
}

console.log(daysUntilBirthday("2006-05-01"));