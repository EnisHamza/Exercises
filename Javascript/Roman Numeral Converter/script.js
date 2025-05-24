const convertButton = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const numberOutput = document.getElementById("output");

function checkUserInput() {
  const num = parseInt(numberInput.value);

  if (!numberInput.value) {
    numberOutput.innerText = "Please enter a valid number";
    return;
  }
  if (numberInput.value <= -1) {
    numberOutput.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (numberInput.value >= 4000) {
    numberOutput.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  numberOutput.innerText = calculate(num);
}

function calculate(num) {
  const numerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  for (const { value, numeral } of numerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

convertButton.addEventListener("click", checkUserInput);
