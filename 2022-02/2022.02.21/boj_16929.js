// Two Dots

// const fs = require('fs');
// let [numbers, ...board] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [numbers, ...board] = ['2 2', 'AB', 'BB'];

const [N, M] = numbers.split(' ').map(el => el * 1);
board = board.map(line => line.split(''));

let visited = Array.from({ length : N }, () => new Array(M));

let yesFlag = false;
let startIndex = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {       
    if (visited[i][j]) continue;

    // 시작점을 전역변수에 저장한다.
    startIndex = [i, j];
    visited[i][j] = true;
    dfs(1, i, j);
    visited[i][j] = false;
    if (yesFlag) break;
  }
}

console.log(yesFlag ? 'Yes' : 'No');

// dfs 함수
function dfs(depth, column, row) {
  if (yesFlag) return;

  const moveArr = [[column + 1, row], [column, row + 1], [column - 1, row], [column, row - 1]];

  // 사방을 확인한다.
  for ([moveColumn, moveRow] of moveArr) {
    // 각 위치가 범위에 맞는지, 같은 색인지 확인한다.
    if (checkPoint(moveColumn, moveRow)) {
      // 이어진 선이 4개 이상이면, 사이클이 되었는지 확인한다.
      if (depth >= 4) {
        if (checkCycle(moveColumn, moveRow)) {
          yesFlag = true; 
          return;
        } 
      } 
      
      // 방문했으면 지나간다. 사이클 확인 뒤에 위치시킨다.
      if (visited[moveColumn][moveRow]) continue;

      visited[moveColumn][moveRow] = true;
      dfs(depth + 1, moveColumn, moveRow);
      visited[moveColumn][moveRow] = false;
    }
  }
}

// 범위와 색 확인
function checkPoint(column, row) {
  if (column < N && column >= 0 && row < M && row >= 0 
    && board[startIndex[0]][startIndex[1]] === board[column][row]) {
    return true;
  } else {
    return false;
  }
}

// 사이클이 되었는지 확인하는 함수.
function checkCycle(column, row) {
  if (column === startIndex[0] && row === startIndex[1]) {
    return true;
  } else {
    return false;
  }
}