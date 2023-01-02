// 2920번 음계

// const input = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ')
//   .map(el => el * 1);

const input = [8, 7, 6, 5, 4, 3, 2, 1];
let result = 0;

for (let i = 0; i < 7; i++) {
  if (input[i] - input[i + 1] < 0) {
    continue
  } else {
    result++;
  }
}

if (result === 0) {
  console.log('ascending');
} else if (result === 7) {
  console.log('descending');
} else {
  console.log('mixed');
}