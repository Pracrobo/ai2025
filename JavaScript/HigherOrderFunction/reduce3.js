const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10


const nums = [5, 1, 8, 3];
const max = nums.reduce((acc, cur) => (cur > acc ? cur : acc), nums[0]);
console.log(max); // 8


const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 2, banana: 2, orange: 1 }
