function checkPassword(password) {
    if (password.length < 8) {
        return "Parol kamida 8 ta belgidan iborat bo'lishi kerak";
    }

    let hasUpperCase = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "A" && password[i] <= "Z") {
            hasUpperCase = true;
        }
        if (password[i] >= "0" && password[i] <= "9") {
            hasNumber = true;
        }
    }

    if (!hasUpperCase) {
        return "Parolda kamida 1 ta katta harf bo'lishi kerak";
    }
    if (!hasNumber) {
        return "Parolda kamida 1 ta son bo'lishi kerak";
    }

    return "Parol to'g'ri ";
}

console.log(checkPassword("Abc12345"));         