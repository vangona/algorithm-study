---
layout: post
title: Programmers, 종이 자르기
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

# Level 0. 종이 자르기

</center>

---

## 종이 자르기

### 문제 설명

머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

스크린샷 2022-07-25 오후 4.49.44.png

정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.

### 제한사항

- 0 < M, N < 100
- 종이를 겹쳐서 자를 수 없습니다.

### 문제풀이

```js
const solution = (M, N) => {
  return M * N - 1;
};
```

- 세로로 자르는 횟수 : M - 1회
- 가로로 자르는 횟수 : M(N - 1)회 - M개로 나눠진 종이들을 N - 1회 잘라서 1의 크기로 만들어야하기 때문
- 식으로 만들면 M - 1 + M(N - 1)회가 됨.
- 이 식을 정리하면 M \* N - 1이 됨.
