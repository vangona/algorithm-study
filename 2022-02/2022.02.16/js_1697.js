// 숨바꼭질

// input 처리
// const fs = require('fs');
// const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(el => el * 1);

const [n, k] = [0, 100];

// bfs 실행 & 결과 출력
const answer = bfs(n, k);
console.log(answer)

function bfs(n, k) {
    // 시작점과 끝점이 같으면 바로 0을 반환해줌.
    if (n === k) return 0;

    // 최소 시간을 구하는 문제이기 때문에, 방문한 지점을 다시 방문할 필요가 없음.
    let visited = new Array(100001).fill(0);
    let willVisit = [];

    visited[n] = 0;
    goPoint(n);
    
    while (willVisit.length) {
        const point = willVisit.shift();

        if (point === k) {
            return visited[point]; 
        }
        
        goPoint(point);
    }

    // point에 가보기
    function goPoint(point) {
        if (checkPoint(point + 1)) {
            willVisit.push(point + 1);
            visited[point + 1] = visited[point] + 1;
        } 
        if (checkPoint(point - 1)) {
            willVisit.push(point - 1);
            visited[point - 1] = visited[point] + 1;
        } 
        if (checkPoint(point * 2)) {
            willVisit.push(point * 2);
            visited[point * 2] = visited[point] + 1;
        } 
    }
    
    // 갈 포인트가 범위 내에 있는지, 방문하지는 않았는지 확인.
    function checkPoint(point) {
        if (point >= 0 && point <= 100000 && !visited[point]) {
            return true;
        } else{
            return false;
        }
    }
}