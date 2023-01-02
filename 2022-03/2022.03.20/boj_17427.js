// 17427번 약수의 합 3

// const fs = require('fs');
// const N = fs.readFileSync('/dev/stdin').toString().trim() * 1;

let answer = 0;

for (let i = 1; i <= N; i++) {
  answer += parseInt(N / i) * i; 
}

console.log(answer);