// 12865번 평범한 배낭

// const fs = require('fs');
// let [numbers, ...things] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [numbers, ...things] = ['4 7', '6 13', '4 8', '3 6', '5 12'];

const [N, K] = numbers.split(' ').map(el => el * 1);
things = things.map(line => line.split(' ').map(el => el * 1));

const maxValueDp = Array.from({ length: N + 1 }, () => Array.from({ length: K + 1 }, () => 0));

for (let i = 1; i <= N; i++) {
  const [W, V] = things[i - 1];
  for (let leftWeigth = 0; leftWeigth <= K; leftWeigth++) {
    if (leftWeigth < W) {
      // 물체의 무게가 남은 혀용량보다 크면, 담지 못한다.
      maxValueDp[i][leftWeigth] = maxValueDp[i - 1][leftWeigth];
    } else {
      // 물체의 무게가 담을 수 있다면
      // 가치가 최대인 쪽으로 담는다.
      maxValueDp[i][leftWeigth] = Math.max(maxValueDp[i - 1][leftWeigth - W] + V, maxValueDp[i - 1][leftWeigth]);
    }
  }
}

console.log(Math.max(...maxValueDp[N]));