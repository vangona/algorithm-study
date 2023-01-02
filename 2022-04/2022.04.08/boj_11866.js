// 11866번 요세푸스 문제 0

const [N, K] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(el => el * 1);

// const [N, K] = [7, 3];

const permutation = Array.from({ length: N }, (_, i) => i + 1);
const log = [];

while(permutation.length) {
  for (let i = 0; i < K - 1; i++) {
    permutation.push(permutation.shift());
  }
  log.push(permutation.shift());
}

console.log(`<${log.join(', ')}>`);