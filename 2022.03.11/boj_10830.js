// 1629번 곱셈

// const fs = require('fs');
// let [numbers, ...matrix] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [numbers, ...matrix] = ['5 10', '1 0 0 0 1', '1 0 0 0 1', '1 0 0 0 1', '1 0 0 0 1', '1 0 0 0 1'];

const [N, B] = numbers.split(' ').map(el => el * 1);
matrix = matrix.map(line => line.split(' ').map(el => el * 1));

const MOD = 1000;

const answer = divideConquer(matrix, B, N);
console.log(answer.map(line => line.join(' ')).join('\n'));

function divideConquer(base, exponent, length) {
  if (exponent == 1) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        base[i][j] %= MOD;
      }
    }

    return base;
  } else {
    const dividedMatrix = divideConquer(base, parseInt(exponent / 2), length);
    const result = multiplyMatrix(dividedMatrix, dividedMatrix, length);
    
    if (exponent % 2 === 0) {
      return result;
    } else {
      return multiplyMatrix(result, base, length);
    }
  }
} 

function multiplyMatrix(matrixA, matrixB, length) {
  let computedMatrix = Array.from({ length }, () => Array.from({length}, () => 0));

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      for (let k = 0; k < length; k++) {
        computedMatrix[i][j] += (matrixA[i][k] * matrixB[k][j]);
      }

      computedMatrix[i][j] %= MOD;
    }
  }

  return computedMatrix;
}