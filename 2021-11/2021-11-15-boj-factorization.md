---
layout: post
title: 백준 문제풀이 11653번 소인수분해
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

# <center>[백준 문제풀이] 11653번 소인수분해</center>

---

## 11653번 소인수분해 (Silver 5)

### 문제

https://www.acmicpc.net/problem/11653

정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

### 입력

첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.

### 출력

N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.

제한시간 : 1초

### 첫 번째 풀이

N이 10,000,000이하라서, 전부 일일이 나눠보는 것은 문제가 있다고 생각했다. 소인수분해라는 것은 결국 소수로 나눠지는 것이기 때문에, N까지의 소수를 먼저 구한 뒤 하나씩 나눠보는 방식이 맞다고 생각했다.

**아니었다.**

### 두 번째 풀이

작은 수부터 하나씩 나눠보면, 자연스럽게 소인수분해가 된다는 것을 알았다. 다만 나눠지지 않을때는 수를 하나씩 올리면서 실행해보았다.

### 소스코드

```js
const fs = require("fs");

let input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());
const primes = [];

let divider = 2;
while (input >= divider) {
  if (input % divider === 0) {
    input = input / divider;
    primes.push(divider);
  } else {
    divider++;
  }
}

console.log(primes.join("\n"));
```
