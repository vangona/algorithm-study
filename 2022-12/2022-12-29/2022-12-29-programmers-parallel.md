---
layout: post
title: Programmers, 평행
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

# Level 0. 평행

</center>

---

## 평행

### 문제 설명

점 네 개의 좌표를 담은 이차원 배열 dots가 다음과 같이 매개변수로 주어집니다.

[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

- 0 ≤ dots의 원소 ≤ 100
- dots의 길이 = 4
- dots의 원소의 길이 = 2
- dots의 원소는 [x, y] 형태이며 x, y는 정수입니다.
- 서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.
- 두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
- 임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다.

### 문제풀이

- 만들 수 있는 선의 개수는 4C2 / 2로 3개이다.
  - 4개 중 2개를 선택하나, 중복이 발생하기 때문
- 평행하다는 것은 직선의 기울기가 일치하는 것이다.
- 직선의 기울기 = y의 증가량 / x의 증가량
- 하나만 일치하면 되기 때문에 some으로 확인해도 된다.
