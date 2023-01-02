---
layout: post
title: 백준 문제풀이 4948번 베르트랑 공준
categories: Algorithm
tags:
  - algorithm
  - boj
  - silver
  - basic-math
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 4948번 베르트랑 공준</center>

---

## 4948번 베르트랑 공준 (Silver 2)

### 문제

https://www.acmicpc.net/problem/4948

베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.

이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.

예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)

자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오.

### 입력

입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 케이스는 n을 포함하는 한 줄로 이루어져 있다.

입력의 마지막에는 0이 주어진다.

### 출력

각 테스트 케이스에 대해서, n보다 크고, 2n보다 작거나 같은 소수의 개수를 출력한다.

### 풀이

반복문과 제곱근 나누기 방식의 에라토노스체로 접근했다.

### 소스코드

```js
const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el * 1);

const max = Math.max(...input);
let screen = Array.from({ length: max * 2 + 1 }, () => true);
screen[0] = false;
screen[1] = false;

for (let i = 2; i <= max * 2; i++) {
  if (screen[i]) {
    for (let j = 2; i * j <= max * 2; j++) {
      screen[i * j] = false;
    }
  }
}

let answer = Array.from({ length: input.length - 1 }, () => 0);
for (let i = 0; i < input.length - 1; i++) {
  for (let j = input[i] + 1; j <= input[i] * 2; j++) {
    if (screen[j]) answer[i] += 1;
  }
}

console.log(answer.join("\n"));
```
