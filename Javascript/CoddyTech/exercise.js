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
