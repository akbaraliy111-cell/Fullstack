// 1-masala
function maksimum(array) {
    return Math.max(...array);
};
console.log(maksimum([3, 9, 1, 7]));

// 2-masala
function sum(array) {
    return array.reduce((a, b) => a + b)
};
console.log(sum([10, 20, 30]));

// 3-masala
function evens(array) {
    return array.filter((num) => num % 2 === 0)
};
console.log(evens([1, 2, 3, 4, 5, 6]));

// 4-masala
function reverse(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.unshift(array[i]);
    }
    return arr;
};
console.log(reverse([3, 2, 1]));

// 5-masala
function isIn(array, num) {
    return array.includes(num);
};
console.log(isIn([5, 8, 2], 8));

// 7-masala
function len(array) {
    let count = 0;
    for (let i in array) count++;
    return count;
};
console.log(len([1, 2, 3, 4]));

// 8-masala
function last(array) {
    return array[array.length - 1];
};
console.log(last([7, 4, 9]));

// 9-masala
function uniques(arr) {
    return [...new Set(arr)]
};
console.log(uniques([1, 2, 2, 3, 3, 3]));

// 10-masala
function secondMax(array) {
    return [... new Set(array)].sort((a, b) => b - a)[1]
};
console.log(secondMax([10, 5, 8, 10, 4, 9, 9, 8, 11]));

// 11-masala
function toSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            };
        };
    };
    return array;
};
console.log(toSort([3, 1, 2]));

// 12-masala
function positiveNegative(arr) {
    const obj = { musbat: [], manfiy: [] };
    for (i of arr) {
        if (i > 0) {
            obj.musbat.push(i);
        } else {
            obj.manfiy.push(i);
        };
    };
    return obj;
};
console.log(positiveNegative([-1, 2, -3, 4]));

// 13-masala
function filterletter(array) {
    obj = { unli: [], undosh: [] };
    let vowels = `euioaEUIOA`
    for (let i of array) {
        if (vowels.includes(i[0])) {
            obj.unli.push(i);
        } else {
            obj.undosh.push(i);
        };
    };
    return obj
};
console.log(filterletter(['olma', 'anor', 'behi']));

// 14-masala
function multip(array) {
    return array.reduce((a, b) => a * b);
};
console.log(multip([2, 3, 4]));

// 15-masala
function merge(a1, a2) {
    return a1.concat(a2).sort();
};
console.log(merge([1, 3], [2, 4]));

// 16-masala
function engKopTakror(str) {
    const obj = {};
    for (let i of str) {
        if (i in obj) obj[i] += 1;
        else obj[i] = 1;
    };
    maxValue = 0;
    maxKey = "";
    for (let i in obj) {
        if (obj[i] > maxKey) {
            maxValue = obj[i];
            maxKey = i;
        };
    };
    return { qiymat: maxKey, soni: maxValue };
};
console.log(engKopTakror([1, 2, 2, 3, 2]));

// 17-masala 
function start(arr, son) {
    let pops = 0;
    let shifts = 0;
    for (let i = 0; i < son; i++) {
        pops = arr.pop();
        shifts = arr.unshift(pops);
    }
    return arr;
};
console.log(start([1, 2, 3, 4, 5], 1));


// 18-masala
function twoSum(arr, target) {
    let index = [];
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr.length; j++)
            if ((arr[i] + arr[j]) === target) {
                index.push([i, j]);
            }
    return index;
};
console.log(twoSum([2, 7, 8], 9));

// 19-masala
function kadane(array){
    maxSum = 0;
    for (let i = 0; i < array.length; i++){
        let currentSum = 0;
        for (let j = i; j < array.length; j++){
            currentSum += array[j];
            if (currentSum > maxSum){
                maxSum = currentSum;
            }
        }
    }
    return maxSum
};
console.log(kadane([-2,1,-3,4,-1,2,1,-5,4]));

// 20-masala
function flatArray (arr){
    return arr.flat(Infinity)
}
console.log(flatArray([1,[2,[3,[4]]], 'X']));
