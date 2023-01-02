// 4375번 1

// const fs = require('fs');
// const [...numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(el => BigInt(el));

const [...numbers] = ['3', '7', '9901'].map(el => BigInt(el));
const answer = Array.from({ length: numbers.length });

numbers.forEach((number, index) => {
  let oneNum = BigInt(1);
  let count = 1;
  while(true) {
    if (BigInt(oneNum) % number === BigInt(0)) {
      answer[index] = count;
      break;
    } else {
      oneNum = oneNum * BigInt(10) + BigInt(1);
      count++;
    }
  }
})

console.log(answer.join('\n'));