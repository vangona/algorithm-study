// 2981번 검문


// input 처리
// const fs = require('fs');
// let [N, ...numbers] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, ...numbers] = ['3', '6', '34', '38'];

N = N * 1;
numbers = numbers.map(el => el * 1);
numbers.sort((a, b) => a - b);
const answer = [];

let gcd = numbers[1] - numbers[0];
for (let i = 1; i < N - 1; i++) {
  const diff = numbers[i + 1] - numbers[i];
  gcd = getGCD(gcd, diff);
}
answer.push(gcd);
getDivisor(gcd);

console.log(answer.sort((a, b) => a - b).join(' '));

function getDivisor(number) {
  const root = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= root; i++) {
    if (number % i === 0) {
      if (number / i !== i) {
        answer.push(i);
      }
      answer.push(number / i);
    }
  }
}

function getGCD(m, n) {
  if (m < n) {
    let temp = m;
    m = n;
    n = temp;
  }

  while(n !== 0) {
    let temp = m;
    m = n;
    n = temp % n;
  }

  return m;
}