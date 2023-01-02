// const fs = require('fs');
// const paper = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const paper = ['4 4', '0001', '0000', '0000', '1001'];

const [N, M] = paper.shift().split(' ').map(el => el * 1);
for(let i = 0; i < N; i++) {
    paper[i] = paper[i].split('').map(el => el * 1);
}

let visited = new Array(N);
for (let i = 0; i < N; i++) {
    visited[i] = new Array(M);
}
let sum = 0;
let maxSum = 0;

dfs(0, 0, 0);
console.log(maxSum);

function dfs(count, column, row) {
    if (count === N * M) {
        if (maxSum < sum) maxSum = sum;
        return;
    }

    if (column === N || row === M) return;
    if (visited[column][row]) return;
    
    for (let i = column; i < N; i++) {
        if (visited[i][row]) continue;

        let number = '';
        for (let j = column; j <= i; j++) {
            if (visited[j][row]) break;
            number += paper[j][row];
            visited[j][row] = true;
        }
        sum += number * 1;

        if (i + 1 === N) {
            dfs(count + number.length, 0, row + 1);
        } else {
            dfs(count + number.length, i + 1, row);
        }

        sum -= number * 1;
        for (let j = column; j <= i; j++) {
            visited[j][row] = false;
        }
    }

    for (let i = row; i < M; i++) {
        if (visited[column][i]) continue;

        let number = '';
        for (let j = row; j <= i; j++) {
            if (visited[column][j]) break;
            number += paper[column][j];
            visited[column][j] = true;
        }
        sum += number * 1;

        if (i + 1 === M) {
            dfs(count + number.length, column + 1, 0);
        } else {
            dfs(count + number.length, column, i + 1);
        }

        sum -= number * 1;
        for (let j = row; j <= i; j++) {
            visited[column][j] = false;
        }
    }
}