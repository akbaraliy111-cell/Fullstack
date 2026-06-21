let count = 0;
const unstable = () => {
 count++;
 return count < 3
 ? Promise.reject(new Error("xato"))
 : Promise.resolve("muvaffaqiyat");
};
await retry(unstable, 5)