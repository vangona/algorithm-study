---
layout: post
title: 백준 문제풀이 2775번 부녀회장이 될테야
categories: Algorithm
tags:
  - algorithm
  - boj
  - bronze
  - basic-math
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 2775번 부녀회장이 될테야</center>

---

## 2775번 부녀회장이 될테야 (Bronze 1)

### 문제

https://www.acmicpc.net/problem/2775

평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.

이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.

아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.

제한 시간 : 1초

제한 : 1 ≤ k, n ≤ 14

### 첫 번째 풀이

제한과 시간을 봤을 때, 각 층이 올라갈때마다 바로 아래층과 이전 방의 값을 더해서 배열로 만들어주는 것으로 구현이 가능할 수 있겠다고 생각했다.

**틀림.**

### 두 번째 풀이

자꾸 에러가 나서 2일 동안 고민했는데, 알고보니까 사례 수는 층, 호수를 전부 포함하는 것이라서 반복문을 T번 더 해주어야했다. 어썸 코딩... (2021.11.12.)

풀이 이후 자꾸 에러가 나서 서치를 해봤는데, 이 문제의 아래에 전부 1로된 층을 추가한 뒤, 파스칼의 삼각형으로 접근, 이항정리 문제로 푸는 방법을 찾았다. 오늘도 어썸 코딩.

### 소스코드

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);

for (let i = 1; i < T * 2; i = i + 2) {
  const k = parseInt(input[i]);
  const n = parseInt(input[i + 1]);
  const apartment = [];

  for (let l = 0; l <= k; l++) {
    apartment.push([1]);
    for (let j = 1; j < n; j++) {
      if (l === 0) {
        apartment[l].push(j + 1);
      } else {
        apartment[l].push(apartment[l - 1][j] + apartment[l][j - 1]);
      }
    }
  }
  console.log(apartment[k][n - 1]);
}
```
