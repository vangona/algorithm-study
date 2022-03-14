// 3036번 링

// const fs = require('fs');
// let [N, rings] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, rings] = ['4', '12 3 8 4'];

N = N * 1;
rings = rings.split(' ').map(el => el * 1);

const answer = solveProblem(N, rings);
console.log(answer);

function solveProblem(N, rings) {
  let result = '';
  const root = rings[0];
  for (let i = 1; i < N; i++) {
    const gcd = getGCD(root, rings[i]);
    result += `${root / gcd}/${rings[i] / gcd}` + '\n';
  }

  return result;
}

function getGCD(A, B) {
  const m = Math.max(A, B);
  const n = Math.min(A, B);

  // 링의 반지름이 자연수라, n이 0일 경우의 수는 배제
  if (m % n === 0) {
    return n;
  } else {
    return getGCD(n, m % n);
  }
}