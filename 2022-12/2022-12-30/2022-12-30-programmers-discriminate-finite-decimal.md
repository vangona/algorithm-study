---
layout: post
title: Programmers, 유한소수 판별하기
categories: Algorithm
tags:
  - algorithm
  - programmers
  - level0
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

<center>

# Level 0. 유한소수 판별하기

</center>

---

## 유한소수 판별하기

### 문제 설명

소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

### 제한사항

- a, b는 정수
- 0 < a ≤ 1,000
- 0 < b ≤ 1,000

### 문제풀이

```js
const getGcd = (a, b) => {
  [a, b] = a < b ? [a, b] : [b, a];

  while (a) {
    const left = b % a;
    b = a;
    a = left;
  }

  return b;
};

function solution(a, b) {
  const gcd = getGcd(a, b);
  b /= gcd;

  while (b !== 1) {
    if (b % 2 === 0) {
      b /= 2;
      continue;
    }
    if (b % 5 === 0) {
      b /= 5;
      continue;
    }
    return 2;
  }

  return 1;
}
```

- 분모와 분자를 최대공약수로 나누었을 때, 소인수가 2와 5만 존재해야한다.
- 유클리드 호제법을 통해서 최대공약수를 구한다.
- 1이거나 2와 5로 나눌 수 있는지 확인한다.
