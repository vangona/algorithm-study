// const fs = require('fs');
// let [numbers, ...tomatos] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [numbers, ...tomatos] = ['2 2', '1 0', '1 1'];

const [M, N] = numbers.split(' ').map(el => el * 1);

tomatos = tomatos.map(line => line.split(' ').map(el => el * 1));

let visited = new Array(N);
for (let i = 0; i < N; i++) {
    visited[i] = new Array(M);
    for (let j = 0; j < M; j++) {
        if (tomatos[i][j] === -1) visited[i][j] = true;
    }
}

let isFinish = false;

if (checkAllRipen()) {
    console.log(0);
} else {
    const answer = bfs();
    console.log(answer);    
}

function bfs() {
    let lastDay = 0;
    const diffArr = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const willVisit = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (tomatos[i][j] === 1) {
                for (let k = 0; k < 4; k++) {
                    const [moveColumn, moveRow] = [i + diffArr[k][0], j + diffArr[k][1]];
                    if (checkTomato(moveColumn, moveRow)) {
                        willVisit.push([moveColumn, moveRow]);
                        visited[moveColumn][moveRow] = true;
                    }
                }
            }
        }
    }

    while(!isFinish) {
        const needVisit = [];

        while(willVisit.length) {            
            const [column, row] = willVisit.pop();   
            tomatos[column][row] = 1;
            
            for (let i = 0; i < 4; i++) {
                const [moveColumn, moveRow] = [column + diffArr[i][0], row + diffArr[i][1]]
                if ( checkTomato(moveColumn, moveRow) ) {
                    needVisit.push([moveColumn, moveRow]);
                    visited[moveColumn][moveRow] = true;
                }
            }            
        } 

        if (needVisit.length) {
            willVisit.push(...needVisit);
        } else {
            if (!checkAllRipen()) {
                return -1;
            }
            isFinish = true;
        }

        lastDay++;
    }

    return lastDay;
}

function checkTomato(column, row) {
    if (column >= N || column < 0 || row >= M || row < 0) return false;
    if (visited[column][row]) return false;
    return true;
}

function checkAllRipen() {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (tomatos[i][j] === 0) {
                return false;
            }
        }
    }

    return true;
}