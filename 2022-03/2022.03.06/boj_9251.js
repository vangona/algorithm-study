// 9251번 LCS

// const fs = require('fs');
// const [first, second] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [first, second] = ['ACAYKP', 'CAPCAK'];

const N = first.length;
const M = second.length;
let dpArr = Array.from({ length: N + 1 }, () => Array.from({ length: M + 1 }, () => 0));

let answer = 0;

for (let i = 0; i <= N; i++) {
  for (let j = 0; j <= M; j++) {
    // -1에서 시작되는 부분 수열을 제외.
    if (i === 0 || j === 0) continue;
    
    if (first[i - 1] === second[j - 1]) {
      dpArr[i][j] = dpArr[i - 1][j - 1] + 1;
    } else {
      dpArr[i][j] = Math.max(dpArr[i - 1][j], dpArr[i][j - 1]);
    }

    if (answer < dpArr[i][j]) answer = dpArr[i][j];
  }
}

console.log(answer);