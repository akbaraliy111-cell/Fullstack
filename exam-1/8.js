function titleCase(sentence){
    let new_str = ''
    for (let str of sentence.split(" ")){
        new_str += str[0].toUpperCase() + str.slice(1).toLowerCase() + " "
    };
    console.log(new_str);
    
};
console.log(titleCase("salom dunyo qalAysan"));