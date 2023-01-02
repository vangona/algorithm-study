// 2630번 색종이 만들기

// const fs = require('fs');
// let [N, ...paper] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, ...paper] = ['8', '1 1 0 0 0 0 1 1', '1 1 0 0 0 0 1 1', '0 0 0 0 1 1 0 0', '0 0 0 0 1 1 0 0', '1 0 0 0 1 1 1 1', '0 1 0 0 1 1 1 1', '0 0 1 1 1 1 1 1', '0 0 1 1 1 1 1 1'];

N = N * 1;
paper = paper.map(line => line.split(' ').map(el => el * 1));

let white = 0;
let blue = 0;

divideConquer(0, 0, N);
let answer = white + '\n' + blue;
console.log(answer);

function divideConquer(column, row, length) {
  if (checkBox(column, row, length)) {
    if (paper[column][row]) {
      blue++;
    } else {
      white++;
    }
  } else {
    const dividedLength = length / 2;
    divideConquer(column, row, dividedLength);
    divideConquer(column + dividedLength, row, dividedLength);
    divideConquer(column, row + dividedLength, dividedLength);
    divideConquer(column + dividedLength, row + dividedLength, dividedLength);
  }
}

function checkBox(column, row, length) {
  const color = paper[column][row];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (paper[column + i][row + j] !== color) {
        return false;
      }
    }
  }

  return true;
}