// 2565번 전깃줄

// 문제 접근
// 전깃줄이 꼬이는 것은 A를 오름차순으로 정렬했을 때,
// 연결된 B의 수열이 진행 중 감소되는 경우 발생함.
// 즉, A값을 정렬한 후 연결된 B의 값 중 LIS를 구하면
// 꼬이지 않는 전선의 최대 길이를 구할 수 있음.
// 이것을 전체 전봇대에서 뺌으로서 해답을 구할 수 있음.

// input 처리
const fs = require('fs');
let [n, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let [n, ...lines] = ['8', '1 8', '3 9', '2 2', '4 1', '6 4', '10 10', '9 7', '7 6'];

const answer = solution();
console.log(answer);

function solution() {
  // 입력값 정수처리
  n = n * 1;
  lines = lines.map(line => line.split(' ').map(el => el * 1));

  // A값을 기준으로 입력값 정렬.
  lines.sort((a, b) => a[0] - b[0]);

  // dp를 통해서 꼬이지 않는 최대 전선의 연결 수를 구함
  const maxLength = dp();

  // 전체 전봇대 개수에서 최대값을 뺀 값을 정답으로 반환.
  return n - maxLength;
}

// 다이나믹 프로그래밍 함수
function dp() {
  let dpArr = Array.from({ length: n }, () => 1);
  let result = 0;
  
  for (let i = 0; i < n; i++) {
    let max = 1;
  
    // B의 값에서 LIS를 구함.
    for (let j = 0; j < i; j++) {
      if (lines[j][1] < lines[i][1]) {
        if (max < dpArr[j] + 1) max = dpArr[j] + 1;
      } 
    }
  
    dpArr[i] = max;
  
    // LIS들 중 최대 값을 result로 반환.
    result = Math.max(max, result);
  }

  return result;
}