// 2110번 공유기 설치

// const fs = require('fs');
// let [numbers, ...houses] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [numbers, ...houses] = ['5 3', '1', '2', '8', '4', '9'];

const [N, C] = numbers.split(' ').map(el => el * 1);
houses = houses.map(el => el * 1);

houses.sort((a, b) => a - b);

// 문제에서 구해야할 이상적인 간격은 결국 이상적인 간격의 최소 간격과 이상적인 간격의 최대의 간격을 더해 나눈 간격이라고 할 수 있다. 
// 이분탐색을 통해서 이 최소와 최대 간격을 조정해서 이상적인 간격을 구해줘야한다.
let nearest = 1;
let farthest = houses[N - 1];
let answer = 0;

while (nearest <= farthest) {
  // 설정된 공유기 사이의 최소값과 최대값을 통해서 공유기의 이상적인 평균 설치 간격(정수)을 설정해준다.
  let idealDistance = Math.floor((nearest + farthest) / 2);

  // 첫 집에 첫 공유기를 놓는다.
  let prev = houses[0];
  let count = 1;

  // 설치하려는 간격이 설정된 이상적인 간격보다 멀면, 공유기를 설치(count + 1)한다. 설치했으면, 다음 집과의 거리는 그 집부터 잰다.
  for (let i = 1; i < N; i++) {
    let installedDistance = houses[i] - prev;
    if (installedDistance >= idealDistance) {
      count++;
      prev = houses[i];
    }
  }

  if (count >= C) {
    // 설치된 공유기 수가 설치해야할 갯수보다 많으면, 간격이 좁다는 것을 의미한다. 
    // 최소 간격을 더 크게 하여 공유기의 간격을 더 넓게 설정해서 탐색한다.
    if (answer < idealDistance) answer = idealDistance;
    nearest = idealDistance + 1;
  } else {
    // 설치된 공유가 수가 설치해야할 갯수보다 적으면, 간격이 넓다는 것을 의미한다.
    // 최대 간격을 더 좁게 하여 공유기의 간격을 더 좁게 설정해서 탐색한다.
    farthest = idealDistance - 1;
  }
}

console.log(answer);