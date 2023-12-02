const fs = require("fs");
const filePath = "Day_2_Input.txt";
const arr = [];
const MAXRED = 12;
const MAXGREEN = 13;
const MAXBLUE = 14;
function checkPossibility(dic) {
  if (dic["red"] > MAXRED) return false;
  if (dic["green"] > MAXGREEN) return false;
  if (dic["blue"] > MAXBLUE) return false;
  return true;
}
function partI_II(arr) {
  let partIAnswer = 0;
  let partIIAnswer = 0;

  arr.forEach((item, i) => {
    const games = item.split(";");
    let possible = true;
    const highestDict = {
      green: 0,
      blue: 0,
      red: 0,
    };

    games.forEach((item) => {
      const spllitedItems = item.split(",");
      const dict = {};
      spllitedItems.forEach((item) => {
        const [number, color] = item.trim().split(" ");
        dict[color] ? (dict[color] += number) : (dict[color] = number);
        if (+highestDict[color] < number) {
          highestDict[color] = number;
        }
      });
      if (!checkPossibility(dict)) possible = false;
    });

    if (possible) {
      partIAnswer += ++i;
    }
    partIIAnswer += Object.values(highestDict).reduce((acc, a) => a * acc, 1);
  });

  console.log(partIAnswer);
  console.log(partIIAnswer);
}
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
  } else {
    const splittedData = data.split("\n");
    for (const line of splittedData) {
      const trimmedLine = line.trim();
      arr.push(trimmedLine.split(":")[1]);
    }
  }
  partI_II(arr);
});
