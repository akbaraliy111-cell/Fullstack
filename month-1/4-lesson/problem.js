function step1() {
  console.log("1-qadam");
  setTimeout(step2, 1000);
}

function step2() {
  console.log("2-qadam");
  setTimeout(step3, 1000);
}

function step3() {
  console.log("3-qadam");
}

setTimeout(step1, 1000); // ✅ toza va o'qiladi