// 8979번 올림픽

// 입력 값 처리 부분
const fs = require("fs");
const [numbers, ...medals] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((line) => line.split(" ").map((el) => el * 1));
const [N, K] = numbers;

solveProblem();

// 문제 해결 방식
// 1. 주어진 K 값으로 탐색하여 target을 구한다.
// 2. target과 타국들과의 메달 비교를 통해 rank를 도출.
function solveProblem() {
  const target = getTarget(K, medals);
  const rank = getRank(target, medals);

  console.log(rank);
}

// target 국가를 구하는 함수
// 주어진 K를 전체 국가의 ID과 비교하여 찾는다.
// @return {Array}: target 국가 정보
function getTarget(K, medals) {
  let result;
  for (let i = 0; i < N; i++) {
    if (medals[i][0] === K) result = medals[i];
  }

  return result;
}

// rank를 구하는 함수
// 금메달 비교 후 target 국가보다 많으면 rank + 1
// 금메달이 같으면, 은메달 비교 후 target 국가보다 많으면 rank + 1
// 은메달이 같으면, 동메달 비교 후 target 국가보다 많으면 rank + 1
// @return {number}: 최종 rank를 반환
function getRank(target, medals) {
  let result = 1;

  // 전체 국가와 비교
  for (let i = 0; i < N; i++) {
    // 본인 국가는 지나가기
    if (medals[i][0] === target[0]) continue;

    if (medals[i][1] >= target[1]) {
      // 금메달 비교
      if (medals[i][1] > target[1]) {
        result++;
      } else if (medals[i][2] >= target[2]) {
        // 은메달 비교
        if (medals[i][2] > target[2]) {
          result++;
        } else if (medals[i][3] >= target[3]) {
          // 동메달 비교
          if (medals[i][3] > target[3]) {
            result++;
          }
        }
      }
    }
  }

  return result;
}
