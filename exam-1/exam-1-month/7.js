function unique(arr){
    return [... new Set(arr)];
};
console.log(unique([1, 2, 2, 3, 3, 3, 4]));
console.log(unique(["a", "b", "a", "c", "b"]));
console.log(unique([5, 5, 5] ));
console.log(unique([7,7,8,9,2,4,5,4,5]));