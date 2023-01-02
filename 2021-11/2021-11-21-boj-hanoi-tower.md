---
layout: post
title: 백준 문제풀이 11729번 하노이 탑 이동 순서
categories: Algorithm
tags:
  - algorithm
  - boj
  - silver
  - recursion
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 11729번 하노이 탑 이동 순서</center>

---

## 11729번 하노이 탑 이동 순서 (Silver 1)

### 문제

https://www.acmicpc.net/problem/11729

세 개의 장대가 있고 첫 번째 장대에는 반경이 서로 다른 n개의 원판이 쌓여 있다. 각 원판은 반경이 큰 순서대로 쌓여있다. 이제 수도승들이 다음 규칙에 따라 첫 번째 장대에서 세 번째 장대로 옮기려 한다.

1. 한 번에 한 개의 원판만을 다른 탑으로 옮길 수 있다.
2. 쌓아 놓은 원판은 항상 위의 것이 아래의 것보다 작아야 한다.

이 작업을 수행하는데 필요한 이동 순서를 출력하는 프로그램을 작성하라. 단, 이동 횟수는 최소가 되어야 한다.

아래 그림은 원판이 5개인 경우의 예시이다.

### 입력

첫째 줄에 첫 번째 장대에 쌓인 원판의 개수 N (1 ≤ N ≤ 20)이 주어진다.

### 출력

첫째 줄에 옮긴 횟수 K를 출력한다.

두 번째 줄부터 수행 과정을 출력한다. 두 번째 줄부터 K개의 줄에 걸쳐 두 정수 A B를 빈칸을 사이에 두고 출력하는데, 이는 A번째 탑의 가장 위에 있는 원판을 B번째 탑의 가장 위로 옮긴다는 뜻이다.

### 배운 것

재귀 알고리즘은 선언형 프로그래밍이다.

명령형 프로그래밍은 알고리즘을 명시하고 목표는 명시하지 않는데 반해,
선언형 프로그래밍은 목표를 명시하고 알고리즘을 명시하지 않는 것이다.

즉, 알고리즘에 대해 명시 하는 것이 아니라 목표에 대해 명시하고 알고리즘은 컴퓨터가 해결할 수 있도록 하는 것이 선언형 프로그래밍이다.

목표를 정하고, 종료 조건을 정하고 재귀시켜야한다.

즉, 이 문제에서는 'A에서 B로 옮겨라'라는 명령을 추후 일어날 상황까지 고려해서 에러 없는 논리으로 구현하면 되는 것이다.

### 소스코드

```js
const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const answer = [];
let count = 0;

function movePlate(from, to, other, num) {
  if (num === 0) {
    return;
  } else {
    movePlate(from, other, to, num - 1);
    answer.push(`${from} ${to}`);
    count++;
    movePlate(other, to, from, num - 1);
  }
}

movePlate(1, 3, 2, input);

console.log(count);
console.log(answer.join("\n"));
```
