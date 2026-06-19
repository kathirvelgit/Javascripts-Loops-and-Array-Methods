// 1 — Looping Through an Array

// const numbers = [10, 20, 30, 40];

// for (let i =0; i<numbers.length; i++){
//     console.log(numbers[i]);

// }

// numbers.forEach((num) => {
//     console.log(num);

// })

// for(let num of numbers){
//     console.log(num);

// }

// for(let num in numbers){
//     console.log(numbers[num]);

// }


//2 — Loop Through an Object

// const student = {
//   name: "Bala",
//   age: 21,
//   grade: "A"
// };


// for(let key in student){
//     console.log(key, student[key]);

// }

//3 — Using map()

// const marks = [50, 60, 70, 80];

// const finalMarks = marks.map(num => num -10)

// console.log(finalMarks);


//4 — Using filter()

// const values = [5, 12, 8, 25, 3, 15];

// const finalValues = values.filter(num => num >10);

// console.log(finalValues);


//5 — Using reduce()

const nums = [5, 10, 15, 20];

const total = nums.reduce((sum, num) => sum + num, 0);

console.log(total);
