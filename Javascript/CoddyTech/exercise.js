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

//Create an arrow function named calculateBMI that takes two parameters,
//weight (in kilograms) and height (in meters), and returns the Body Mass Index (BMI).
//The formula for BMI is: weight / (height * height).
let calculateBMI = (weight, height) => {
  return weight / (height * height);
};
console.log(calculateBMI(70, 1.75));

//Write a function named isValid that gets two string arguments, username and password.
//The function will return True if the username and password are valid in the system, otherwise False.
//Our system contains only two valid usernames - "admin" and "user".
//The valid password for username "user" is "qweasd".
//For username "admin" any password is valid!
let isValid = (username, password) => {
  if (username == "admin" || username == "user") {
    if (username == "user" && password == "qweasd") {
      return true;
    } else if (username == "admin") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
console.log(isValid("user", "qweasd"));

//Create a function expression named calculateVolume that takes three arguments, length, width, and height,
// and returns the volume of a rectangular prism. The function should be assigned to a variable named calculateVolume.
let calculateVolume = function (length, width, height) {
  return length * width * height;
};
console.log(calculateVolume(3, 4, 5));

//Create an arrow function named sumOfEvens that:
//Takes one parameter: n (a positive integer).
//Calculates the sum of all even numbers from 1 to n (inclusive).
//Returns the result.
let sumOfEvens = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result = i + result;
    }
  }
  return result;
};
console.log(sumOfEvens(22));

//FizzBuzz with a Twist
function fizzbuzz(num) {
  if (num % 3 == 0 && num % 7 == 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 7 == 0) {
    return "Buzz";
  } else if (num.toString().includes("3")) {
    return "Almost Fizz";
  } else {
    return (num = String(num));
  }
}

function fizzbuzzLoop(num) {
  for (let i = 1; i <= num; i++) {
    console.log(fizzbuzz(i));
  }
}
fizzbuzzLoop(24);

//Array
let array = ["red", "blue", "green", "yellow", "purple"];
console.log(array[array.length - 2]);

//Create a function named changeElement that receives 3 arguments:
//First argument is an array.
//Second argument is an index.
//Third argument is a new element
//The function will return the modified array by changing the element in an index
//that is stored in the second argument with the value in the third argument.
function changeElement(arr, index, newElement) {
  arr[index] = newElement;
  return arr;
}
console.log(changeElement([8, 8, 8, 8], 2, 7));

//Create a function named swapEnds that receives one argument:An array.
//The function swaps the first and the last elements of the array and returns the modified array.
//For example with the following arguments: swapEnds([1, 2, 3, 4]) the function will return [4, 2, 3, 1]
function swapEnds(array) {
  let firstElement = array.shift();
  let lastElement = array.pop();
  array.unshift(lastElement);
  array.push(firstElement);
  return array;
}
console.log(swapEnds([1, 2, 3, 4]));

function firstAndLast(arr) {
  return arr[0] + arr[arr.length - 1];
}
console.log(firstAndLast([1, 2, 3, 4, 17]));

//Create a function named findElement that receives two arguments:
/*An array of numbers
A number to search for
The function should do the following:
Check if the array includes the number using the includes method.
If the number is found, return the index of its first occurrence using the indexOf method.
If the number is not found, return -1.*/
function findElement(arr, num) {
  let isPart = arr.includes(num);
  if (isPart === true) {
    return arr.indexOf(num);
  } else {
    return arr.indexOf(num);
  }
}
console.log(findElement([1, 2, 3, 4], 262348));

//Write a function named processArray that takes an array of numbers as an argument. The function should do the following:
/*Remove the last element from the array.
Add the number 10 to the end of the array.
Sort the array.
Check if the array includes the number 5. If it does, replace it with the number 50.
Reverse the order of the elements in the array.
Return the modified array.*/
function processArray(array) {
  array.pop();
  array.push(10);
  array.sort();

  let isPart = array.includes(5);
  if (isPart == true) {
    let index = array.indexOf(5);
    let duplicate = (array[index] = 50);
  }

  array.reverse();
  return array;
}
console.log(processArray([9, 6, 3, 12]));

//Create a program that receives an array of strings as input (given),
//and prints a new array containing only the words longer than 5 characters.
let arr = ["Kosova", "Enis", "Shqiperia"];
let rezultati = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 5) {
    rezultati.push(arr[i]);
  }
}
console.log(rezultati);

//Write a program that receives an array of numbers as input (given),
//and prints an array of the numbers that are either below 50 or are divisible by 5. Use the forEach method.
let arra = [1, 2, 3, 4, 5, 25, 50, 75, 100];
let resulta = [];
arra.forEach((arr) => {
  if (arr < 50 || arr % 5 === 0) {
    resulta.push(arr);
  }
});
console.log(resulta);

//Write a function named countVowels that takes a string as an argument and returns
//the number of vowels (a, e, i, o, u) in the string.
//Use a for...of loop to iterate over the characters of the string.
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello Worlds"));

//Create a program that receives a string as input (given), and it prints how many times the character p is in the string.
//Some chars might be upper cased, use char.toLowerCase() to convert it to lower cased.
let text = "Pampirinc";
text = text.toLowerCase();
let counti = 0;
let letter = "p";
for (let char of text) {
  if (letter.includes(char)) {
    counti++;
  }
}
console.log(counti);

//Write a function named countDigits that takes a string as an argument and returns the number of digits (0-9) in the string.
//Use a for...of loop to iterate over the characters of the string.
function countDigits(str) {
  let count = 0;
  let numbers = "1234567890";
  for (let char of str) {
    if (numbers.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countDigits("viti209232824"));

/*Perform the following tasks in order:

Sort the array in ascending order using a method.
Reverse the order of the array using a method.
Find the index of the first occurrence of the number 30 and store it in a variable named firstIndex.
Find the index of the last occurrence of the number 10 and store it in a variable named lastIndex.
Check if the number 100 is included in the array and store the result in a variable named hasHundred.
Finally, print the following:

The updated array after sorting and reversing.
The value of firstIndex.
The value of lastIndex.
The value of hasHundred. */
let numbers = [40, 10, 30, 20, 50, 30, 10];
numbers.sort().reverse();
let firstIndex = numbers.indexOf(30);
let lastIndex = numbers.lastIndexOf(10);
let hasHundred = numbers.includes(100);

console.log(numbers);
console.log(firstIndex);
console.log(lastIndex);
console.log(hasHundred);

/*Your task is to perform the following operations in order:

Add "yellow" to the end of the array using a method.
Remove the first color from the array and store it in a variable named removedColor.
Add "purple" to the beginning of the array using a method.
Remove the last color from the array and store it in a variable named lastColor.
Finally, print the following:

The updated array.
The value of removedColor.
The value of lastColor. */
let colors = ["red", "blue", "green"];
colors.push("yellow");
let removedColor = colors.shift();
colors.unshift("purple");
let lastColor = colors.pop();

console.log(colors);
console.log(removedColor);
console.log(lastColor);
