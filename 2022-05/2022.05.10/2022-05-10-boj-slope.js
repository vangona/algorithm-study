// 14890번 경사로

const fs = require("fs");
// const [[N, L], ...board] = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((line) => line.split(" ").map((el) => el * 1));

const [[N, L], ...board] = [
  "6 1",
  "3 2 1 1 2 3",
  "3 2 2 1 2 3",
  "3 2 2 2 3 3",
  "3 3 3 3 3 3",
  "3 3 3 3 2 2",
  "3 3 3 3 2 2",
].map((line) => line.split(" ").map((el) => el * 1));

let answer = 0;

for (let i = 0; i < N; i++) {
  runRoad(i, "column");
  runRoad(i, "row");
}

console.log(answer);

function runRoad(index, direction) {
  let gapFlag = false;
  let connectCount = 1;

  // 길 한 칸씩 진행
  for (let j = 1; j < N; j++) {
    const gap = getGap(index, j, direction);

    // 단차에 따라 다르게 진행
    if (gap === 0) {
      // 단차가 없는 경우
      // 단차가 없는 평지라면, 계수한다.
      connectCount++;v
    } else if (Math.abs(gap) === 1) {
      // 단차가 있는 경우
      // 해결되지 못한 단차가 있었다면 탐색 종료
      if (gapFlag) return;

      if (gap === 1) {
        // 높이가 1 증가한 경우

        // 현재까지 connect 길이가
        // 경사로를 놓을 수 없다면, 탐색을 종료한다.
        if (connectCount < L) return;
      } else {
        // 높이가 1 감소한 경우
        // 단차를 true로 바꿔주고
        // 가능성을 보아 기회를 한 번 더 준다.
        gapFlag = true;
      }

      connectCount = 1;
    } else {
      // 단차가 2 이상이면, 탐색 종료
      return;
    }

    if (gapFlag && connectCount >= L) {
      // 단차가 있었는데 경사로를 둘 길이가 된다면,
      // gapFlag를 false로 바꾸고
      // 연속된 평지 길이를 0으로 초기화한다.
      gapFlag = false;
      connectCount = 0;
    }
  }

  // 마지막으로 단차가 남았는지 확인 후,
  // 모든 역경과 시련을 이겨냈다면
  // 통과시켜준다.
  if (!gapFlag) {
    answer++;
  }
}

function getGap(fixed, variable, direction) {
  if (direction === "column") {
    const gap = board[fixed][variable] - board[fixed][variable - 1];
    if (Math.abs(gap) > 1) {
      return 2;
    } else if (gap === 1) {
      return 1;
    } else if (gap === -1) {
      return -1;
    } else {
      return 0;
    }
  }

  if (direction === "row") {
    const gap = board[variable][fixed] - board[variable - 1][fixed];
    if (Math.abs(gap) > 1) {
      return 2;
    } else if (gap === 1) {
      return 1;
    } else if (gap === -1) {
      return -1;
    } else {
      return 0;
    }
  }
}
