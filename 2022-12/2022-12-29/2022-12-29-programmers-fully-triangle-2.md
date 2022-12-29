---
layout: post
title: Programmers, 삼각형의 완성조건 (2)
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

# Level 0. 삼각형의 완성조건 (2)

</center>

---

## 삼각형의 완성조건 (2)

### 문제 설명

선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

### 제한사항

- sides의 원소는 자연수입니다.
- sides의 길이는 2입니다.
- 1 ≤ sides의 원소 ≤ 1,000

### 문제풀이

```js
function solution(sides) {
  const [longerSide, shorterSide] =
    sides[0] > sides[1] ? [sides[0], sides[1]] : [sides[1], sides[0]];

  const longerMax = longerSide + shorterSide - 1;
  const longerMin = longerSide + 1;
  const shorterMax = longerSide;
  const shorterMin = longerSide - shorterSide + 1;

  if (longerMin > shorterMax) {
    return longerMax - longerMin + shorterMax - shorterMin + 2;
  } else {
    return longerMax - shorterMin + 1;
  }
}
```

- 구해야할 것 : 세번째 변이 될 수 있는 정수의 개수
- 경우의 수 : 세번째 변이 가장 긴 변이거나, sides 중에 긴 변이 가장 긴 변이거나
  - 세번째 변이 가장 긴 변 : third < sides[0] + sides[1] && third > Math.max(...sides)
    - max = sides[0] + sides[1] - 1;
    - min = Math.max(...sides) + 1;
  - sides 중에 긴 변이 가장 긴 변 : third <= Math.max(...sides) < third + 나머지 한 변
    - max = Math.max(...sides);
    - min = Math.max(sides) - 나머지 한 변 + 1;
- 각 경우의 수에서 가능한 정수의 수 : 최대 정수 - 최소 정수 + 1
- 범위가 겹치는 경우 : 세번째 변이 가장 길 때의 max - 두 변 중 긴 변이 있을 때의 min

### 식을 간소화 시키기

```js
function solution(sides) {
  const [longerSide, shorterSide] =
    sides[0] > sides[1] ? [sides[0], sides[1]] : [sides[1], sides[0]];

  const longerMax = longerSide + shorterSide - 1;
  const longerMin = longerSide + 1;
  const shorterMax = longerSide;
  const shorterMin = longerSide - shorterSide + 1;

  if (longerMin > shorterMax) {
    return longerMax - longerMin + shorterMax - shorterMin + 2;
    //  (longerSide + shorterSide - 1) - (longerSide + 1) + longerSide - (longerSide - shorterSide) + 1
    // 즉, shorterSide * 2 - 1로 간소화 시킬 수 있다.
  } else {
    return longerMax - shorterMin + 1;
    // (longerSide + shorterSide - 1) - (longerSide - shorterSide + 1) + 1
    // 즉 , shorterSide * 2 - 1로 간소화 시킬 수 있다.
  }
}
```

- 위의 과정에 따라서 shortSide \* 2 - 1로 식을 간소화 시킬 수 있다.
- 이것은 결국 Math.min(...sides) \* 2 - 1이기 때문에 아래와 같이 풀이를 간소화시킬 수 있다.

```js
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
```
