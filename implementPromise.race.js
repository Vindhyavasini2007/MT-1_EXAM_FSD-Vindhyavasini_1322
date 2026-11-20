//write a javascript program to implement a promise.race() opreation than returns the results the result of the Promise that settels first
let p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1"), 3000));

let p2 = new Promise(resolve => setTimeout(() => resolve("Promise 2"), 1000));

let p3 = new Promise(resolve => setTimeout(() => resolve("Promise 3"), 2000));

Promise.race([p1, p2, p3])
    .then(result => console.log(result));