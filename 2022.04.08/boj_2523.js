// 2523번 별 찍기 13

// const N = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim() * 1;

const N = 3;

let answer = [];
let tempArr = [];
for (let i = 1; i <= N; i++) {
  let result = '';
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  answer.push(result);
  if (i !== N) {
    tempArr.push(result);
  }
}

while(tempArr.length) {
  answer.push(tempArr.pop());
}

console.log(answer.join('\n'));