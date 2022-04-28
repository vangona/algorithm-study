// 2445번 별 찍기 8

const N = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim() * 1;

// const N = 5;

let answer = [];
let tempArr = [];
for (let i = 1; i <= N; i++) {
  let result = '';
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  for (let j = 0; j < N - i; j++) {
    result += ' ';
  }
  result += result.split('').reverse().join('');
  answer.push(result);
  if (i !== N) {
    tempArr.push(result);
  }
}

while(tempArr.length) {
  answer.push(tempArr.pop());
}

console.log(answer.join('\n'));