---
layout: post
title: 2021.11.01 백준 문제풀이
categories: Algorithm
tags:
  - algorithm
  - boj
  - bronze
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>2021.11.01. 백준 문제풀이</center>

---

## 10951번 A + B – 4 (Bronze 3)

### 문제

https://www.acmicpc.net/problem/10951

### 느낀 점

반복문을 사용할 때 카운팅 변수의 흐름을 잘 생각하자.

---

## 1110번 더하기 사이클 (Bronze 1)

### 문제

https://www.acmicpc.net/problem/1110

### 느낀 점

1. break를 사용하는 while문에 익숙해지자.
2. 나머지와 몫을 사용해 자릿 수 별 숫자를 구하는 방식을 이해하자.

### 소스코드

```js
const fs = require("fs");

const input = parseInt(fs.readFileSync("/dev/stdin").toString());

let count = 0;
let num = input;
let onenumber, tennumber;

while (true) {
    count++;
    tennumber = Math.floor(num / 10);
    onenumber = num % 10;
    num = (onenumber * 10) + ((onenumber + tennumber) % 10);
    if (num === input) break;
}

console.log(count)
});
```
