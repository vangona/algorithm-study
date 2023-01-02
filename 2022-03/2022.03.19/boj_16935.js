// 16935번 배열 돌리기 3

// input 내용 변수 처리
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

const input = [
  '6 8 8',
  '3 2 6 3 1 2 9 7',
  '9 7 8 2 1 4 5 3',
  '5 9 2 1 9 6 1 8',
  '2 1 3 8 6 3 9 2',
  '1 3 2 8 7 9 2 1',
  '4 5 1 9 8 2 1 3',
  '2 1 4 3 3 3 6 5'
]

const calculations = input.pop().trim().split(' ').map(el => el * 1);

let [numbers, ...A] = input;
const [N, M, R] = numbers.trim().split(' ').map(el => el * 1);
A = A.map(line => line.trim().split(' ').map(el => el * 1));

// 함수 실행 및 답안 출력
const answer = solveProblem();
console.log(answer);

function solveProblem() {
  calculations.forEach(calculation => {
    // switch 문을 사용해서 연산을 나눠줌.
    // 가독성을 위해 default 사용하지 않음.
    switch (calculation) {
      case 1 :
        A = reverseMatrix(A, true);
        break;
      case 2 :
        A = reverseMatrix(A, false);
        break;
      case 3 :
        A = rotateMatrix(A, true);
        break;
      case 4 :
        A = rotateMatrix(A, false);
        break;
      case 5 :
        A = rotateBlock(A, true);
        break;
      case 6 :
        A = rotateBlock(A, false);
        break;
    }
  });

  return A.map(line => line.join(' ')).join('\n');
}

function reverseMatrix(matrix, direction) {
  const MATRIX_HEIGHT= matrix.length;
  const MATRIX_WIDTH = matrix[0].length;

  const resultArr = Array.from({ 
    // 받아온 matrix의 높이를 높이로
    length: MATRIX_HEIGHT
  }, () => (
    Array.from({ 
      // 받아온 matrix의 너비를 너비로
      length: MATRIX_WIDTH
    })
  ));
  
  if (direction) {
    // 상하반전
    for (let i = 0; i < MATRIX_HEIGHT / 2; i++) {
      resultArr[MATRIX_HEIGHT - i - 1] = A[i];
      resultArr[i] = A[MATRIX_HEIGHT - i - 1];
    }
  } else {
    // 좌우반전
    for (let i = 0; i < MATRIX_HEIGHT; i++) {
      for (let j = 0; j < MATRIX_WIDTH / 2; j++) {
        resultArr[i][MATRIX_WIDTH - j - 1] = A[i][j];
        resultArr[i][j] = A[i][MATRIX_WIDTH - j - 1];
      }
    }
    A.map(line => line.reverse());
  }

  return resultArr;
}

// Matrix 90도 회전
function rotateMatrix(matrix, direction) {
  const MATRIX_HEIGHT= matrix.length;
  const MATRIX_WIDTH = matrix[0].length;

  const resultArr = Array.from({ 
    // 인자로 받아온 matrix의 너비를 높이로
    length: MATRIX_WIDTH
  }, () => (
    Array.from({ 
      // 인자로 받아온 matrix의 높이를 너비로
      length: MATRIX_HEIGHT
    })
  ));

  matrix.forEach((line, column) => {
    line.forEach((el, row) => {
      if (direction) {
        // 우측 90도 회전
        resultArr[row][MATRIX_HEIGHT - column - 1] = el;
      } else {
        // 좌측 90도 회전
        resultArr[MATRIX_WIDTH - row - 1][column] = el;
      }
    })
  });

  return resultArr;
}

// Matrix를 넷으로 나눠서 회전
function rotateBlock(matrix, direction) {
  const MATRIX_HEIGHT= matrix.length;
  const MATRIX_WIDTH = matrix[0].length;

  const resultArr = Array.from({ 
    // 받아온 matrix의 높이를 높이로
    length: MATRIX_HEIGHT
  }, () => (
    Array.from({ 
      // 받아온 matrix의 너비를 너비로
      length: MATRIX_WIDTH
    })
  ));

  // 각 사분면에 맞춰서 좌표를 변경해준다.
  matrix.forEach((line, column) => {
    line.forEach((el, row) => {
      if (row < MATRIX_WIDTH / 2 && 
        column < MATRIX_HEIGHT / 2) {
        firstQuadrant(el, column, row);
      } else if (row >= MATRIX_WIDTH / 2 && 
        column < MATRIX_HEIGHT / 2) {
        secondQuadrant(el, column, row);
      } else if (row >= MATRIX_WIDTH / 2 && 
        column >= MATRIX_HEIGHT / 2) {
        thirdQuadrant(el, column, row);
      } else if (row < MATRIX_WIDTH / 2 && 
        column >= MATRIX_HEIGHT / 2) {
        fourthQuadrant(el, column, row);
      }
    })
  });

  return resultArr;

  // 1사분면 이동 함수
  function firstQuadrant(el, column, row) {
    if (direction) {
      resultArr[column][row + MATRIX_WIDTH / 2] = el;
    } else {
      resultArr[column + MATRIX_HEIGHT / 2][row] = el;
    }
  }
  
  // 2사분면 이동 함수
  function secondQuadrant(el, column, row) {
    if (direction) {
      resultArr[column + MATRIX_HEIGHT / 2][row] = el;
    } else {
      resultArr[column][row - MATRIX_WIDTH / 2] = el;
    }
  }

  // 3사분면 이동 함수
  function thirdQuadrant(el, column, row) {
    if (direction) {
      resultArr[column][row - MATRIX_WIDTH / 2] = el;
    } else {
      resultArr[column - MATRIX_HEIGHT / 2][row] = el;
    }
  }

  // 4사분면 이동 함수
  function fourthQuadrant(el, column, row) {
    if (direction) {
      resultArr[column - MATRIX_HEIGHT / 2][row] = el;
    } else {
      resultArr[column][row + MATRIX_WIDTH / 2] = el;
    }
  }
}