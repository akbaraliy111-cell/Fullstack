function groupBy(arr, key) {
  const obj = {};
  for (let i of arr) {
    for (let j of key) {
      if (i["city"] == j) {
        obj[j] = [i];
      }
    }
  }
  return obj;
}

const users = [
  { name: "Ali", city: "Tashkent" },
  { name: "Vali", city: "Samarqand" },
  { name: "Guli", city: "Tashkent" },
];

console.log(groupBy(users, users.keys()));