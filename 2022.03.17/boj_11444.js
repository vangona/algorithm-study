// 11444번 피보나치 수 6

// input 처리
// const fs = require('fs');
// const n = BigInt(fs.readFileSync('/dev/stdin').toString().trim() * 1);

// 모듈러 선언
const n = BigInt(7);
const BIG_ZERO = BigInt(0);
const BIG_ONE = BigInt(1);
const BIG_TWO = BigInt(2);
const FIBO_MATRIX = [[BIG_ZERO, BIG_ONE], [BIG_ONE, BIG_ONE]];
const MOD = BigInt(1000000007);

// 문제 해결 함수 실행 및 답안 출력
const answer = String(solveProblem(n));
console.log(answer);

function solveProblem(n) {
  if (n === BIG_ZERO) {
    return 0;
  } else if (n === BIG_ONE) {
    return 1;
  }

  if (n % BIG_TWO === BIG_ZERO) {
    console.log(divideConquer(n));
    return divideConquer(n)[0][0] % MOD;
  } else {
    console.log(divideConquer(n));
    const result = divideConquer(n - BIG_ONE);
    return (result[0][0] + result[0][1]) % MOD; 
  }
}

function divideConquer(exponent) {
  if (exponent === BIG_ONE) {
    return FIBO_MATRIX;
  } else {
    const dividedMatrix = divideConquer(exponent / BIG_TWO);
    return squareMatrix(dividedMatrix);  
  }
}

function squareMatrix(matrix) {
  const computedMatrix = Array.from({ length : 2 }, () => Array.from({ length : 2 }, () => BIG_ZERO));

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        computedMatrix[i][j] += (matrix[i][k] * matrix[k][j]) % MOD;
      }
    }
  }

  return computedMatrix;
}