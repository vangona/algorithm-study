---
layout: post
title: 백준 문제풀이 1085번 직사각형에서 탈출
categories: Algorithm
tags:
  - algorithm
  - boj
  - bronze
  - basic-math
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 1085번 직사각형에서 탈출</center>

---

## 1085번 직사각형에서 탈출 (Bronze 3)

### 문제

https://www.acmicpc.net/problem/1085

한수는 지금 (x, y)에 있다. 직사각형은 각 변이 좌표축에 평행하고, 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다. 직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 x, y, w, h가 주어진다.

### 출력

첫째 줄에 문제의 정답을 출력한다.

제한  
1 ≤ w, h ≤ 1,000  
1 ≤ x ≤ w-1  
1 ≤ y ≤ h-1  
x, y, w, h는 정수

### 풀이

x, y, w, h, 0, 0 간의 차이 비교를 통해 간단히 풀 수 있었다.

### 소스코드

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const x = parseInt(input[0]);
const y = parseInt(input[1]);
const w = parseInt(input[2]);
const h = parseInt(input[3]);

let min;

if (w - x < x) {
  min = w - x;
} else {
  min = x;
}

if (h - y < y) {
  if (h - y < min) {
    min = h - y;
  }
} else if (min > y) {
  min = y;
}

console.log(min);
```
