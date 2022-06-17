---
layout: post
title: 백준 문제풀이 2292번 벌집
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

# <center>[백준 문제풀이] 2292번 벌집</center>

---

## 2292번 벌집 (Bronze 2)

### 느낀 점

Keep It Super Simple

### 문제

https://www.acmicpc.net/problem/2292

위의 그림과 같이 육각형으로 이루어진 벌집이 있다. 그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다. 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오. 예를 들면, 13까지는 3개, 58까지는 5개를 지난다.

### 풀이

수열로 풀이 하려고 했는데, 너무 수학적으로 접근했었다는 것을 깨달았다. 그냥 간단하게 한 줄이 늘어날때마다 한 칸이 늘어나게 된다.

1까지는 1번, 7까지는 2번, 19까지는 3번, 37까지는 4번 이와 같이 이동하게 된다.
이걸 수열로 1, 7, 19와 같은 수를 수열로 생각해서 문제에 접근하였다.
입력된 숫자가 포함되는 범위까지의 수를 찾을 때까지 거리를 하나 씩 추가해주었다.

### 소스코드

```js
const fs = require("fs");

const number = parseInt(fs.readFileSync("/dev/stdin").toString());

let distance = 1;
let range = 1;

while (number > range) {
  range += distance * 6;
  distance++;
}

console.log(distance);
```
