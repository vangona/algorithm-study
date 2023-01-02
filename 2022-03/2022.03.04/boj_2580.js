// 2580번 스도쿠

// const fs = require('fs');
// let [...sudoku] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [...sudoku] = ['0 3 5 4 6 9 2 7 8', '7 8 2 1 0 5 6 0 9', '0 6 0 2 7 8 1 3 5', '3 2 1 0 4 6 8 9 7', '8 0 4 9 1 3 5 0 6', '5 9 6 8 2 0 4 1 3', '9 1 7 6 5 2 0 8 0', '6 0 3 7 0 1 9 5 2', '2 5 8 3 9 4 7 6 0'];

sudoku = sudoku.map(line => line.split(' ').map(el => el * 1));
let blankArr = [];
let answer = '';

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (sudoku[i][j]) continue;

    blankArr.push([i, j]);
  }
}

const VISIT_LENGTH = blankArr.length;

dfs(0, 0);
console.log(answer);

function dfs(depth) {
  if (depth === VISIT_LENGTH) {
    for (let i = 0; i < 9; i++) {
      answer += sudoku[i].join(' ') + '\n';
    }

    return;
  }

  for (let number = 1; number <= 9; number++) {
    if (answer) return;

    if (!checkBlock(number, blankArr[depth]) || !checkLine(number, blankArr[depth])) continue;

    sudoku[blankArr[depth][0]][blankArr[depth][1]] = number;
    dfs(depth + 1);
    sudoku[blankArr[depth][0]][blankArr[depth][1]] = 0;
  }
}

function checkLine(number, index) {
  const [column, row] = index;

  for (let i = 1; i < 9; i++) {
    if (column + i < 9) {
      if (sudoku[column + i][row] === number) return false;
    }

    if (column - i >= 0) {
      if (sudoku[column - i][row] === number) return false;
    }

    if (row + i < 9) {
      if (sudoku[column][row + i] === number) return false;
    }

    if (row - 1 >= 0) {
      if (sudoku[column][row - i] === number) return false;
    }
  }

  return true;
}

function checkBlock(number, index) {
  const [column, row] = index;
  const blockColumn = Math.floor(column / 3);
  const blockRow = Math.floor(row / 3);

  for (let i = blockColumn * 3; i < blockColumn * 3 + 3; i++) {
    for (let j = blockRow * 3; j < blockRow * 3 + 3; j++) {
      if (sudoku[i][j] === number) return false;
    }    
  }

  return true;
}