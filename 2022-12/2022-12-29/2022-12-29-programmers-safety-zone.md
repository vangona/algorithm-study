---
layout: post
title: Programmers, 안전지대
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

# Level 0. 안전지대

</center>

---

## 안전지대

### 문제 설명

다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.

지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

### 제한사항

board는 n \* n 배열입니다.
1 ≤ n ≤ 100
지뢰는 1로 표시되어 있습니다.
board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.

### 문제풀이

```js
function solution(board) {
  const nearby = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  let answer = board.length * board.length;

  const _countValidNearby = (x, y) => {
    let result = 0;

    nearby.forEach((diff) => {
      const dx = x + diff[0];
      const dy = y + diff[1];
      if (board[dy]?.[dx] === 0) {
        result++;
        board[dy][dx] = 2;
      }
    });

    return result;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        answer--;
        answer -= _countValidNearby(j, i);
      }
    }
  }

  return answer;
}
```

- 방법이 정말 이것밖에 없을까?
