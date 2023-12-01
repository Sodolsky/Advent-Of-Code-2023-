const fs = require("fs");
function wordToNumber(word) {
  switch (word) {
    case "one":
      return "1";
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6";
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
    default:
      if (+word) return word;
  }
}
const filePath = "Day_1_Input.txt";
const arr = [];
function partI(arr) {
  let total = 0;
  const values = arr.forEach((item) => {
    const nums = [];
    for (const char of item) {
      if (+char) nums.push(char);
    }
    const sum = nums[0] + nums[nums.length - 1];
    total += +sum;
  });
  console.log(total);
}
function partII(arr) {
  let total = 0;
  arr.forEach((item) => {
    const substrings = [];
    for (let i = 0; i < item.length; i++) {
      for (let j = i + 1; j <= item.length; j++) {
        substrings.push(item.slice(i, j));
      }
    }
    const allValues = substrings.map(wordToNumber).filter((x) => x);
    const sum = allValues[0] + allValues[allValues.length - 1];
    total += +sum;
  });
  console.log(total);
}
// Read data from the file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
  } else {
    const splittedData = data.split("\n");
    for (const line of splittedData) {
      const trimmedLine = line.trim();
      arr.push(trimmedLine);
    }
  }
  partI(arr);
  partII(arr);
});
