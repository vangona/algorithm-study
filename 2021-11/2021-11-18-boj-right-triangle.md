---
layout: post
title: 백준 문제풀이 4153번 직각삼각형
categories: Algorithm
tags:
  - algorithm
  - boj
  - bronze
  - basic-math
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 4153번 직각삼각형</center>

---

## 4153번 직각삼각형 (Bronze 3)

### 문제

https://www.acmicpc.net/problem/4153

과거 이집트인들은 각 변들의 길이가 3, 4, 5인 삼각형이 직각 삼각형인것을 알아냈다. 주어진 세변의 길이로 삼각형이 직각인지 아닌지 구분하시오.

### 입력

입력은 여러개의 테스트케이스로 주어지며 마지막줄에는 0 0 0이 입력된다. 각 테스트케이스는 모두 30,000보다 작은 양의 정수로 주어지며, 각 입력은 변의 길이를 의미한다.

### 출력

각 입력에 대해 직각 삼각형이 맞다면 "right", 아니라면 "wrong"을 출력한다.

### 풀이

피타고라스의 정리를 이용해서 풀 수 있었다. 나는 최댓값을 구해 빗변으로 삼은 뒤 배열에서 제거해서 했는데, 다른 사람들의 풀이를 보니 정렬을 사용하면 더 효율적으로 할 수 있다는 걸 배웠다.

### 소스코드 (피타고라스의 정리)

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const answerArr = [];
let count = 0;

function isRight(triangle) {
  answerArr.push("wrong");
  const hypo = Math.max(...triangle);
  const index = triangle.indexOf(hypo);
  triangle.splice(index, 1);
  if (
    Math.pow(hypo, 2) ===
    Math.pow(triangle[0], 2) + Math.pow(triangle[1], 2)
  ) {
    answerArr[count] = "right";
  }
}

while (parseInt(input[count][0]) !== 0) {
  const tri = input[count].split(" ").map((num) => parseInt(num));
  isRight(tri);
  count++;
}

console.log(answerArr.join("\n"));
```
