// 16926번 배열 돌리기 1

// const fs = require('fs');
// const [numbers, ...A] = fs.readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map(line => (
//     line.split(' ')
//     .map(el => el * 1)
//   ));
// const [N, M, R] = numbers;

const [numbers, ...A] = [
  '4 4 2',
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

function solveProblem() {
  let count = 0;
  while (count < R) {
    // A = rotateMatrix(A);
    count++;
  }

  console.log(count);
}

function rotateMatrix(matrix) {
  const rotatedMatrix = Array.from({ 
    length: matrix.length 
  }, () => Array.from({ 
    length: matrix[0].length 
  }));


}