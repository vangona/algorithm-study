// const fs = require('fs');
// let [numbers, ...maze] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [numbers, ...maze] = ['7 7', '1111111', '1111111', '1111111', '1111111', '1111111', '1111111', '1111111'];

const [N, M] = numbers.split(' ').map(el => el * 1);
maze = maze.map(line => line.split('').map(el => el * 1));

let visit = new Array(N);
for (let i = 0; i < N; i++) {
    visit[i] = new Array(M).fill(0);
}
let minCnt = 300;

bfs(0, 0);
console.log(visit[N - 1][M - 1]);

function bfs(startColumn, startRow) {
    const checkArr = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const willVisit = [];

    willVisit.push([startColumn, startRow]);
    visit[startColumn][startRow] = 1;  

    while(willVisit.length) {
        const [column, row] = willVisit.shift();

        for (let i = 0; i < 4; i++) {
            const moveColumn = column + checkArr[i][0];
            const moveRow = row + checkArr[i][1];

            if (checkPath(moveColumn, moveRow)) {
                visit[moveColumn][moveRow] = visit[column][row] + 1;
                willVisit.push([moveColumn, moveRow]);
            }
        }
    }
}

function checkPath(column, row) {
    
    if (column < N && column >= 0 && row < M && row >= 0 && maze[column][row] && !visit[column][row]) {
        return true;
    } 

    return false;
}