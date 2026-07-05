function formatPhoneNumber(tel){
    return tel.slice(0,4)+" ("+tel.slice(4,6)+") "+tel.slice(6,9)+"-"+tel.slice(9,11)+"-"+tel.slice(11,13)
}

let tel = "+998901234567";

console.log(formatPhoneNumber(tel));

// +998 (90) 123-45-67