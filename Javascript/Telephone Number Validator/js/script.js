const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Regular expression for valid US phone numbers
const validUSPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

// Check button logic
checkBtn.addEventListener("click", () => {
  const input = userInput.value.trim();

  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  const isValid = validUSPhoneRegex.test(input) && isAllowedPrefix(input);

  if (isValid) {
    resultsDiv.textContent = `Valid US number: ${input}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${input}`;
  }
});

// Clear button logic
clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});

// Function to validate allowed prefixes
function isAllowedPrefix(input) {
  // Extract digits only
  const digits = input.replace(/\D/g, "");

  // Valid numbers are 10 digits (no country code) or 11 digits starting with 1
  if (digits.length === 10) {
    return true;
  } else if (digits.length === 11 && digits.startsWith("1")) {
    return true;
  }
  return false;
}
