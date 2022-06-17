// 숨바꼭질 3

// input 처리
// const fs = require('fs');
// const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(el => el * 1);

const [n, k] = [0, 100000];

// bfs 실행 & 결과 출력
const answer = bfs(n, k);
console.log(answer)

function bfs(n, k) {
    // 시작점과 끝점이 같으면 바로 0을 반환해줌.
    if (n === k) return 0;

    // 방문시 최대 값을 적어준다. 
    const MAX_POINT = 100000;
    const willVisit = [];

    // 최소 시간을 구하는 문제이기 때문에, 방문한 지점을 다시 방문할 필요가 없음.
    let visited = new Array(MAX_POINT + 1);

    visited[n] = true;
    willVisit.push([n, 0]);
    
    while (willVisit.length) {
        const [point, time] = willVisit.shift();

        if (point === k) return time; 

        const nextArr = [point * 2, point + 1, point - 1];

        for (next of nextArr) {
            if (checkPoint(next)) {
                if (next === point * 2) {
                    willVisit.unshift([next, time]);
                } else {
                    willVisit.push([next, time + 1]);
                }
                visited[next] = true;
            } 
        }
    }

    // 갈 포인트가 범위 내에 있는지, 방문하지는 않았는지 확인.
    function checkPoint(point) {
        if (!visited[point] && point >= 0 && point <= MAX_POINT) {
            return true;
        } else{
            return false;
        }
    }
}