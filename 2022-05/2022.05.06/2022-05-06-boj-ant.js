// 3048번 개미

const fs = require("fs");
let [N, firstGroup, secondGroup, T] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

// 변수 선언
N = N.split(" ").map((el) => el * 1);
firstGroup = firstGroup.split("");
secondGroup = secondGroup.split("");
T = T * 1;
const ANT_LENGTH = N[0] + N[1];

// 개미 배열을 만들어준다.
let antArr = makeAntArray(firstGroup, secondGroup);

// 시간만큼 개미 행진을 진행시킨다.
for (let i = 0; i < T; i++) {
  processAntParade();
}

// 결과값 변환 후 출력
antArr = antArr.map((ant) => ant.name);
console.log(antArr.join(""));

// 개미 행진 진행 함수
function processAntParade() {
  // 개미 배열을 돌며, 점프할 개미는 점프시킨다.
  for (let j = 0; j < ANT_LENGTH - 1; j++) {
    if (checkNeedJump(j)) {
      antArr[j].jump(j);
      // 이미 점프한 개미가 다시 점프하지 않도록
      // 개미가 이번 탐색 때 점프했다면,
      // index에 추가로 1을 더해준다.
      j++;
    }
  }
}

// 점프할 개미 확인 함수
function checkNeedJump(index) {
  // 전진을 멈춘 개미가 다시 점프하지 않도록
  // 한 쪽 방향의 개미만 점프시킨다.
  // 이 코드에서는 오른쪽으로 진행하는 개미만 점프시켰다.
  if (antArr[index].direction === -1) return false;

  // 현재의 index와 index + 1의 진행방향이 다르면,
  // 점프시킨다.
  if (antArr[index].direction * antArr[index + 1].direction === -1) return true;

  // 둘 다 해당하지 않으면, 점프하지 않는다.
  return false;
}

// 개미 배열 생성 함수
// @firstGroup {array} : 첫번째 개미들
// @secondGroup {array} : 두번째 개미들
// @return {array} : 방향과 index를 처리한 개미 배열
function makeAntArray(firstGroup, secondGroup) {
  const antArr = Array.from({ length: ANT_LENGTH });

  // 가독성을 위한 함수 호이스팅을 위해
  // Ant 클래스를 함수 내에 선언해주었다.
  class Ant {
    constructor(name, direction) {
      this.name = name;
      this.direction = direction;
    }

    jump(antIndex) {
      let temp = antArr[antIndex];
      antArr[antIndex] = antArr[antIndex + 1];
      antArr[antIndex + 1] = temp;
    }
  }

  // 각 그룹의 개미로 배열을 만든다.
  firstGroup.forEach((ant, index) => {
    const antIndex = N[0] - index - 1;
    antArr[antIndex] = new Ant(ant, 1);
  });

  secondGroup.forEach((ant, index) => {
    const antIndex = N[0] + index;
    antArr[antIndex] = new Ant(ant, -1);
  });

  // 만들어진 개미 배열을 반환한다.
  return antArr;
}
