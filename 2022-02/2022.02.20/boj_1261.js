// 알고스팟

// input 처리
const fs = require('fs');
let [numbers, ...maze] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let [numbers, ...maze] = ['1 1', '0'];

const [N, M] = numbers.split(' ').map(el => el * 1);
maze = maze.map(line => line.split('').map(el => el * 1));

// bfs 실행 및 정답 출력
const answer = bfs(N, M);
console.log(answer);

// 0-1 bfs 함수
function bfs(N, M) {
    // 1칸인 경우를 예외처리.
    if (N === 1 && M === 1) return 0;

    // visited와 willVisit 선언
    let visited = Array.from({ length: M }, () => new Array(N));
    let willVisit = [];

    // AOJ, 대망의 첫 발사
    visited[0][0] = true;
    launchAoj(0, 0, 0);

    // bfs 몸체 실행
    while(willVisit.length) {
        const [column, row, count] = willVisit.shift();

        if (column === M - 1 && row === N - 1) return count;

        launchAoj(column, row, count);
    }
    
    function launchAoj(column, row, count) {
        const next = [[column + 1, row], [column, row + 1], [column - 1, row], [column, row - 1]]

        for (let i = 0; i < next.length; i++) {
            if(checkRange(next[i][0], next[i][1])) {
                // 벽의 유무에 따라 가중치를 두어서 0-1 bfs로 접근한다
                if (maze[next[i][0]][next[i][1]]) {
                    willVisit.push([next[i][0], next[i][1], count + 1]);
                } else {
                    willVisit.unshift([next[i][0], next[i][1], count]);
                }

                visited[next[i][0]][next[i][1]] = true;
            }
        }
    }

    // 범위 확인 함수
    function checkRange(column, row) {
        if (column >= 0 && column < M && row >= 0 && row < N && !visited[column][row]) {
            return true;
        } else {
            return false;
        }
    }
}