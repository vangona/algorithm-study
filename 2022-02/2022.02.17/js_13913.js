// 숨바꼭질 4

// input 처리
// const fs = require('fs');
// const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(el => el * 1);

const [n, k] = [10, 10];

// bfs 실행
const [count, orderArr] = bfs(n, k);

// 경로를 역추적한다.
let answerArr = [];
answerArr.push(k);
let prev = orderArr[k];
for (let i = 0; i < count; i++) {
    answerArr.push(prev);
    prev = orderArr[prev];
}

// 결과 출력
console.log(`${count}
${answerArr.reverse().join(' ')}`);

function bfs(n, k) {
    // 시작점과 끝점이 같으면 바로 0을 반환해줌.
    if (n === k) return [0, []];

    let backwardState = false;
    if (n > k) backwardState = true;

    // 최소 시간을 구하는 문제이기 때문에, 방문한 지점을 다시 방문할 필요가 없음.
    let visited = new Array(100001).fill(0);
    let pointOrder = new Array(100001);
    let willVisit = [];

    goPoint(n);

    // bfs 몸체 실행
    while (willVisit.length) {
        const point = willVisit.shift();

        if (point === k) {
            return [visited[point], pointOrder]; 
        }

        goPoint(point);
    }

    // point에 가보기
    function goPoint(point) {
        if (!backwardState) {
            if (checkPoint(point + 1)) {
                willVisit.push(point + 1);
                visited[point + 1] = visited[point] + 1;
                pointOrder[point + 1] = point;
            }
            if (checkPoint(point * 2)) {
                willVisit.push(point * 2);
                visited[point * 2] = visited[point] + 1;
                pointOrder[point * 2] = point;
            }      
        }
        if (checkPoint(point - 1)) {
            willVisit.push(point - 1);
            visited[point - 1] = visited[point] + 1;
            pointOrder[point - 1] = point;
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