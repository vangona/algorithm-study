// 1780번 종이의 개수

// const fs = require('fs');
// let [N, ...paper] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, ...paper] = ['9', '0 0 0 1 1 1 -1 -1 -1', '0 0 0 1 1 1 -1 -1 -1', '0 0 0 1 1 1 -1 -1 -1', '1 1 1 0 0 0 0 0 0', '1 1 1 0 0 0 0 0 0', '1 1 1 0 0 0 0 0 0', '0 1 -1 0 1 -1 0 1 -1', '0 -1 1 0 1 -1 0 1 -1', '0 1 -1 1 0 -1 0 1 -1'];

// 계수를 위한 클로저 선언 (클로저 써보고 싶었음)
const countNumbers = (() => {
  let minusOne = 0;
  let zero = 0;
  let one = 0;

  return {
    minuseOne() {
      return minusOne++;
    },
    zero() {
      return zero++;
    },
    one() {
      return one++;
    },
    answer() {
      return [minusOne, zero, one];
    }
  }
})();

// 문제 풀이 함수
function solveProblem() {
  N = N * 1;
  paper = paper.map(line => line.split(' '));  

  divideConquer(0, 0, N);
  return countNumbers.answer();
}

// 분할 정복 함수
function divideConquer(column, row, length) {
  if (checkBox(column, row, length)) {
    const initialValue = paper[column][row];
    if (initialValue === '-1') {
      countNumbers.minuseOne();
    } else if (initialValue === '0') {
      countNumbers.zero();
    } else {
      countNumbers.one();
    }
  } else {
    const dividedLength = length / 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        divideConquer(column + dividedLength * i, row + dividedLength * j, dividedLength);
      }
    }
  }
}

// 분면 확인 함수
function checkBox(column, row, length) {
  const initialValue = paper[column][row];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (paper[column + i][row + j] !== initialValue) {
        return false;
      }
    }
  }

  return true;
}

// 함수 실행 및 결과값 출력
const answer = solveProblem();
console.log(answer.join('\n'));
