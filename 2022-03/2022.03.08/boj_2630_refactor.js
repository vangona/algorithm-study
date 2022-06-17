// 2630번 색종이 만들기

// 입력 처리
// const fs = require('fs');
// let [N, ...paper] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 테스트 값
let [N, ...paper] = ['8', '1 1 0 0 0 0 1 1', '1 1 0 0 0 0 1 1', '0 0 0 0 1 1 0 0', '0 0 0 0 1 1 0 0', '1 0 0 0 1 1 1 1', '0 1 0 0 1 1 1 1', '0 0 1 1 1 1 1 1', '0 0 1 1 1 1 1 1'];

// solve 함수 실행 및 답안 출력
const answer = solveProblem(N, paper);
console.log(answer.join('\n'));

// solveProblem 함수
function solveProblem(N, paper) {
  // 문제 풀이를 위한 입력 값 정수처리
  N = N * 1;
  paper = paper.map(line => line.split(' ').map(el => el * 1));
  
  // white와 blue를 처리하기 쉽도록 선언해준다.
  let white = 0;
  let blue = 0;
  
  // 분할 정복 함수 실행,계수된 white와 blue 값을 반환해준다.
  divideConquer(0, 0, N);
  return [white, blue];

  // 분할 정복 함수
  function divideConquer(column, row, length) {
    // 분할된 분면의 시작 값과 길이를 통해서 
    // 같은 색으로 이루어져있는지 체크해준다.
    if (checkBox(column, row, length)) {
      // 분면이 모두 같은 색으로 되어있다면, 
      // 색에 따라서 white 혹은 blue에 계수해준다.
      if (paper[column][row]) {
        blue++;
      } else {
        white++;
      }
    } else {
      // 분면에 다른 색이 포함되어 있다면,
      // 분면을 다시 4개로 나눠서 탐색해준다.
      const dividedLength = length / 2;
      divideConquer(column, row, dividedLength);
      divideConquer(column + dividedLength, row, dividedLength);
      divideConquer(column, row + dividedLength, dividedLength);
      divideConquer(column + dividedLength, row + dividedLength, dividedLength);
    }
  }
  
  // 분면이 모두 같은 색으로 되어있는지 확인하는 함수
  function checkBox(column, row, length) {
    // 초기 색상 값을 저장한다.
    const color = paper[column][row];
    // 분면을 돌며 색상 값과 비교하고, 
    // 모두 같으면 true를, 아니라면 false를 반환한다.
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (paper[column + i][row + j] !== color) {
          return false;
        }
      }
    }
  
    return true;
  }
}