---
layout: post
title: 백준 문제풀이 2798번 블랙잭
categories: Algorithm
tags:
  - algorithm
  - boj
  - bronze
  - recursion
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 2798번 블랙잭</center>

---

## 2798번 블랙잭 (Bronze 2)

### 문제

https://www.acmicpc.net/problem/2798

카지노에서 제일 인기 있는 게임 블랙잭의 규칙은 상당히 쉽다. 카드의 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임이다. 블랙잭은 카지노마다 다양한 규정이 있다.

한국 최고의 블랙잭 고수 김정인은 새로운 블랙잭 규칙을 만들어 상근, 창영이와 게임하려고 한다.

김정인 버전의 블랙잭에서 각 카드에는 양의 정수가 쓰여 있다. 그 다음, 딜러는 N장의 카드를 모두 숫자가 보이도록 바닥에 놓는다. 그런 후에 딜러는 숫자 M을 크게 외친다.

이제 플레이어는 제한된 시간 안에 N장의 카드 중에서 3장의 카드를 골라야 한다. 블랙잭 변형 게임이기 때문에, 플레이어가 고른 카드의 합은 M을 넘지 않으면서 M과 최대한 가깝게 만들어야 한다.

N장의 카드에 써져 있는 숫자가 주어졌을 때, M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력하시오.

### 입력

첫째 줄에 카드의 개수 N(3 ≤ N ≤ 100)과 M(10 ≤ M ≤ 300,000)이 주어진다. 둘째 줄에는 카드에 쓰여 있는 수가 주어지며, 이 값은 100,000을 넘지 않는 양의 정수이다.

합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.

### 출력

첫째 줄에 M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 출력한다.

### 배운 것

조합을 위한 알고리즘은 재귀를 사용해서 만든다.

forEach의 parameter는 element, index, array가 있다.
element는 각각의 원소이고, index는 해당 원소의 위치, array는 forEach가 진행되는 배열을 말한다.

### 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input[0] = input[0].split(" ");
const N = parseInt(input[0][0]);
const M = parseInt(input[0][1]);
const cards = input[1].split(" ").map((card) => parseInt(card));
let answer = 0;

const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return arr.map((element) => [element]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((element) => [fixed, ...element]);
    results.push(...attached);
  });
  return results;
};

getCombinations(cards, 3).forEach((result) => {
  const sum = result[0] + result[1] + result[2];
  if (sum <= M && answer <= sum) {
    answer = sum;
  }
});

console.log(answer);
```
