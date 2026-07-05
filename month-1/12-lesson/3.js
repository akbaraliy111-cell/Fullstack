class Account {
    #password = '';
    constructor(name, password){
        this.name = name;
        this.#password = password;
    };

    checkPassword(password){
        if (password === this.#password){
            return true;
        } else {
            return false;
        };
    };

    changePassword(oldPass, newPass){
        if (this.checkPassword(oldPass)) {
            this.#password = newPass; 
            console.info("Parol muvafaqiyatli yangilandi!");
        } else {
            console.warn("Eski parol noto'g'ri kiritilgan!!!");
        };
    };
};

const user = new Account('Ali', '1234uzbe');
user.changePassword('1234uzbe', 'uzb123');