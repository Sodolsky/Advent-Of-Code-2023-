const fs = require("fs");
const filePath = "Day_4_Input.txt";
const arr = [];
let numOfWinsII = 0;
function doubleNTimes(n) {
  if (n === 0) return 0;
  let result = 1;
  for (let i = 0; i < n - 1; i++) {
    result *= 2;
  }
  return result;
}
function partI(arr) {
  const result = arr.reduce((acc, a, inx, arr) => {
    const winningNumbers = a
      .split("|")[0]
      .split(":")[1]
      .split(" ")
      .filter((x) => x !== "")
      .map(Number);
    const yourNumbers = a
      .split("|")[1]
      .split(" ")
      .filter((x) => x !== "")
      .map(Number);
    const numbOfWinningnNumbers = yourNumbers.filter((value) =>
      winningNumbers.includes(value)
    ).length;

    return (acc += doubleNTimes(numbOfWinningnNumbers));
  }, 0);
  console.log(result);
}
function partII(arr) {
  const splitedArray = arr.map((x) => x.split(": ").pop().split(" | "));
  splitedArray.forEach((item, inx) => {
    checkForWin(splitedArray, inx);
  });
  console.log(numOfWinsII);
}
function checkForWin(splitedArray, inx) {
  console.log(inx + 1);
  const winningNumbers = splitedArray[inx][0]
    .split(" ")
    .filter((x) => x !== "")
    .map(Number);
  const yourNumbers = splitedArray[inx][1]
    .split(" ")
    .filter((x) => x !== "")
    .map(Number);
  const numberOfWins = yourNumbers.filter((x) =>
    winningNumbers.includes(x)
  ).length;
  if (numberOfWins === 0) return;
  numOfWinsII += numberOfWins;
  for (let i = inx + 1; i < inx + numberOfWins; i++) {
    checkForWin(splitedArray, i);
  }
}
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
  //   partI(arr);
  partII(arr);
});
