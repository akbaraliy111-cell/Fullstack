function nowDay(){
    const date = new Date();
    console.log(date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear());
}

nowDay()