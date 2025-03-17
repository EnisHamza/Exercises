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
