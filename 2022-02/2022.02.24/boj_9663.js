// 9663번 N-Queen

// input 처리
// const fs = require('fs');
// const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim()) * 1;

const N = '14' * 1;

// 변수 선언
let cases = 0;
let visited = Array.from({ length: N }, () => new Array(N).fill(0));

// 함수 실행 및 결과 출력
dfs(0);
console.log(cases);

function dfs(queensCount) {
  // queen이 N개 놓여지면 사례수에 추가 후 dfs 종료.
  if (queensCount === N) {
    cases++;
    return;
  }
    
  // 해당 열의 행 중 공격 범위에 없는 곳에 queen을 놓는다.
  for (let row = 0; row < N; row++) {
    if (visited[queensCount][row]) continue;

    setQueen(queensCount, row);
    dfs(queensCount + 1);
    unsetQueen(queensCount, row);    
  }
}

// queen을 놓는 함수. 공격 범위가 가능한 곳을 방문 값에 1을 더해준다.
function setQueen(column, row) {
  for (let i = 1; i < N; i++) {
    if (column + i < N) {
      visited[column + i][row] += 1;

      if (row + i < N) {
        visited[column + i][row + i] += 1;
      }
        
      if (row - i >= 0) {
        visited[column + i][row - i] += 1;
      }
    }
  }
}

// queen을 빼는 함수. unset 할 때 여러 queen이 겹치는 지점이 있을 수 있기 때문에 Boolean이 아닌 정수로 처리해주었다. settingState를 사용하면 함수를 재사용 할 수 있지만, dfs 함수 내의 가독성이 떨어져서 둘로 나누어주었다.
function unsetQueen(column, row) {
  for (let i = 1; i < N; i++) {
    if (column + i < N) {
      visited[column + i][row] -= 1;

      if (row + i < N) {
        visited[column + i][row + i] -= 1;
      }
    
      if (row - i >= 0) {
        visited[column + i][row - i] -=1;
      }
    }
  }
}