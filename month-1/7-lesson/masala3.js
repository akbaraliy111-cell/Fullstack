
const harfCount = (text) => {
    const result = new Map();

    for (let i of text){
        if (result.has(i)) result.set(i, result.get(i)+1);
        else result.set(i, 1)
    }

    return result
}








console.log(harfCount("qwertqwertqwertt"))