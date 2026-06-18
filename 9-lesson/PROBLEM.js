const user = {
    name: "Ali"
};

Object.defineProperty(user, "id", {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(user);
