---
layout: post
title: 백준 문제풀이 1929번 소수 구하기
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

# <center>[백준 문제풀이] 1929번 소수 구하기</center>

---

## 1929번 소수 구하기 (Silver 3)

### 문제

https://www.acmicpc.net/problem/1929

M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

### 출력

한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

시간 제한 : 2초, 메모리 제한 : 256mb

### 첫 번째 풀이

이번이야말로 에라토스테네스의 체를 사용해야하나 싶었는데, 1,000,000까지 배수의 배열을 만드는 것이 비효율적일 것 같았다. 해서 제곱근까지의 곱을 비교하는 로직을 사용했다.

수가 커서 이전에 사용했던 직접 나누어서 계산하는 로직을 사용하면, 시간 초과가 생길 것 같았다.

직접 나누는 로직의 시간 복잡도는 O(N)이고, 제곱근까지의 수를 나누어서 계산하는 것은 O(√ N)로, 앞의 방법보다 빠르다.

### 소스코드

```js
const fs = require("fs");
const [M, N] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => el * 1);

let answer = "";
let screen = Array.from({ length: N + 1 }, () => true);
screen[0] = false;
screen[1] = false;

for (let i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
  if (screen[i]) {
    for (let j = 2; i * j <= N; j++) {
      screen[i * j] = false;
    }
  }
}

for (let i = M; i <= N; i++) {
  if (screen[i]) answer += i + "\n";
}

console.log(answer);
```
