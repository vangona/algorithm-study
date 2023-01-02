// 14888번 연산자 끼워넣기

// input 처리
// const fs = require('fs');
// let [N, A, operations] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, A, operations] = ['3', '3 4 5', '1 0 1 0'];
N = N * 1;
A = A.split(' ').map(el => el * 1);
operations = operations.split(' ').map(el => el * 1);

// 변수 선언
let max = -1000000001;
let min = 1000000001;
let result = A[0];
let answer = '';

// dfs 실행, 결과 출력
dfs(1);
answer += max + '\n' + min;
console.log(answer);

// dfs 함수, depth는 숫자 배열 A의 index 값이 된다.
function dfs(depth) {
  // 숫자를 모두 돌면, 최대 최소를 비교하고 함수를 종료한다.
  if (depth === N) {
    if (max < result) max = result;
    if (min > result) min = result;
    return;
  }

  // 연산 기호를 돌며 계산 결과를 변경시키고 다음 숫자로 진행한다. 남은 연산 기호의 수를 기준으로 백트래킹을 진행한다.
  for (let i = 0; i < operations.length; i++) {
    if (!operations[i]) continue;
    switch (i) {
      case 0 :
        result += A[depth];
        operations[i] -= 1;
        dfs(depth + 1);
        result -= A[depth];
        operations[i] += 1;
        break;
      case 1 :
        result -= A[depth];
        operations[i] -= 1;
        dfs(depth + 1);
        result += A[depth];
        operations[i] += 1;
        break;
      case 2 :
        result *= A[depth];
        operations[i] -= 1;
        dfs(depth + 1);
        result /= A[depth];
        operations[i] += 1;
        break;
      case 3 :
        const temp = result;
        result = parseInt(result / A[depth]);
        operations[i] -= 1;
        dfs(depth + 1);
        result = temp;
        operations[i] += 1;
        break;
    }
  }
}