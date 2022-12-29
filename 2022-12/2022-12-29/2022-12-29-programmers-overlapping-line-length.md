---
layout: post
title: Programmers, 겹치는 선분의 길이
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

# Level 0. 겹치는 선분의 길이

</center>

---

## 겹치는 선분의 길이

### 문제 설명

선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.

선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.

### 제한사항

- lines의 길이 = 3
- lines의 원소의 길이 = 2
- 모든 선분은 길이가 1 이상입니다.
- lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
  - -100 ≤ a < b ≤ 100

### 문제풀이

```js
const getCombinations = (arr) => {
  const result = [];
  arr.forEach((_, index, origin) => {
    result.push([...origin.slice(0, index), ...origin.slice(index + 1)]);
  });

  return result;
};

const getOverlap = (A, B) => {
  [A, B] = A[0] < B[0] ? [A, B] : [B, A];
  if (B[0] < A[1]) return [Math.max(A[0], B[0]), Math.min(A[1], B[1])];
  return false;
};

function solution(lines) {
  const overlapArr = [];
  const overlapCombinations = getCombinations(lines);
  overlapCombinations.forEach(([lineA, lineB]) => {
    const overlap = getOverlap(lineA, lineB);
    overlap && overlapArr.push(overlap);
  });

  if (overlapArr.length === 0) return 0;

  let sum = overlapArr.reduce((acc, curr) => acc + (curr[1] - curr[0]), 0);
  if (overlapArr.length < 3) return sum;

  const max = Math.max(...overlapArr.map((overlap) => overlap[1]));
  const min = Math.min(...overlapArr.map((overlap) => overlap[0]));

  return max - min;
}
```

- 겹칠 수 있는 것은 3개의 경우의 수
- 겹칠 때, 중복되는 부분은 제외해야한다.
  - 겹치는 부분이 있다면 겹침 범위를 하나로 합치기
- 겹치는 선분의 길이 = sum(max - min)
- 겹침이 3번 발생 : 모든 선분끼리 겹친다 = 겹친 부분이 하나의 선분으로 이어진다. => 최소와 최대를 통해서 겹침 선분을 구한다.
- 더 나은 방법이 없을까?
