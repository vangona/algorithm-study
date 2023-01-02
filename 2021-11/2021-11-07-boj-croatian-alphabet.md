---
layout: post
title: 2021.11.07 백준 문제풀이
categories: Algorithm
tags:
  - algorithm
  - boj
  - silver
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>2021.11.07. 백준 문제풀이</center>

---

## 2941번 크로아티아 알파벳 (Silver 5)

### 느낀 점

처음에는 알파벳 문자열 순서에 맞춘 조건문을 사용하려다가 너무 섹시하지 않아서 다른 방법을 고안했다. 정규표현식과 replace로 문자열 대치를 하면 쉽게 풀 수 있을 것 같아서 찾아봤는데 비슷하게 푼 사례가 있어서 참고해서 간단하게 풀 수 있었다.

### 에러

trim()을 사용안해서 오류가 생겼었다.

### 문제

https://www.acmicpc.net/problem/2941

### 소스코드

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const output = input.replace(regex, "Q");

console.log(output.length);
```
