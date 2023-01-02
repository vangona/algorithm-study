---
layout: post
title: 백준 문제풀이 좌표 정렬하기 1, 2
categories: Algorithm
tags:
  - algorithm
  - boj
  - silver
  - sorting
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 좌표 정렬하기 1, 2</center>

---

## 11650번, 11651번 좌표 정렬하기 (Silver 5)

두 문제가 작은 차이만 있고, 풀이는 같아서 하나의 게시글에서 다루려고 한다.

### 11650번 문제

https://www.acmicpc.net/problem/11650

2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

### 11651번 문제

https://www.acmicpc.net/problem/11651

2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

### 입력 (동일)

첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

### 출력 (동일)

첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

### 풀이

sort()로 쉽게 풀 수 있었다.

### 11650번 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
input = input.map((el) => el.split(" "));

input.sort((a, b) => {
  if (parseInt(a[0]) === parseInt(b[0])) {
    return parseInt(a[1]) - parseInt(b[1]);
  } else {
    return parseInt(a[0]) - parseInt(b[0]);
  }
});

input = input.map((el) => el.join(" "));

console.log(input.join("\n"));
```

### 11651번 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
input = input.map((el) => el.split(" "));

input.sort((a, b) => {
  if (parseInt(a[1]) === parseInt(b[1])) {
    return parseInt(a[0]) - parseInt(b[0]);
  } else {
    return parseInt(a[1]) - parseInt(b[1]);
  }
});

input = input.map((el) => el.join(" "));

console.log(input.join("\n"));
```
