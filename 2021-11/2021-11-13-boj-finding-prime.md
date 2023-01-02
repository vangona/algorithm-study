---
layout: post
title: 백준 문제풀이 1978번 소수 찾기
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

# <center>[백준 문제풀이] 1978번 소수 찾기</center>

---

## 1978번 소수 찾기 (Silver 4)

### 문제

https://www.acmicpc.net/problem/1978

주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

### 입력

첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데, 수는 1000 이하의 자연수이다.

### 풀이 : 에라토스테네스의 체

소수를 구하는 공식이 있을 것 같아서 서치해보았고, 에라토스테네스의 체라는 것을 알게 되었다. 에라토스테네스의 체는 1이 아닌 수의 배수들을 제외한 값들을 소수로 판단하여 계산하는 것으로, 모든 수를 그 이하의 다른 수로 나누는 것보다 효율적이라고 한다.

### 소스코드

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const numbers = input[1].trim().split(" ");
const nonMultiples = [];

numbers.map((number) => {
  let multiple = false;

  if (parseInt(number) === 1) {
    multiple = true;
  }

  for (let l = 2; l < parseInt(number); l++) {
    if (parseInt(number) % l === 0) {
      multiple = true;
    }
  }

  if (parseInt(number) === 2) {
    nonMultiples.push(number);
  } else if (!multiple) {
    nonMultiples.push(number);
  }
});

if (numbers === []) {
  console.log(0);
} else {
  console.log(nonMultiples.length);
}
```
