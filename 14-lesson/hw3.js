const tasks = [
 () => new Promise(r => setTimeout(() => r(1), 300)),
 () => new Promise(r => setTimeout(() => r(2), 100)),
 () => new Promise(r => setTimeout(() => r(3), 200)),
];
async function runSequentially(tasks){
    for (task in tasks){
        try{
            console.log(await task)
        } catch {
            pass
        }
    }
}

console.log(runSequentially(tasks))