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

function greetWorld() {
  console.log("Hello, World!");
}

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

greetWorld();
sumArray([1, 2, 3]);

//Write the code for the function factorial that calculates the factorial of a number.
//If you don't know what factorial is, factorial means the product of the number and all numbers below it.
//For example, 5 factorial would be: 5 * 4 * 3 * 2 * 1 = 120. Use recursion.
//Your function should return the value. No need to print it, return values are tested automatically.
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}
console.log(factorial(5));

/*function pyramid(height) {
  // Write your code below this line
  for (let i = 0; i < height; i++) {
    let str = ""; // Declare an empty string to hold spaces and hashes for this row

    // Add spaces: Loop from i + 1 to height
    for (let j = 0; j < height - i - 1; j++) {
      str += " "; // Add space
    }

    // Add hashes: Loop from 0 to i (inclusive)
    for (let k = 0; k <= i; k++) {
      str += "#"; // Add hash
    }

    // Print the string (current row), then clear the string
    console.log(str);
  }
}
pyramid(4);*/

//You are given a function called pyramids that takes in a parameter called height.
//You need to complete the code inside the function to make it print pyramids as shown above.
//A pyramid of height 3 would look like:
/*
  #  #
 ##  ##
###  ###
*/
function pyramids(height) {
  // Write your code below this line
  for (let i = 0; i < height; i++) {
    let str = "";
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
    }

    for (let k = 0; k <= i; k++) {
      str += "#";
    }

    str += "  ";

    for (let k = 0; k <= i; k++) {
      str += "#";
    }
    console.log(str);
  }
}
pyramids(4);

//Another way of building pyramids
const character = "#";
const count = 3;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);

//You are given a function called validateCard.
//It takes in one parameter, cardNumber, that contains the card number that should be validated.
// First, check if the number is a valid credit card number using Luhn's Algorithm as shown above.
// If it is not a valid credit card, print INVALID.
// If the card is valid, check if it is a MasterCard or an American Express card. Check this using the number of digits.
// American Express uses 15-digit numbers and MasterCard uses 16-digit numbers.
// Don't forget to check the starting numbers as well.
// If American Express is correct, print AMEX, and if MasterCard is correct, print MASTERCARD.
// If it is any other length, the card number is invalid.
function validateCard(cardNumber) {
  // Convert the card number to a string
  cardNumber = cardNumber.toString();

  // Luhn's Algorithm Check
  function luhnCheck(cardNumber) {
    let totalSum = 0;
    let reverseDigits = cardNumber.split("").reverse(); // Reverse the digits

    // Iterate through the reversed digits
    for (let i = 0; i < reverseDigits.length; i++) {
      let num = parseInt(reverseDigits[i]);

      if (i % 2 === 1) {
        // Every second digit starting from the second-to-last
        num *= 2;
        if (num > 9) {
          // If the product is greater than 9, subtract 9 (same as summing digits of the product)
          num -= 9;
        }
      }

      totalSum += num;
    }

    return totalSum % 10 === 0; // Valid if total sum modulo 10 is 0
  }

  // Check if the card number passes the Luhn's algorithm
  if (!luhnCheck(cardNumber)) {
    console.log("INVALID");
    return;
  }

  // Check the card type based on length and prefix
  let length = cardNumber.length;

  if (
    length === 15 &&
    (cardNumber.startsWith("34") || cardNumber.startsWith("37"))
  ) {
    console.log("AMEX");
  } else if (length === 16 && cardNumber.startsWith("5")) {
    console.log("MASTERCARD");
  } else {
    console.log("INVALID");
  }
}
