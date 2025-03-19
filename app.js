/*
  ✨ Code Review & Refactor Suggestions ✨
  Great work completing these exercises! The following improvements 
  will help with readability, efficiency, and best practices while 
  keeping everything simple and effective. Keep it up! 🚀
*/

// ✅ Exercise 1: maxOfTwoNumbers()
// Good logic! The function name had a "3" in it—adjusted for consistency.
const maxOfTwoNumbers = (x, y) => (x >= y ? x : y);
console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

// ✅ Exercise 2: isAdult()
// Works perfectly! Removed unnecessary parentheses inside `return`.
function isAdult(age) {
  return age >= 18 ? "Adult" : "Minor";
}
console.log("Exercise 2 Result:", isAdult(21));

// ✅ Exercise 3: isCharAVowel()
// Good approach! Used `.includes()` to make it cleaner.
function isCharAVowel(char) {
  return ["a", "e", "i", "o", "u"].includes(char);
}
console.log("Exercise 3 Result:", isCharAVowel("a"));

// ✅ Exercise 4: generateEmail()
// Works well! Used template literals for better readability.
function generateEmail(name, domain) {
  return `${name}@${domain}`;
}
console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

// ✅ Exercise 5: greetUser()
// Great work! No major changes, just kept spacing consistent.
function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}
console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

// ✅ Exercise 6: maxOfThree()
// Works perfectly! The `Math.max()` method simplifies it even more.
const maxOfThree = (num1, num2, num3) => Math.max(num1, num2, num3);
console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

// ✅ Exercise 7: calculateTip()
// Good approach! Removed unnecessary variable by returning directly.
function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}
console.log("Exercise 7 Result:", calculateTip(50, 20));

// ✅ Exercise 8: convertTemperature()
// Works well! Added explicit checks for valid scale input.
function convertTemperature(temperature, unit) {
  if (unit === "C") {
    return (temperature * 9) / 5 + 32;
  } else if (unit === "F") {
    return (temperature - 32) * (5 / 9);
  } else {
    return "Error: Unit must be 'C' or 'F'.";
  }
}
console.log("Exercise 8 Result:", convertTemperature(32, "C"));

// ✅ Exercise 9: basicCalculator()
// Works well! Used `switch` for a cleaner structure.
function basicCalculator(num1, num2, operation) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero";
    default:
      return "Error: Unknown operation";
  }
}
console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));
