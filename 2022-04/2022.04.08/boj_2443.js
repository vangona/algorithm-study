// 2444번 별 찍기 7

// const N = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim() * 1;

const N = 5;

let answer = [];
for (let i = 1; i <= N; i++) {
  let result = [];
  for (let j = 0; j < i - 1; j++) {
    result += ' ';
  }
  for (let j = 0; j < N - i; j++) {
    result += '*';
  }
  result += '*';
  result += result.slice(0, result.length - 1).split('').reverse().join('').trim();
  answer.push(result);
}

console.log(answer.join('\n'));