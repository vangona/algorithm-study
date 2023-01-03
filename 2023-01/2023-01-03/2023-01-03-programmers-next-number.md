---
layout: post
title: Programmers, 다음에 올 숫자
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

# Level 0. 다음에 올 숫자

</center>

---

## 다음에 올 숫자

### 문제 설명

등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

### 제한사항

- 2 < common의 길이 < 1,000
- -1,000 < common의 원소 < 2,000
- 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
- 공비가 0인 경우는 없습니다.

### 문제풀이

```js
function solution(common) {
  if (common[2] - common[1] === common[1] - common[0])
    return common[0] + common.length * (common[1] - common[0]);
  if (common[2] / common[1] === common[1] / common[0])
    return common[0] * Math.pow(common[1] / common[0], common.length);
}
```

- 공차 d의 등차 수열의 n번째 항 = a + (n - 1)d
- 공비 r의 등비 수열의 n번째 항 = ar^n-1
- 리팩토링이 가능할 듯함.

### 리팩토링

```js
function solution(common) {
  const a = common[0];
  const n = common.length;

  const d = common[1] - common[0];
  if (common[2] - common[1] === d) return a + n * d;

  const r = common[1] / common[0];
  if (common[2] / common[1] === r) return a * Math.pow(r, n);
}
```

- 변수로 묶어서 리팩토링함.

### 다른 사람의 풀이를 참고하기

```js
function solution(common) {
  const a = common[0];
  const n = common.length;

  const d = common[1] - common[0];
  if (common[2] - common[1] === d) return common[n - 1] + d;

  const r = common[1] / common[0];
  if (common[2] / common[1] === r) return common[n - 1] * r;
}
```

- 계산을 줄이는 더 효율적인 방법
