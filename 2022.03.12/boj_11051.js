// 이항 계수 2

// input 처리
const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(el => el * 1);

// 함수 실행 및 답안 출력
const answer = solution(N, K);
console.log(answer);

// 풀이 함수
function solution(N, K) {
  // 모듈러, dpArr 선언
  const MOD = 10007;
  const dpArr = Array.from({ length: N + 1 }, () => Array.from({ length: K + 1 }, () => 1));

  // 이항계수 공식을 이용해서 점화식 구현
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= K; j++) {
      if (i === j) { 
        dpArr[i][j] = 1;
      } else {
        dpArr[i][j] = (dpArr[i - 1][j] + dpArr[i - 1][j - 1]) % MOD;
      }
    }
  }

  // 답안 반환
  return dpArr[N][K];
}