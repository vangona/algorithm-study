// 1541번 잃어버린 괄호

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

let input = '55-50+40'
input = input.split('');

let answer = 0;
let number = '';
let minusFlag = false;

for (let i = 0; i <= input.length; i++) {
  if (input[i] === '-') {
    if (minusFlag) {
      answer -= number * 1;
    } else {
      answer += number * 1;
    }
    minusFlag = true;
    number = '';
  } else if (input[i] === '+') {
    if (minusFlag) {
      answer -= number * 1;
    } else {
      answer += number * 1;
    }
    number = '';
  } else if (input[i] === undefined) {
    if (minusFlag) {
      answer -= number * 1;
    } else {
      answer += number * 1;
    }
  } else {
    number += input[i];
  }
}

console.log(answer);