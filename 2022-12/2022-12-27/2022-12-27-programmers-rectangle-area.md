## 직사각형 넓이 구하기

### 문제 설명

2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

### 제한사항

- dots의 길이 = 4
- dots의 원소의 길이 = 2
- -256 < dots[i]의 원소 < 256
- 잘못된 입력은 주어지지 않습니다.

### 문제풀이

```js
function solution(dots) {
  let width = 0;
  let height = 0;

  for (let i = 1; i < 4; i++) {
    if (dots[i][0] === dots[0][0]) {
      height = Math.abs(dots[i][1] - dots[0][1]);
      continue;
    }

    if (dots[i][1] === dots[0][1]) {
      width = Math.abs(dots[i][0] - dots[0][0]);
    }
  }

  return width * height;
}
```

- 요구사항대로 풀이함.

```js
function solution(dots) {
  let width = 0;
  let height = 0;

  for (let i = 1; i < 4; i++) {
    if (dots[i][0] === dots[0][0]) {
      height = Math.abs(dots[i][1] - dots[0][1]);
      continue;
    }

    if (dots[i][1] === dots[0][1]) {
      width = Math.abs(dots[i][0] - dots[0][0]);
    }
  }

  return width * height;
}
```

### 리팩토링

```js
function solution(dots) {
  const [benchmarkX, benchmarkY] = dots[0];
  let width = 0;
  let height = 0;

  dots.forEach(([x, y], index) => {
    if (index === 0) return;
    if (!height && x === benchmarkX) height = Math.abs(benchmarkY - y);
    if (!width && y === benchmarkY) width = Math.abs(benchmarkX - x);
  });

  return width * height;
}
```

- 가독성을 위한 리팩토링
- 무엇이 더 나은걸까?
