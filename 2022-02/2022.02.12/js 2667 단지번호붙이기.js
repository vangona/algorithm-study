// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let input = ['5', '01101', '01101', '11101', '00001', '01000'];

const N = input.shift() * 1;
let visited = new Array(N);
for (let i = 0; i < N; i++) {
    visited[i] = new Array(N);
}

input = input.map(line => line.split('').map(el => el * 1));

let complexCount = 0;
let houseCount = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (visited[i][j]) continue;

        if (input[i][j]) {
            dfs(i, j);
            complexCount++;
        }
    }
}


houseCount.sort((a, b) => a - b);
const answer = complexCount + '\n' + houseCount.join('\n');
console.log(answer);

function dfs(column, row) {
    if (houseCount[complexCount]) {
        houseCount[complexCount] += 1;
    } else {
        houseCount[complexCount] = 1;
    }
    visited[column][row] = true;

    const checkArr = checkSides(column, row);
    for (let i = 0; i < checkArr.length; i++) {
        if(visited[checkArr[i][0]][checkArr[i][1]]) continue;

        dfs(checkArr[i][0], checkArr[i][1]);
    }
}

function checkSides(x, y) {
    const result = [];

    if (x + 1 < N && input[x + 1][y]) result.push([x + 1, y]);

    if (x - 1 >= 0 && input[x - 1][y]) result.push([x - 1, y]);

    if (y + 1 < N && input[x][y + 1]) result.push([x, y + 1]);

    if (y - 1 >= 0 && input[x][y - 1]) result.push([x, y - 1]);

    return result;
}