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

//You are given an array called numbers. Print the last 5 elements of the array using a for loop.
function printer(numbers) {
  for (let i = 2; i <= numbers.length - 1; i++) {
    console.log(numbers[i]);
  }
}
printer([1, 2, 3, 4, 5, 6, 7]);

//You are given two arrays, nums1 and nums2. Your job is to get the last element of nums1 and insert it as the first element of nums2.
//Remove the last element of nums1. Print nums1, then print nums2.
function elSwap(nums1, nums2) {
  // Write your code below this line
  let lastItem = nums1.pop();
  nums2.unshift(lastItem);
  console.log(nums1);
  console.log(nums2);
}
elSwap([2, 5, 6, 1], [6, 7, 2, 8, 2]);

//You are given two arrays arr1 and arr2. Your job is to find the union of these two arrays.
//For example, the union of [1, 2, 3] and [100, 2, 1, 10] is [1, 2, 3, 100, 10].
//Basically, your job is to create a new third array and store every different number from both arrays.
//Make sure not to have duplicates. Looping through arrays and using the .includes() method might help you.
function union(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr3.includes(arr1[i])) {
      arr3.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr3.includes(arr2[i])) {
      arr3.push(arr2[i]);
    }
  }
  console.log(arr3);
}
union([2, 5, 3, 6], [1, 2, 3, 7]);
