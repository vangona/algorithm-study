// 10830번 행렬 제곱

// input 처리
// const fs = require('fs');
// let [numbers, ...matrix] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [numbers, ...matrix] = ['5 10', '1 0 0 0 1', '1 0 0 0 1', '1 0 0 0 1', '1 0 0 0 1', '1 0 0 0 1'];

const [N, B] = numbers.split(' ').map(el => el * 1);
matrix = matrix.map(line => line.split(' ').map(el => el * 1));

// moduler 상수 선언
const MOD = 1000;

// 분할 정복 함수 실행 및 답안 출력
const answer = divideConquer(matrix, B, N);
console.log(answer.map(line => line.join(' ')).join('\n'));

// 분할 정복 함수
function divideConquer(base, exponent, length) {
  if (exponent == 1) {
    // 지수가 1이면, 
    // 행렬 원소들의 모듈러를 구해준다
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        base[i][j] %= MOD;
      }
    }

    return base;
  } else {
    // 지수가 1이 아니면, 분할 정복 한다.
    // multyplyMatrix는 행렬 곱셈 함수이다.
    const dividedMatrix = divideConquer(base, parseInt(exponent / 2), length);
    const result = multiplyMatrix(dividedMatrix, dividedMatrix, length);

    if (exponent % 2 === 0) {
      return result;
    } else {
      return multiplyMatrix(result, base, length);
    }
  }
} 

// 행렬 곱셈 함수
function multiplyMatrix(matrixA, matrixB, length) {
  let computedMatrix = Array.from({ length }, () => Array.from({length}, () => 0));

  // 행렬을 돌아다니면서, 곱셈해준다.
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      for (let k = 0; k < length; k++) {
        computedMatrix[i][j] += (matrixA[i][k] * matrixB[k][j]);
      }

      // 행렬의 원소들의 모듈러를 구해준다.
      computedMatrix[i][j] %= MOD;
    }
  }

  return computedMatrix;
}