const noyobHarf = (text) => {
    let count = 0;

    const a = new Set(text);

    for (let i of a)
        if (/[a-zA-Z]/.test(i))
            ++count;
    
    return count;
}




let text = "afsffef31 ,fwwrewf"

console.log(noyobHarf(text))
