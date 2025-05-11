document.getElementById("check-btn").addEventListener("click", () => {
  const userInput = document.getElementById("text-input").value.trim();
  const result = document.querySelector("#result");

  if (userInput === "") {
    alert("Please input a value");
  }

  // Normalize input: remove non-alphanumeric characters and convert to lowercase
  const cleaned = userInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");

  if (cleaned === reversed) {
    result.textContent = `${userInput} is a palindrome.`;
  } else {
    result.textContent = `${userInput} is not a palindrome.`;
  }
});
