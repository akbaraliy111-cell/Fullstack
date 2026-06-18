const hour = new Date().getHours();

if (hour >= 5 && hour < 12) {
  console.log("Ertalab");
} else if (hour >= 12 && hour < 17) {
  console.log("Kunduzi");
} else if (hour >= 17 && hour < 22) {
  console.log("Kechqurun");
} else {
  console.log("Tunda");
}