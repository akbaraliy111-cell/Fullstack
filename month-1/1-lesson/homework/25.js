// 25. Foydalanuvchining roli ('admin', 'teacher', 'student') berilgan. Mos xabar chiqaring.
const rol = "admin";
switch(rol) {
    case "admin":   console.log("Salom, Admin!"); break;
    case "teacher": console.log("Salom, O'qituvchi!"); break;
    case "student": console.log("Salom, Talaba!"); break;
    default: console.log("Noma'lum rol");
}