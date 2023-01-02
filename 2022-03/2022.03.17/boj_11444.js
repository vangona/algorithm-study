// 11444번 피보나치 수 6

// 코드는 복잡하지 않지만, 
// FIBO_MATRIX가 왜 저렇게 구성되는지에 대한 
// 수학적인 접근이 어려움.

// input 처리
// const fs = require('fs');
// const n = BigInt(fs.readFileSync('/dev/stdin').toString().trim());

// 모듈러 선언
const n = BigInt(1000000000000000000);
const BIG_ZERO = BigInt(0);
const BIG_ONE = BigInt(1);
const BIG_TWO = BigInt(2);
// [[Fn, Fn+1], [Fn+1, Fn + Fn+1]]
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

  // 0이 생략되어, n번재로 구하면 순서가 1 차이난다.
  return divideConquer(n - BIG_ONE)[1][1] % MOD;
}

// 분할 정복 함수
function divideConquer(exponent) {
  if (exponent === BIG_ONE) {
    return FIBO_MATRIX;
  } else {
    // 분할 정복 한다.
    if (exponent % BIG_TWO === BIG_ZERO) {
      const dividedMatrix = divideConquer(exponent / BIG_TWO);
      return multiplyMatrix(dividedMatrix, dividedMatrix);    
    } else {
      const dividedMatrix = divideConquer((exponent - BIG_ONE) / BIG_TWO);
      const squredMatrix = multiplyMatrix(dividedMatrix, dividedMatrix);
      return multiplyMatrix(squredMatrix, FIBO_MATRIX);
    }
  }
}

// 행렬 곱셈 함수
function multiplyMatrix(matrixA, matrixB) {
  const computedMatrix = Array.from({ length : 2 }, () => Array.from({ length : 2 }, () => BIG_ZERO));

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        computedMatrix[i][j] += (matrixA[i][k] * matrixB[k][j]) % MOD;
      }
      
      computedMatrix[i][j] %= MOD;
    }
  }

  return computedMatrix;
}