function isValid(str){
    while(
        str.includes("()") ||
        str.includes("{}") ||
        str.includes("[]")
    ){
        str = str.replace("{}", "");
        str = str.replace("[]", "");
        str = str.replace("()", "");
    }

    return str.length === 0; 
};

console.log(isValid('()[]{}')) ;