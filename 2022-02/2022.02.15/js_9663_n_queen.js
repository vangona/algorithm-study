// const fs = require('fs');
// const N = fs.readFileSync('/dev/stdin').toString().trim() * 1;

const N = 8;

let visited = new Array(N);
for (let i = 0; i < N; i++) {
    visited[i] = new Array(N);
}
let queens = new Array(N);
for (let i = 0; i < N; i++) {
    queens[i] = new Array(N);
}
let count = 0;

dfs(0);
console.log(count);

function dfs(depth) {
    if (depth === N) {
        count++;
        return;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            queens.push([i, j]);
            dfs(depth + 1, visited);
            queens.pop();
        }
    }
}

function paintVisited(column, row) {
    for (let i = column; i >= 0; i--) {
        visited[i][row] = true;
    }

    for (let i = column; i < N; i++) {
        visited[i][row] = true;
    }

    for (let i = row; i >= 0; i--) {
        visited[column][i] = true;
    }

    for (let i = row; i < N; i++) {
        visited[column][i] = true;
    }

    for (let i = 0; i < N; i++) {
        if (column - i >= 0) {
            if (row - i >= 0) {
                visited[column - i][row - i] = true; 
            }

            if (row + i < N) {
                visited[column - i][row + i] = true; 
            }
        }

        if (column + i < N) {
            if (row - i >= 0) {
                visited[column + i][row - i] = true; 
            }

            if (row + i < N) {
                visited[column + i][row + i] = true; 
            }
        }
    }
}