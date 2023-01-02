// 17425번 약수의 합

// const fs = require('fs');
// const [T, ...N] = fs.readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map(el => el * 1);

const [T, ...N] = ['5', '1', '2', '10', '70', '100000'].map(el => el * 1);
const maxNum = Math.max(...N);
const answer = Array.from({ length: T });
const dpArr = Array.from({ length: maxNum + 1 }, () => 0);

solveProblem();

function solveProblem() {
  // 동적계획법을 통해 해를 구함
  runDp();

  console.log(dpArr);

  N.forEach((number, index) => {
    answer[index] = dpArr[number];
  });
  
  console.log(answer.join('\n'));
}

// 동적계획법 함수
function runDp() {  
  for (let i = 1; i <= maxNum; i++) {
    let sum = 0;
    for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        if (i / j === j) {
          sum += j;
        } else {
          sum += i / j;
          sum += j;  
        }
      }
    }
    dpArr[i] += dpArr[i - 1] + sum; 
  }  
}