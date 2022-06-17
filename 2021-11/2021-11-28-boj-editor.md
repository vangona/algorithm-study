---
layout: post
title: 백준 문제풀이 1406번 에디터
categories: Algorithm
tags:
  - algorithm
  - boj
  - silver
  - stack&queue
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 1406번 에디터</center>

---

## 1406번 에디터 (Silver 2)

### 문제

https://www.acmicpc.net/problem/1406

한 줄로 된 간단한 에디터를 구현하려고 한다. 이 편집기는 영어 소문자만을 기록할 수 있는 편집기로, 최대 600,000글자까지 입력할 수 있다.

이 편집기에는 '커서'라는 것이 있는데, 커서는 문장의 맨 앞(첫 번째 문자의 왼쪽), 문장의 맨 뒤(마지막 문자의 오른쪽), 또는 문장 중간 임의의 곳(모든 연속된 두 문자 사이)에 위치할 수 있다. 즉 길이가 L인 문자열이 현재 편집기에 입력되어 있으면, 커서가 위치할 수 있는 곳은 L+1가지 경우가 있다.

이 편집기가 지원하는 명령어는 다음과 같다.

L 커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
D 커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
B 커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
P $ $라는 문자를 커서 왼쪽에 추가함
초기에 편집기에 입력되어 있는 문자열이 주어지고, 그 이후 입력한 명령어가 차례로 주어졌을 때, 모든 명령어를 수행하고 난 후 편집기에 입력되어 있는 문자열을 구하는 프로그램을 작성하시오. 단, 명령어가 수행되기 전에 커서는 문장의 맨 뒤에 위치하고 있다고 한다.

### 입력

첫째 줄에는 초기에 편집기에 입력되어 있는 문자열이 주어진다. 이 문자열은 길이가 N이고, 영어 소문자로만 이루어져 있으며, 길이는 100,000을 넘지 않는다. 둘째 줄에는 입력할 명령어의 개수를 나타내는 정수 M(1 ≤ M ≤ 500,000)이 주어진다. 셋째 줄부터 M개의 줄에 걸쳐 입력할 명령어가 순서대로 주어진다. 명령어는 위의 네 가지 중 하나의 형태로만 주어진다.

### 출력

첫째 줄에 모든 명령어를 수행하고 난 후 편집기에 입력되어 있는 문자열을 출력한다.

### 첫번째 풀이

배열로 만든 뒤 cursor의 index를 사용해서 문제를 풀려고 시도했다.

### 첫번째 풀이 소스코드 (시간 초과)

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let str = input.shift();
str = str.trim().split("");
const N = parseInt(input.shift());
let index = parseInt(str.length > 0 ? str.legnth - 1 : 0);

for (let i = 0; i < N; i++) {
  switch (input[i].trim()) {
    case "L":
      if (index !== 0) {
        index -= 1;
      }
      break;
    case "D":
      if (index !== str.length - 1) {
        index += 1;
      }
      break;
    case "B":
      if (index !== 0) {
        str.splice(index - 1, 1);
      }
      break;
    default:
      const line = input[i].split(" ");
      str.splice(index - 1, 0, line[1]);
  }
}

console.log(str.join(""));
```

### 최종 풀이

단순 배열로 풀이하면, 중간에 추가하는 동안의 시간 복잡도가 최대 O(n)으로 시간 초과가 날 수 밖에 없었다.

자료구조로 접근하기로 했다. cursor의 왼쪽과 오른쪽을 배열로 만들어서 오른쪽은 Que, 왼쪽은 Stack의 자료구조로 구현하면 가능할 것이라고 생각했다.

이 경우도 시간 초과가 떠서 찾아보니 pop / push 메서드가 시간복잡도가 O(1)인 것과 달리, shift / unshift 메서드는 배열 맨 앞 요소를 빼야하기 때문에 시간복잡도가 O(n)이어서였다.

이 경우는 두 가지 방법을 생각해볼 수 있었다.

1. 양쪽 다 스택으로 구현하여 풀이한 뒤, right 배열을 뒤집어서 쓴다.
2. class를 통해서 유사 배열 객체로 queue를 생성하여서 시간복잡도를 O(1)로 만들어서 푼다.

나는 양쪽 다 스택으로 구현한 뒤 커서 오른쪽의 배열을 뒤집어서 쓰는 방법을 사용했다.

### 최종 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let str = input.shift();
const N = parseInt(input.shift());
const cursorLeft = str.trim().split("");
let cursorRight = [];

for (let i = 0; i < N; i++) {
  switch (input[i]) {
    case "L":
      if (cursorLeft.length) {
        cursorRight.push(cursorLeft.pop());
      }
      break;
    case "D":
      if (cursorRight.length) {
        cursorLeft.push(cursorRight.pop());
      }
      break;
    case "B":
      if (cursorLeft.length) {
        cursorLeft.pop();
      }
      break;
    default:
      const line = input[i].split(" ");
      cursorLeft.push(line[1]);
  }
}

cursorRight = cursorRight.reverse();

console.log([...cursorLeft, ...cursorRight].join(""));
```
