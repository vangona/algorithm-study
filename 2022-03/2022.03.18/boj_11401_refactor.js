// 11401번 이항 계수 3

// input처리, 
// 최대 10^18 + 36이 나올 수 있으니 BigInt를 사용해준다.
// const fs = require('fs');
// const [N, K]  = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(el => BigInt(el));

const [N, K] = [BigInt(5), BigInt(2)];

// BigInt 상수, 모듈러스 상수 선언
const MOD = BigInt(1000000007);
const BIG_ZERO = BigInt(0);
const BIG_ONE = BigInt(1);
const BIG_TWO = BigInt(2);
// 팩토리얼 K와 N - K를 담을 메모이제이션 배열.
// 팩토리얼 K의 최솟값은 0, 0은 1이기 때문에 1로 채워준다.
let dp = Array.from({ length: 2 }, () => BIG_ONE);

// 함수 실행 및 답안 출력
const answer = solveProblem();
console.log(String(answer));

// 페르마의 소정리를 이용,
// 분자와 분모를 구해 곱한 뒤 모듈러 산술해준다.
function solveProblem() {
  const numerator = getFactorial(N);
  const denominator = divideConquer((dp[0] * dp[1]) % MOD, MOD - BIG_TWO);

  return (numerator * denominator) % MOD;
}

// 분할 정복 함수 (10^9 - 2 제곱을 구해야하므로)
function divideConquer(base, exponent) {
  // 지수가 1이면, 밑으로 들어온 수를 반환한다.
  if (exponent === BIG_ONE) {
    return base;
  } else {
    // 지수가 1이 아니면, 둘로 나눠 분할 정복 한다.
    let computedResult;

    if (exponent % BIG_TWO === BIG_ZERO) {
      const computedNumber = divideConquer(base, exponent / BIG_TWO);
      computedResult =  computedNumber * computedNumber;
    } else {
      const computedNumber = divideConquer(base, (exponent - BIG_ONE) / BIG_TWO);
      computedResult = computedNumber * computedNumber;
      computedResult %= MOD;
      computedResult *= base;
    }

    computedResult %= MOD;
    return computedResult;
  }
}

// 팩토리얼 함수
function getFactorial(N) {
  // dp를 통한 팩토리얼 최적화,
  // 재귀는 Maxcallstack exceed가 뜬다.
  // JS의 Maxcallstack => 13939개
  let result = BIG_ONE;
  for (let i = BIG_ONE; i <= N; i += BIG_ONE) {
    result *= i;
    result %= MOD;
    // i가 K 혹은 N - K이면 메모이제이션 해준다.
    if (i === K) dp[0] = result;
    if (i === N - K) dp[1] = result;
  }

  return result;
}