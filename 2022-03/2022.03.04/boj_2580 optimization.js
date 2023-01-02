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
  if (answer) return;

  if (depth === VISIT_LENGTH) {
    for (let i = 0; i < 9; i++) {
      answer += sudoku[i].join(' ') + '\n';
    }

    return;
  }

  const [currColumn, currRow] = blankArr[depth];

  for (let number = 1; number <= 9; number++) {
    if (answer) return;

    if (!checkColumn(number, currRow)) continue;
    if (!checkRow(number, currColumn)) continue;
    if (!checkBlock(number, blankArr[depth])) continue;

    sudoku[currColumn][currRow] = number;
    dfs(depth + 1);
    sudoku[currColumn][currRow] = 0;
  }
}

function checkColumn(number, row) {
  for (let i = 0; i < 9; i++) {
    if (sudoku[i][row] === number) return false;
  }

  return true;
}

function checkRow(number, column) {
  for (let i = 0; i < 9; i++) {
    if (sudoku[column][i] === number) return false;
  }
  
  return true;
}

function checkBlock(number, index) {
  const [column, row] = index;
  const blockColumn = Math.floor(column / 3) * 3;
  const blockRow = Math.floor(row / 3) * 3;

  for (let i = blockColumn; i < blockColumn + 3; i++) {
    for (let j = blockRow; j < blockRow + 3; j++) {
      if (sudoku[i][j] === number) return false;
    }    
  }

  return true;
}