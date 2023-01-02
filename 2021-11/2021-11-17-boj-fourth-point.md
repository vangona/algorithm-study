---
layout: post
title: 백준 문제풀이 3009번 네 번째 점
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

# <center>[백준 문제풀이] 3009번 네 번째 점</center>

---

## 3009번 네 번째 점 (Bronze 3)

### 문제

https://www.acmicpc.net/problem/3009

세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.

### 입력

세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.

### 출력

직사각형의 네 번째 점의 좌표를 출력한다.

제한  
1 ≤ w, h ≤ 1,000  
1 ≤ x ≤ w-1  
1 ≤ y ≤ h-1  
x, y, w, h는 정수

### 풀이

직사각형을 만들기 위해 입력에 주어지는 x, y 값들이 결국 두 번씩 반복되어야 한다. x, y 각각 배열을 만들어서 풀었다.

### 소스코드

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const a = input[0].split(" ");
const b = input[1].split(" ");
const c = input[2].split(" ");

const line = [a, b, c];

const xArr = [];
const yArr = [];

let x;
let y;

for (let i = 0; i <= 2; i++) {
  xArr.push(parseInt(line[i][0]));
  yArr.push(parseInt(line[i][1]));
}

for (let l = 0; l <= 2; l++) {
  const xDot = parseInt(line[l][0]);
  const yDot = parseInt(line[l][1]);
  if (xArr.indexOf(xDot) === xArr.lastIndexOf(xDot)) {
    x = xDot;
  }
  if (yArr.indexOf(yDot) === yArr.lastIndexOf(yDot)) {
    y = yDot;
  }
}

console.log(`${x} ${y}`);
```
