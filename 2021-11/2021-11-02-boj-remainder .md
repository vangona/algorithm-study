---
layout: post
title: 2021.11.02 백준 문제풀이
categories: Algorithm
tags:
  - algorithm
  - boj
  - bronze
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>2021.11.02. 백준 문제풀이</center>

---

## 3052번 나머지 (Bronze 2)

### 문제

https://www.acmicpc.net/problem/3052

### 느낀 점

배열에서는 for보다 forEach를 쓰자.

trim 사용을 생활화 하자.

### 소스코드

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const bal = [];

input.forEach(x => {
    const num = x % 42;
    if (bal.indexOf(num) === -1) {
        bal.push(num);
    };
});

console.log(bal.length);
});
```
