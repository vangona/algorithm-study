// const fs = require('fs');
// let [N, ...data] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, ...data] = ['8', '11110000', '11110000', '00011100', '00011100', '11110000', '11110000', '11110011', '11110011'];

N = N * 1;
data = data.map(line => line.split('').map(el => el * 1));

let answer = '';
divideConquer(0, 0, N);
console.log(answer);

function divideConquer(column, row, length) {
  if (checkBox(column, row, length)) {
    if (data[column][row]) {
      answer += '1';
    } else {
      answer += '0';
    }
  } else {
    answer += '(';
    const dividedLength = length / 2;
    divideConquer(column, row, dividedLength);
    divideConquer(column, row + dividedLength, dividedLength);
    divideConquer(column + dividedLength, row, dividedLength);
    divideConquer(column + dividedLength, row + dividedLength, dividedLength);
    answer += ')';
  }
}

function checkBox(column, row, length) {
  const initialValue = data[column][row];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (data[column + i][row + j] !== initialValue) {
        return false;
      }
    }
  }

  return true;
}