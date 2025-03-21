//Create a function named greetAll that takes an array of names and returns one string.
//Each name in the array should produce a line with the format Hello, <Name>!
//joined together into a single string, separated by newlines. Use template literals for the greeting lines.
function greetAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Hello, ${arr[i]}!`);
  }
}
greetAll(["Enis", "Edon", "Rigon"]);

//Create a function named alternateCase that takes a string as input and returns a new string where the cases are alternated.
//The first character should be uppercase, the second lowercase, the third uppercase, and so on.
function alternateCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  console.log(result);
}
alternateCase("kosova");

function printSum(string1, string2) {
  // Write your code below this line
  let sum = 0;
  const number1 = Number(string1);
  const number2 = Number(string2);
  sum = number1 + number2;
  return sum;
}
console.log(printSum("52", "21"));

//You are given a variable of type string called myString.
//First, print the length of the string. Then, try to find a way to print the last character of the string.
//At the end, print the first 3 letters of the string.
function strings(myString) {
  console.log(myString.length);
  let value = myString.length - 1;
  console.log(myString.charAt(value));
  console.log(myString.substring(0, 3));
}
strings("Hello, World!");

//You are given a number called num. Your job is to count the number of digits the number consists of using a while loop.
//Try using a counter to count the iterations while using math to get rid of the last digit of the number every iteration.
//The iterations should stop once you get through all digits of the number. Use hints as needed.
function digits(num) {
  // Write your code below this line
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  console.log(count);
}
digits(6271);

function printer(num) {
  // Write your code below this line
  do {
    console.log(num);
    num--;
  } while (num > 0);
}
printer(7);

//You are given a number variable called number.
//Write a program that loops from 0 to that number (not including) and calculates the sum of all even numbers in that range.
//You will have to use a for loop, and perhaps an if statement inside the for loop to check if the number is even.
//Try using math to check if the number is even. If you get stuck, Hint 1 will help you with the math.
function evenSum(number) {
  // Write your code below this line
  let result = 0;
  for (let i = 0; i < number; i++) {
    if (i % 2 == 0) {
      result += i;
    }
  }
  console.log(result);
}
evenSum(100);
