---
layout: post
title: Programmers, k의 개수
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

# Level 0. k의 개수

</center>

---

## k의 개수

### 문제 설명

1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ i < j ≤ 100,000
- 0 ≤ k ≤ 9

### 문제풀이

```js
const countK = (number, k) => {
  let result = 0;
  number
    .toString()
    .split("")
    .forEach((char) => {
      if (char == k) result++;
    });
  return result;
};

function solution(i, j, k) {
  let answer = 0;
  while (i <= j) {
    answer += countK(i, k);
    i++;
  }
  return answer;
}
```

- 요구사항대로 풀이함.

### 더 나은 풀이

```js
function solution(i, j, k) {
  let str = "";
  while (i <= j) {
    str += i;
    i++;
  }
  return str.split(k).length - 1;
}
```

- 공간복잡도도 시간복잡도도 더 효율적임.
