// find common element between two array without using nested loops
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 7];

let set = new Set(arr1);

let common = arr2.filter(num => set.has(num));

console.log(common);