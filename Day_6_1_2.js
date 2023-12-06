const fs = require("fs");

const time = [47, 84, 74, 67];
const distance = [207, 1394, 1209, 1014];
const timePartII = 47847467;
const distancePartII = 207139412091014;
function partI() {
  const result = time.reduce((acc, a, inx) => {
    let numb = 0;
    for (let i = 0; i < a; i++) {
      if (i * (a - i) > distance[inx]) numb += 1;
    }
    return (acc *= numb);
  }, 1);
  console.log(result);
}
function partII() {
  let result = 0;
  for (let i = 0; i < timePartII; i++) {
    if (i * (timePartII - i) > distancePartII) result += 1;
  }
  console.log(result);
}
partI();
partII();
