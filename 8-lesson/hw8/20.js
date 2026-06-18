function generateCalendar(year, month) {

  const monthNames = [
    "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
    "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
  ];

  const dayNames = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];

  let firstDay = new Date(year, month - 1, 1);

  let lastDate = new Date(year, month, 0).getDate();

  let startDay = (firstDay.getDay() + 6) % 7;

  console.log(`\n===== ${monthNames[month - 1]} ${year} =====`);
  console.log(dayNames.join("  ")); 
  console.log("");

  let row = ""; 


  for (let i = 0; i < startDay; i++) {
    row += "    ";
  }
  
  for (let day = 1; day <= lastDate; day++) {
    row += String(day).padStart(2, " ") + "  ";

    let currentDay = (startDay + day - 1) % 7;
    if (currentDay === 6) {
      console.log(row); 
      row = "";          
    }
  }
}

generateCalendar(2026, 5); 