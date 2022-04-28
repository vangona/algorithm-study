// 2490번 윷놀이

// const fs = require("fs");
// const yutStates = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((el) => el.split(" "));

const yutStates = ["0 1 0 1", "1 1 1 0", "1 0 1 0"];

const answer = [];

for (let i = 0; i < yutStates.length; i++) {
  answer.push(checkYutState(yutStates[i]));
}

console.log(answer.join("\n"));

function checkYutState(yutState) {
  zeroNum = 0;
  yutState.split(" ").forEach((yut) => {
    if (yut === "0") {
      zeroNum++;
    }
  });

  switch (zeroNum) {
    case 0:
      return "E";
    case 1:
      return "A";
    case 2:
      return "B";
    case 3:
      return "C";
    case 4:
      return "D";
  }
}
