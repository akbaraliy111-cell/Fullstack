function isAscending(num){
    
    while(num){
        let lastD = num % 10;
        num = Math.floor(num / 10);
        let newLastD = num % 10;
        if (newLastD >= lastD){
            return false;
        }
    }
    return true;
}

console.log(isAscending(12356));