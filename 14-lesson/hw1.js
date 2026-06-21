function mostFrequentChar(str) {
    const letters = new Map();

    for (let el of str) {
        if (el === " ") continue;
        if (letters.has(el)) letters.set(el, letters.get(el) + 1);
        else letters.set(el, 1);    
    };

    const maxEl = Math.max(...letters.values());

    for (let el of letters) {
        if (el[1] === maxEl) return { char: el[0], count: el[1] };
    };
};

console.log(mostFrequentChar("ja va s cri pt"));
console.log(mostFrequentChar("Salom dunyo! Hayr Dunyo"));