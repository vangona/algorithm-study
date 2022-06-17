---
layout: post
title: 백준 문제풀이 1002번 터렛
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

# <center>[백준 문제풀이] 1002번 터렛</center>

---

## 1002번 터렛 (Silver 4)

### 문제

https://www.acmicpc.net/problem/1002

조규현과 백승환은 터렛에 근무하는 직원이다. 하지만 워낙 존재감이 없어서 인구수는 차지하지 않는다. 다음은 조규현과 백승환의 사진이다.

이석원은 조규현과 백승환에게 상대편 마린(류재명)의 위치를 계산하라는 명령을 내렸다. 조규현과 백승환은 각각 자신의 터렛 위치에서 현재 적까지의 거리를 계산했다.

조규현의 좌표 (x1, y1)와 백승환의 좌표 (x2, y2)가 주어지고, 조규현이 계산한 류재명과의 거리 r1과 백승환이 계산한 류재명과의 거리 r2가 주어졌을 때, 류재명이 있을 수 있는 좌표의 수를 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 다음과 같이 이루어져 있다.

한 줄에 x1, y1, r1, x2, y2, r2가 주어진다. x1, y1, x2, y2는 -10,000보다 크거나 같고, 10,000보다 작거나 같은 정수이고, r1, r2는 10,000보다 작거나 같은 자연수이다.

### 출력

각 테스트 케이스마다 류재명이 있을 수 있는 위치의 수를 출력한다. 만약 류재명이 있을 수 있는 위치의 개수가 무한대일 경우에는 –1을 출력한다.

### 풀이

각 터렛의 위치가 [같음, 다름] 각각의 경우에서 원이 [내접할 때, 외접할 때, 겹칠 때, 반지름이 같을 때]로 나눠서 쉽게 풀 수 있었다.

### 소스코드

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);
const answerArr = [];

function checkCount(numArr) {
  const xFir = numArr[0];
  const yFir = numArr[1];
  const rFir = numArr[2];
  const xSec = numArr[3];
  const ySec = numArr[4];
  const rSec = numArr[5];
  const max = Math.max(rFir, rSec);
  const min = Math.min(rFir, rSec);

  const distance = Math.sqrt(
    Math.pow(xFir - xSec, 2) + Math.pow(yFir - ySec, 2)
  );
  if (xFir === xSec && yFir === ySec) {
    if (rFir === rSec) {
      answerArr.push(-1);
      return;
    } else {
      answerArr.push(0);
      return;
    }
  } else {
    if (distance === max) {
      answerArr.push(2);
      return;
    } else if (distance < max) {
      if (distance + min === max) {
        answerArr.push(1);
        return;
      } else if (distance + min < max) {
        answerArr.push(0);
        return;
      } else {
        answerArr.push(2);
        return;
      }
    } else {
      if (distance === max + min) {
        answerArr.push(1);
        return;
      } else if (distance > max + min) {
        answerArr.push(0);
        return;
      } else {
        answerArr.push(2);
        return;
      }
    }
  }
}

for (let i = 1; i <= T; i++) {
  const numbers = input[i].split(" ").map((num) => parseInt(num));
  checkCount(numbers);
}

console.log(answerArr.join("\n"));
```
