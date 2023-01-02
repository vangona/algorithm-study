// 11721번 열 개씩 끊어 출력하기

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

let answer = '';

for (let i = 0; i < input.length; i += 10) {
  answer += input.substr(i, 10);
  answer += '\n';  
}

console.log(answer);