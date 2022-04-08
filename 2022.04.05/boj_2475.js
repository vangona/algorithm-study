// 2475번 검증수

// const numbers = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ')
//   .map(el => el * 1);

const numbers =[0, 4, 2, 5, 6];

const sum = numbers.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);

console.log(sum % 10);