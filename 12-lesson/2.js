class User {
    static count = 0;
    constructor(){
        User.count++;
    };
    static getUserCount(){
        return User.count;
    };
}

const user1 = new User();
const user2 = new User();

console.log(User.getUserCount());