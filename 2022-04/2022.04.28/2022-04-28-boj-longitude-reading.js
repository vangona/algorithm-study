// 10798번 세로읽기

const fs = require("fs");
const words = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));

let answer = "";

for (let j = 0; j < 15; j++) {
  for (let i = 0; i < words.length; i++) {
    if (words[i][j]) answer += words[i][j];
  }
}

console.log(answer);
