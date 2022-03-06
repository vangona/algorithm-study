// 9251번 LCS

// const fs = require('fs');
// const [first, second] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [first, second] = ['ACAYKP', 'CAPCAK'];

// 함수 실행과 답안 출력.
const answer = solveProblem();
console.log(answer);

// 함수명을 동사로 쓰는게 나을 것 같아서
// 평소 쓰던 solution에서 solveProblem으로 변경했다.
function solveProblem() {
  // 문제를 풀 수 있도록 입력값들을 처리해준다.
  const N = first.length;
  const M = second.length;

  // 풀이를 위한 메모이제이션 table과 답안 변수를 선언해준다.
  let LCS = Array.from({ length: N + 1 }, () => Array.from({ length: M + 1 }, () => 0));
  let result = 0;

  // 각 문자열을 전체 돌아서 LCS table을 채운다.
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      // -1에서 시작되는 부분 수열을 제외.
      if (i === 0 || j === 0) continue;
      
      if (first[i - 1] === second[j - 1]) {
        // 문자가 같으면, 
        // 둘 다 이전 문자열일때의 최장 길이에 1일 더한다.
        LCS[i][j] = LCS[i - 1][j - 1] + 1;
      } else {
        // 문자가 다르면,
        // 각각 문자열에 이전까지 저장된 최장길이를 저장한다.
        LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
      }
  
      // LCS의 최대길이를 정답에 저장한다.
      if (result < LCS[i][j]) result = LCS[i][j];
    }
  }

  return result;
}