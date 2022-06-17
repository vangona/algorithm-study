---
layout: post
title: 2021.10.31 백준 문제풀이
categories: Algorithm
tags:
  - algorithm
  - boj
  - bronze
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>2021.10.31. 백준 문제풀이</center>

---

## 14681번 사분면 고르기 (Bronze 4)

### 문제

https://www.acmicpc.net/problem/14681

### 배운 것

- fs를 사용하면 속도가 빠르지만, 시스템 접근으로 인해 종종 EACCESS 에러가 날 수 있다. 이런 때에는 readline을 사용해서 문제를 해결해준다.

- readline은 먼저 createInterface 메서드를 통해서 값을 읽는 stream을 만들어 준 뒤, 한 줄을 읽는 “line”, 종료시의 “close”와 같은 이벤트를 통해서 작동된다.

### 소스코드

```js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(parseInt(line));
}).on("close", () => {
  const x = input[0];
  const y = input[y];

  let output = 1;

  if (x < 0) {
    output = 2;
    if (y < 0) {
      output = 3;
    }
  } else if (y < 0) {
    output = 4;
  }

  console.log(output);

  process.exit();
});
```

---

## 2884번 알람 시계

### 문제

https://www.acmicpc.net/problem/2884

### 느낀 점

toString()을 toSting()으로 적어놨었다.

카페 올 때 Englishman in newyork을 들으면서 왔었는데 그 탓이지 싶다.

앞으로 에러가 발생하면 오타를 먼저 찾는 습관을 길러야겠다.

### 소스코드

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split(" ");

let hour = parseInt(input[0]);
let minute = parseInt(input[1]);

if (minute - 45 < 0) {
  if (hour == 0) {
    hour = 23;
  } else {
    hour -= 1;
  }
  minute += 15;
} else {
  minute -= 45;
}

console.log(`${hour} ${minute}`);
```
