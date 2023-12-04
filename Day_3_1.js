const fs = require("fs");

function isSymbol(token) {
  return !+token && token !== "." && token != "0";
}
function checkAdj(grid, inxArr) {
  let result = false;
  //Up Down
  inxArr.forEach(([i, j]) => {
    //Up
    if (grid[i - 1]) {
      if (grid[i - 1][j] && isSymbol(grid[i - 1][j])) result = true;
    }
    //Down
    if (grid[i + 1]) {
      if (grid[i + 1][j] && isSymbol(grid[i + 1][j])) result = true;
    }
  });
  //Left Right
  inxArr.forEach(([i, j]) => {
    //Left
    if (grid[i][j - 1]) {
      if (grid[i][j - 1] && isSymbol(grid[i][j - 1])) result = true;
    }
    //Right
    if (grid[i][j + 1]) {
      if (grid[i][j + 1] && isSymbol(grid[i][j + 1])) result = true;
    }
  });
  //Diagonally Up/Right Up/Left

  inxArr.forEach(([i, j]) => {
    //Up Right
    if (grid[i - 1] && grid[i][j + 1]) {
      if (grid[i - 1][j + 1] && isSymbol(grid[i - 1][j + 1])) result = true;
    }
    //Up Left
    if (grid[i - 1] && grid[i][j - 1]) {
      if (grid[i - 1][j - 1] && isSymbol(grid[i - 1][j - 1])) result = true;
    }
  });
  //Diagonally Down/Right Down/Left
  inxArr.forEach(([i, j]) => {
    //Down Right
    if (grid[i + 1] && grid[i][j + 1]) {
      if (grid[i + 1][j + 1] && isSymbol(grid[i + 1][j + 1])) result = true;
    }
    //Down Left
    if (grid[i + 1] && grid[i][j - 1]) {
      if (grid[i + 1][j - 1] && isSymbol(grid[i + 1][j - 1])) result = true;
    }
  });
  return result;
}
// Specify the path to the file you want to read
const filePath = "Day_3_Input.txt";
const grid = [];
// Read data from the file
function partI(grid) {
  let result = 0;
  let str = "";
  let inxArr = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let element = grid[i][j];
      if (+element || element == "0") {
        str += element;
        inxArr.push([i, j]);
      } else {
        if (str !== "") {
          if (checkAdj(grid, inxArr)) result += +str;
          //   else console.log(str, inxArr);
        }
        str = "";
        inxArr = [];
      }
    }
  }
  if (str !== "") {
    if (checkAdj(grid, inxArr)) result += +str;
  }
  console.log(result);
}
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
  } else {
    const splittedData = data.split("\n");
    let i = 0;
    for (const line of splittedData) {
      grid[i] = line.trim().split("");
      i++;
    }
    partI(grid);
  }
});
