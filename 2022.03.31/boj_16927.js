// 16926번 배열 돌리기 1

// const fs = require('fs');
// let [numbers, ...A] = fs.readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map(line => (
//     line.split(' ')
//     .map(el => el * 1)
//   ));
// const [N, M, R] = numbers;

let [numbers, ...A] = [
  '4 4 114',
  '1 2 3 4',
  '5 6 7 8',
  '9 10 11 12',
  '13 14 15 16'
].map(line => (
  line.split(' ')
  .map(el => el * 1)
));

const [N, M, R] = numbers;

solveProblem();
console.log(A.map(line => line.join(' ')).join('\n'));

function solveProblem() {
  let count = 0;
  let rotateNumber = R % ((N + M - 2) * 2);
  while (count < rotateNumber) {
    rotateMatrix(A);
    count++;
  }
}

function rotateMatrix(matrix) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < Math.min(N, M) / 2; i++) {
    let x = i;
    let y = i;
    let prev = matrix[x][y];

    // dfs
    let edgeCnt = 0;
    while (edgeCnt < 4) {
      const nx = x + dx[edgeCnt];
      const ny = y + dy[edgeCnt];

      // 범위를 넘어가면 방향 전환
      if (nx < i || nx >= N - i || ny < i || ny >= M - i) edgeCnt++;
      else {
        // 범위 내라면, 이동시켜줌
        const curr = matrix[nx][ny];
        matrix[nx][ny] = prev;
        prev = curr;
        x = nx;
        y = ny;
      }
    }
    // 시작값 처리
    matrix[i + 1][i] = prev;
  }
}