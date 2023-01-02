// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let input = ['1 1', '0', '2 2', '0 1', '1 0', '3 2', '1 1 1', '1 1 1', '5 4', '1 0 1 0 0', '1 0 0 0 0', '1 0 1 0 1', '1 0 0 1 0', '5 4', '1 1 1 0 1', '1 0 1 0 1', '1 0 1 0 1', '1 0 1 1 1', '5 5', '1 0 1 0 1', '0 0 0 0 0', '1 0 1 0 1', '0 0 0 0 0', '1 0 1 0 1', '0 0'];

let index = 0;
let visited;
let answer = '';

input = input.map(line => line.split(' ').map(el => el * 1));

while(input[index][0] !== 0) {
    const [W, H] = input[index];

    const map = [];
    let mapIndex = 0;
    for (let i = index + 1; i < index + H + 1; i++) {
        map[mapIndex] = [...input[i]];
        mapIndex++;
    }

    let islandCnt = 0;
    visited = new Array(H);
    for (let i = 0; i < H; i++) {
        visited[i] = new Array(W);
    }

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (visited[i][j] || !map[i][j]) continue;

            dfs(i, j, map, W, H);
            islandCnt++;
        }
    }
    
    answer += islandCnt + '\n';
    index += H + 1;
}

console.log(answer);

function dfs(column, row, map, W, H) {

    visited[column][row] = true;
    const needVisitArr = checkLand(column, row, map, W, H);
    
    for (let i = 0; i < needVisitArr.length; i++) {
        if (visited[needVisitArr[i][0]][needVisitArr[i][1]]) continue;

        dfs(needVisitArr[i][0], needVisitArr[i][1], map, W, H);
    }
}

function checkLand(column, row, map, W, H) {
    let result = [];

    if (column + 1 < H) {
        if (map[column + 1][row]) {
            result.push([column + 1, row]);
        }
        
        if (row + 1 < W && map[column + 1][row + 1]) {    
            result.push([column + 1, row + 1]);
        }

        if (row - 1 >= 0 && map[column + 1][row - 1]) {
            result.push([column + 1, row - 1]);
        } 
    }
    
    if (row + 1 < W) {
        if (map[column][row + 1]) {
            result.push([column, row + 1]);
        }

        if (column - 1 >= 0 && map[column - 1][row + 1]) {
            result.push([column - 1, row + 1]);
        }
    }

    if (column - 1 >= 0) {
        if (map[column - 1][row]) {
            result.push([column - 1, row]);
        }

        if (row - 1 >= 0 && map[column - 1][row - 1]) {
            result.push([column - 1, row - 1]);
        }
    }

    if (row - 1 >= 0) {
        if (map[column][row - 1]) {
            result.push([column, row - 1]);
        }
    }

    return result;
}