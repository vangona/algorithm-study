---
layout: post
title: 백준 문제풀이 2750번 수 정렬하기
categories: Algorithm
tags:
  - algorithm
  - boj
  - bronze
  - sorting
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 2750번 수 정렬하기</center>

---

## 2750번 수 정렬하기 (Bronze 1)

### 문제

https://www.acmicpc.net/problem/2750

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

### 입력

첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

### 출력

첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

### 첫번째 풀이

시간 복잡도가 O(n^2)인 풀이라고 해서, sort 메서드를 이용해서 쉽게 풀었다.

### 첫번째 풀이 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input = input.map((el) => parseInt(el));

const N = input.shift();

const answerArr = input.sort((a, b) => a - b);

console.log(answerArr.join("\n"));
```

### 두번째 풀이

2751번을 풀다가 해당 문제에서는 메서드를 사용하는 것이 아니었다는걸 알고, 다시 버블 정렬로 풀었다.

### 두번째 풀이 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input = input.map((el) => parseInt(el));

const N = input.shift();

for (let i = 0; i < input.length; i++) {
  let swap;
  for (let j = 0; j < input.length - 1 - i; j++) {
    if (input[j] > input[j + 1]) {
      swap = input[j + 1];
      input[j + 1] = input[j];
      input[j] = swap;
    }
  }
  if (!swap) {
    break;
  }
}

console.log(input.join("\n"));
```
