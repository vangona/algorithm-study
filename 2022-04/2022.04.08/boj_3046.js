// 3046번 R2

const [R1, S] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(el => el * 1);

console.log(S * 2 - R1);