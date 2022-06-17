---
layout: post
title: 2021.11.08 백준 문제풀이
categories: Algorithm
tags:
  - algorithm
  - boj
  - silver
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>2021.11.08. 백준 문제풀이</center>

---

## 1316번 그룹 단어 체커 (Silver 5)

### 문제

https://www.acmicpc.net/problem/1316

그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

### 풀이

먼저 set을 이용해서, 중복되는 문자가 없을 때의 경우를 제외해주고 반복문을 통해 확인하기로 정했다.

### 소스코드

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = parseInt(input[0]);
let answer = 0;

for (let i = 1; i <= n; i++) {
  const letters = input[i].split("");
  const newLetter = [];
  const set = new Set(letters);
  if (letters.length === set.size) {
    answer += 1;
  } else {
    let isGroupWord = true;
    for (let j = 0; j < letters.length; j++) {
      if (newLetter.indexOf(letters[j]) === -1) {
        newLetter.push(letters[j]);
      } else {
        if (newLetter.indexOf(letters[j]) !== newLetter.length - 1) {
          isGroupWord = false;
          break;
        }
      }
    }
    if (isGroupWord) {
      answer += 1;
    }
  }
}

console.log(answer);
```

반복문에서는 isGroudWord라는 Boolean 값을 통해서, GroupWord의 상태가 유지되는지 확인하였고, 다른 배열에 문자들을 추가하여서 그 배열의 중복 값이 마지막에 위치해있는지를 통해서 연속적으로 문자가 배치되어있는지 확인했다.
