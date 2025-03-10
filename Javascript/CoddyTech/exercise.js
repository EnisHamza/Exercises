let number = 7;
let result = 1;
for (let i = 1; i <= 10; i++) {
  result = number * i;
  console.log(result);
}

//Write a program that prints numbers from 1 to 20. Your task is to stop the loop when
//the program encounters the first number divisible by both 3 and 5
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    break;
  }
  console.log(i);
}

//Write a program that prints the numbers from 1 to 20.
//Your task is to skip printing numbers that are multiples of 4 using the continue statement.
for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    continue;
  }
  console.log(i);
}

//Write a program that finds all pairs of numbers that add up to n using numbers from 1 to n - 1.
let n = 7;
for (let i = 1; i < n; i++) {
  for (let j = 1; j < n; j++) {
    if (i + j == n) {
      console.log(i, j);
    }
  }
}

//Write a do...while loop that starts with a variable count set to 10. The loop should:
/*Print "Counting down: [count]", where [count] is the current value of count.
Decrease count by 2 after each iteration.
Stop when count becomes less than 0.*/
let count = 10;
do {
  console.log("Counting down: " + count);
  count -= 2;
} while (count >= 0);

//Write a program that finds all pairs of factors of n using numbers from 1 to n.
let k = 12;
for (let i = 1; i <= k; i++) {
  for (let j = 1; j <= k; j++) {
    if (i * j === k) {
      console.log(i, j);
    }
  }
}

//Write a program that gets one input, a number (given).
//The input number indicates how many times to execute the below function.
//Create a function that calculates the sum of all of the numbers between 1 and 10000 (including) and prints it,
//  name the function however you like.
function sum() {
  let totalSum = 0;
  for (let i = 1; i < 10000; i++) {
    totalSum += i;
  }
  console.log(totalSum);
}
let a = 5;
for (let i = 1; i <= 5; i++) {
  sum();
}

/*Write a program that gets two inputs, numbers. The input numbers are the arguments of the below function. 
Create a function that gets two arguments, calculates the product of them and prints it, name the function however you like.
Call the function with the input numbers.*/
let x = 3;
let y = 2;
function product(x, y) {
  let z = x * y;
  console.log(z);
}
product(x, y);

//Create a function called square that takes a single parameter n and returns its square.
//Then, call the function with the input value (given) and store the result in a variable called result.
//Finally, print the value of result.
let num = 4;
function square(n) {
  return n * n;
}
square(n);
var resulti = square(num);
console.log(resulti);

//Write a function named sigma with one argument that represents the number n.
//The function will return the sum of all the numbers from 1 to n (including).
function sigma(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = i + result;
  }
  return result;
}
console.log(sigma(4));

//Write a function called printMessage that: Prints the message: "This is a reusable function!".
//Call the printMessage function 3 times in your program.
function printMessage() {
  console.log("This is a reusable function!");
}

for (let i = 1; i <= 3; i++) {
  printMessage();
}

//Write a program that gets two numbers as inputs. These numbers are passed as arguments to a function.Create a function called sumRange that:
//Takes two arguments, start and end. Calculates the sum of all integers between start and end (inclusive).
// Prints the result. Call the sumRange function once with the input numbers.
let q = 3;
let w = 5;
function sumRange(start, end) {
  let result = 0;
  for (let i = start; i <= end; i++) {
    result = i + result;
  }
  return result;
}
console.log(sumRange(3, 6));

//Write a function findMax that takes three arguments, compares them, and returns the largest number.
/*function findMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}
console.log(findMax(1, 2, 3));*/
function findMax(a, b, c) {
  return Math.max(a, b, c);
}
console.log(findMax(1, 2, 4));
