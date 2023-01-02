---
layout: post
title: 백준 문제풀이 2751번 수 정렬하기 2
categories: Algorithm
tags:
  - algorithm
  - boj
  - silver
  - sorting
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 2751번 수 정렬하기 2</center>

---

## 2751번 수 정렬하기 2 (Silver 5)

### 문제

https://www.acmicpc.net/problem/2751

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

### 입력

첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

### 출력

첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

### 첫번째 풀이

sort 메서드를 사용해 간단하게 풀 수 있었다.
새롭게 알게된 사실은 sort 메서드의 시간 복잡도가 O(n log(n)) 이라는 것이었다.

### 첫번째 풀이 소스코드

```js
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el));

const N = input.shift();

input.sort((a, b) => a - b);

console.log(input.join("\n"));
```

### 사족

지금 생각해보면 sort 메서드를 쓰라고 했던 건 아닌 것 같다. 22년 3월 게시글 중에 다른 정렬 알고리즘들을 구현해두었다.
