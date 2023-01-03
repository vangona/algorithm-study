---
layout: post
title: Programmers, 연속된 수의 합
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

# Level 0. 연속된 수의 합

</center>

---

## 연속된 수의 합

### 문제 설명

연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

### 제한사항

- 1 ≤ num ≤ 100
- 0 ≤ total ≤ 1000
- num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

### 문제풀이

```js
function solution(num, total) {
  const n = total / num - (num - 1) / 2;
  return Array.from({ length: num }, (_, index) => index + n);
}
```

- 처음에는 슬라이딩 윈도우로 풀려고 했으나 수식화가 가능하여 그대로 풀이함.
