---
layout: post
title: 백준 문제풀이 2447번 별 찍기
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

# <center>[백준 문제풀이] 2447번 별 찍기</center>

---

## 2447번 별 찍기 (Silver 1)

### 문제

https://www.acmicpc.net/problem/2447

재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다.

크기 3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩 있는 패턴이다.

N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의 (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다. 예를 들어 크기 27의 패턴은 예제 출력 1과 같다.

### 입력

첫째 줄에 N이 주어진다. N은 3의 거듭제곱이다. 즉 어떤 정수 k에 대해 N=3k이며, 이때 1 ≤ k < 8이다.

### 출력

첫째 줄부터 N번째 줄까지 별을 출력한다.

### 배운 것

재귀 함수라는 개념 자체가 조금 어려워서 구글 서치를 하고, 문서나 영상들을 찾아봤다. 재귀함수도 결국은 수학적 사고로 추론된 규칙을 기반으로 수행되어야 하는 것이라는걸 이해할 수 있었다.

### 풀이

별찍기의 공백은 n \* n으로 만들어질 때, 좌표가 n % 3 === 1인 지점부터 n / 3까지의 공백이다.

3이 아닌 더 큰 수에서는 결국 3으로 나눠준 몫이 이러한 부분을 가지게 된다. 예를 들어서 Math.floor(4 / 3) = Math.floor(3 / 3)이 된다. 이러한 방식을 사용하면, 3^n인 별을 찍을 수 있다.

### 소스코드

```js
const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());
const answer = [];

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    makeStar(i, j, input);
  }
  answer.push("\n");
}

function makeStar(x, y, num) {
  if (x % 3 === 1 && y % 3 === 1) {
    answer.push(" ");
  } else {
    if (num === 1) {
      answer.push("*");
    } else {
      makeStar(Math.floor(x / 3), Math.floor(y / 3), num / 3);
    }
  }
}

console.log(answer.join(""));
```
