// 2442번 별 찍기 5

// const n = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim() * 1;

const n = 5;

console.log(printStar());

function printStar() {
  let answer = '';
  let count = 1;
  while (count < n) {
    for (let i = 0; i < count - 1; i++) {
      answer += ' ';
    }
    for (let i = 0; i < n - count; i++) {
      answer += '*';
    }
    answer += '*';
    for (let i = 0; i < n - count; i++) {
      answer += '*';
    }
    answer += '\n';
    count++;
  }

  while (count > 0) {
    for (let i = 0; i < count - 1; i++) {
      answer += ' ';
    }
    for (let i = 0; i < n - count; i++) {
      answer += '*';
    }
    answer += '*';
    for (let i = 0; i < n - count; i++) {
      answer += '*';
    }
    answer += '\n';
    count--;
  }
  return answer;
}