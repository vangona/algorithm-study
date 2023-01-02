// 2980번 도로와 신호등

// 입력 값 처리 부분
const fs = require("fs");
let [numbers, ...lights] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, L] = numbers.split(" ").map((el) => el * 1);
lights = lights.map((light) => light.split(" ").map((el) => el * 1));

// 지난 시간
let lastTime = 0;

// 신호등 수 만큼 이동해주고, 기다려준다.
for (let i = 0; i < lights.length; i++) {
  moveToNextTrafficLight(i);
  waitTrafficLight(i);
}

// 도착지로 이동
moveToDestination();

// 결과 출력
console.log(lastTime);

// 신호 대기 시간 더해주는 함수
// @index: 기다릴 신호등 번호
function waitTrafficLight(index) {
  while (true) {
    if (checkisGreen(lastTime, lights[index])) {
      break;
    } else {
      lastTime++;
    }
  }
}

// 도착 시간에 신호등이 초록색인지 확인
// @T: 현재 시간
// @light: 도착한 신호등 정보
function checkisGreen(T, light) {
  const R = light[1];
  const G = light[2];
  if (T % (R + G) < R) {
    return false;
  }

  return true;
}

// 다음 신호까지 이동하는 함수
// @index: 이동할 신호등의 번호
function moveToNextTrafficLight(index) {
  if (index === 0) {
    lastTime += lights[index][0];
  } else {
    lastTime += lights[index][0] - lights[index - 1][0];
  }
}

// 도착지 이동 함수
function moveToDestination() {
  lastTime += L - lights[lights.length - 1][0];
}
