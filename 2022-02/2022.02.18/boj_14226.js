// const fs = require('fs');
// const S = fs.readFileSync('/dev/stdin').toString().trim() * 1;

const S = 1000;

const MAX_RANGE = 1000;

// bfs 실행, 결과 출력
const answer = bfs();
console.log(answer);

// bfs 선언
function bfs() {
    let willWork = [];
    let visited = Array.from({ length: MAX_RANGE + 1 }, () => new Array(MAX_RANGE + 1));

    // 첫 작업. S가 2 이상으로 주어졌기 때문에, 처음부터 삭제하는 경우는 없다.
    willWork.push([1, 0, 0]);
    visited[1][0] = true;

    // bfs 몸체
    while (willWork.length) {
        const [screen, clipboard, lastSeconds] = willWork.shift();

        if (screen === S) return lastSeconds;

        // 코드를 간결히 만들도록 방문할 곳들을 배열로 정리해서 반복문으로 처리했다..
        const diffArr = [[screen - 1, clipboard], [screen + clipboard, clipboard], [screen, screen]];

        for (let i = 0; i < diffArr.length; i++) {
            if (checkScreen(diffArr[i][0], diffArr[i][1])) {
                willWork.push([...diffArr[i], lastSeconds + 1]);
                visited[diffArr[i][0]][diffArr[i][1]] = true;
            }
        }
    }

    // 범위에 맞는지, 방문한 적 없는지 확인하는 함수.
    function checkScreen(screen, clipboard) {
        if (screen > MAX_RANGE || screen < 0 || visited[screen][clipboard]) {
            return false;
        } else {
            return true;
        }
    }
}