// 13460번 구슬 탈출 2 => 아직은 구현 부족.

const fs = require('fs');
let [numbers, ...boardOirigin] = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = numbers.split(' ').map(el => el * 1);
boardOirigin = boardOirigin.map(line => line.split(''));
const tiltDirection = ['up', 'down', 'right', 'left'];
let answer = -1;

solveProblem();
console.log(answer);

function solveProblem() {
  dfs(0, boardOirigin);
}

function dfs(depth, board, prevDirection) {
  if (depth === 10) {
    answer = -1;
    return;
  }

  for (let i = 0; i < 4; i++) {
    const movedBoard = tilt(board, tiltDirection[i]);
    if (movedBoard === 'escape') {
      answer = depth;
    } else if (movedBoard === 'stop') {
      continue;
    } else {
      dfs(depth + 1, movedBoard);
    }
  }
}

function tilt(board, direction) {
  switch (direction) {
    case 'up' :
      return tiltUpward(board);
    case 'down' :
      return tiltDownward(board);
    case 'left' :
      return tiltLeftward(board);
    case 'right' :
      return tiltRightward(board);
  } 
}

function tiltUpward(board) {
  
}

function tiltDownward(board) {
  const movedBoard = [];
}

function tiltRightward(board) {
  const movedBoard = [];
}

function tiltLeftward(board) {
  const movedBoard = [];
}

function checkRange(board) {

}