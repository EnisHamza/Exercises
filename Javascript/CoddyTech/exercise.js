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
