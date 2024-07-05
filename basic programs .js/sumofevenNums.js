// print sum of even numbers in array

let arr = [2, 6, 7];
let sum_arr = arr.filter((a) => a % 2 == 0).reduce((a, b) => a + b);
console.log(`sum of even numbers in array is ${sum_arr}`);

// print sum of odd numbers
let arr2 = [2, 6, 45, 32, 15, 9, 20];
let sum_arr2 = arr.filter((a) => a % 2 != 0).reduce((a, b) => a + b);
console.log(`sum of odd numbers in array is ${sum_arr2}`);
