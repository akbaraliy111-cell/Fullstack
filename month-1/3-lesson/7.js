function randomPromoCode(){
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let promoCode = "";

    for (let i = 0; i < 8; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        promoCode += chars[randomIndex];
    }

    return promoCode;
}

console.log(randomPromoCode());