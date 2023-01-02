// 4375번 1

// const fs = require('fs');
// const [...numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el * 1);

const [...numbers] = ['3', '7', '9901'].map(el => el * 1);
const answer = Array.from({ length: numbers.length });

numbers.forEach((number, index) => {
  let oneNum = 1;
  let count = 1;
  while(true) {
    if (oneNum % number === 0) {
      answer[index] = count;
      break;
    } else {
      oneNum = oneNum * 10 + 1;
      oneNum %= (number);
      count++;
    }
  }
})

console.log(answer.join('\n'));