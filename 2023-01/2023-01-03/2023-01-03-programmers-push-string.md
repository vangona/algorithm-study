---
layout: post
title: Programmers, 문자열 밀기
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

# Level 0. 문자열 밀기

</center>

---

## 문자열 밀기

### 문제 설명

문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 몇 번 밀어야 하는지 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

- 0 < A의 길이 = B의 길이 < 100
- A, B는 알파벳 소문자로 이루어져 있습니다.

### 문제풀이

```js
function solution(A, B) {
  const queue = A.split("");
  for (let i = 0; i < B.length; i++) {
    if (queue.join("") === B) return i;
    queue.unshift(queue.pop());
  }
  return -1;
}
```

- 요구사항대로 풀이함.

### 인상깊었던 풀이

```js
const solution = (A, B) => {
  return (B + B).indexOf(A);
};
```

- A가 원형으로 순환해서 B가 될 수 있다면 B를 두 개 붙이고 A의 index를 찾는 것으로 이동횟수를 구할 수 있다.
