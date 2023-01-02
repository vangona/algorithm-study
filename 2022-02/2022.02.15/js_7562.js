// input 처리
// const fs = require('fs');
// let [T, ...cases] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [T, ...cases] = ['5', '8', '0 0', '7 0', '100', '0 0', '30 50', '10', '1 1', '1 1', '4', '0 0', '0 0', '300', '0 0', '299 299'];

T = T * 1;
let lineIndex = 0;
let answer = [];

// 사례 해결 반복문
while (lineIndex < T) {
    const N = cases[lineIndex * 3] * 1;
    const start = cases[lineIndex * 3 + 1].split(' ').map(el => el * 1);
    const end = cases[lineIndex * 3 + 2].split(' ').map(el => el * 1);

    answer.push(bfs(N, start, end));

    lineIndex++;
}

console.log(answer.join('\n'));

// 탐색 함수
function bfs(N, start, end) {
    // 시작점과 끝 점이 같으면, 0을 반환.
    if (start[0] === end[0] && start[1] === end[1]) return 0;

    // 변수 선언
    const variation = [[2, 1], [1, 2], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
    const willVisit = [];

    // 방문한 지점은 다시 방문할 필요가 없으니, visited 배열을 선언해줌.
    let visited = new Array(N);
    for (let i = 0; i < N; i++) {
        visited[i] = new Array(N).fill(0);
    }

    // 시작점에서 갈 수 있는 지점을 확인해서, willVisit 큐에 추가함.
    visited[start[0]][start[1]] = 1;
    for (let i = 0; i < 8; i++) {
        const moveColumn = start[0] + variation[i][0];
        const moveRow = start[1] + variation[i][1];

        if (checkNeedVisit(N, moveColumn, moveRow, visited)) {
            visited[moveColumn][moveRow] = 1;
            willVisit.push([moveColumn, moveRow]);
        }
    }

    // bfs 몸체 실행.
    while (willVisit.length) {
        const [column, row] = willVisit.shift();

        // 도착한 지점이 종료 지점과 같으면 반환함.
        if (column === end[0] && row === end[1]) {
            return visited[column][row];
        }

        for (let i = 0; i < 4; i++) {
            const moveColumn = column + variation[i][0];
            const moveRow = row + variation[i][1];

            if (checkNeedVisit(N, moveColumn, moveRow, visited)) {
                visited[moveColumn][moveRow] = visited[column][row] + 1;

                willVisit.push([moveColumn, moveRow]);
            }
        }
    }
}

// 이동할 지점이 범위 내에 있는지, 방문하지 않았는지 확인하는 함수.
function checkNeedVisit(N, column, row, visited) {
    if (column < 0 || column >= N || row < 0 || row >= N || visited[column][row]) return false;
    return true; 
}