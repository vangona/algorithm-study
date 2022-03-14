// 2740번 행렬 곱셈

// input 처리
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['3 2', '1 2', '3 4', '5 6', '2 3', '-1 -2 0', '0 0 3'];

const [N, M] = input.shift().split(' ').map(el => el * 1);
const matrixA = input.splice(0, N).map(line => line.split(' ').map(el => el * 1));
const K = input.shift().split(' ').map(el => el * 1)[1];
const matrixB = input.splice(0, M).map(line => line.split(' ').map(el => el * 1));

// 함수 실행 및 답안 출력
const answer = multiplyMatrix(matrixA, matrixB);
console.log(answer.map(line => line.join(' ')).join('\n'));

// 행렬 곱셈 함수
function multiplyMatrix(matrixA, matrixB) {
  let computedMatrix = Array.from({ length: N }, () => Array.from({ length: K }, () => 0));

  // 행렬을 돌아다니면서, 곱셈해준다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < K; j++) {
      for (let k = 0; k < M; k++) {
        computedMatrix[i][j] += (matrixA[i][k] * matrixB[k][j]);
      }
    }
  }

  return computedMatrix;
}