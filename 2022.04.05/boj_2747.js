// 2747번 피보나치 수

// const n = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim() * 1;

const n = 10;

let dpArr = Array.from({ length : n + 1 });
dpArr[0] = 0;
dpArr[1] = 1;
dpArr[2] = 1;

for (let i = 3; i <= n; i++) {
  dpArr[i] = dpArr[i - 1] + dpArr[i - 2];
}

console.log(dpArr[n]);