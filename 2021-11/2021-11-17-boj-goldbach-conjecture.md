---
layout: post
title: 백준 문제풀이 9020번 골드바흐의 추측
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

# <center>[백준 문제풀이] 9020번 골드바흐의 추측</center>

---

## 9020번 골드바흐의 추측 (Silver 1)

### 문제

https://www.acmicpc.net/problem/9020

1보다 큰 자연수 중에서 1과 자기 자신을 제외한 약수가 없는 자연수를 소수라고 한다. 예를 들어, 5는 1과 5를 제외한 약수가 없기 때문에 소수이다. 하지만, 6은 6 = 2 × 3 이기 때문에 소수가 아니다.

골드바흐의 추측은 유명한 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다는 것이다. 이러한 수를 골드바흐 수라고 한다. 또, 짝수를 두 소수의 합으로 나타내는 표현을 그 수의 골드바흐 파티션이라고 한다. 예를 들면, 4 = 2 + 2, 6 = 3 + 3, 8 = 3 + 5, 10 = 5 + 5, 12 = 5 + 7, 14 = 3 + 11, 14 = 7 + 7이다. 10000보다 작거나 같은 모든 짝수 n에 대한 골드바흐 파티션은 존재한다.

2보다 큰 짝수 n이 주어졌을 때, n의 골드바흐 파티션을 출력하는 프로그램을 작성하시오. 만약 가능한 n의 골드바흐 파티션이 여러 가지인 경우에는 두 소수의 차이가 가장 작은 것을 출력한다.

### 입력

첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고 짝수 n이 주어진다.

### 출력

각 테스트 케이스에 대해서, n보다 크고, 2n보다 작거나 같은 소수의 개수를 출력한다.

### 풀이

각 테스트 케이스에 대해서 주어진 n의 골드바흐 파티션을 출력한다. 출력하는 소수는 작은 것부터 먼저 출력하며, 공백으로 구분한다.

### 소스코드

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = parseInt(input[0]);
const answerArr = [];

for (let i = 1; i <= T; i++) {
  const number = parseInt(input[i]);
  let a = number / 2;
  let b = number - a;

  while (true) {
    let isPrime = true;
    if (a % 2 === 0 || b % 2 === 0) {
      if (!(a === 2 && b === 2)) {
        isPrime = false;
      }
    } else {
      for (let m = 3; m <= Math.sqrt(a); m += 2) {
        if (a % m === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        for (let n = 3; n <= Math.sqrt(b); n += 2) {
          if (b % n === 0) {
            isPrime = false;
            break;
          }
        }
      }
    }
    if (isPrime) {
      answerArr.push(`${a} ${b}`);
      break;
    } else {
      a -= 1;
      b += 1;
    }
  }
}

console.log(answerArr.join("\n"));
```

### 사족 (2022.04.26)

이 당시에는 소수를 구하는 방식으로 풀었는데, 지금 돌아보면 에라토스테네스의 체로 접근하는 것이 더 나은 풀이 같다.
