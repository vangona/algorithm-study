---
layout: post
title: 백준 문제풀이 9093번 단어 뒤집기
categories: Algorithm
tags:
  - algorithm
  - boj
  - bronze
  - stack&queue
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 9093번 단어 뒤집기</center>

---

## 9093번 단어 뒤집기 (Bronze 1)

### 문제

https://www.acmicpc.net/problem/9093

문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다.

### 입력

첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 문장이 하나 주어진다. 단어의 길이는 최대 20, 문장의 길이는 최대 1000이다. 단어와 단어 사이에는 공백이 하나 있다.

### 출력

각 테스트 케이스에 대해서, 입력으로 주어진 문장의 단어를 모두 뒤집어 출력한다.

### split + reverse 메서드 풀이

split으로 각 단어를 나눈 배열을 만든 뒤 각각 단어를 뒤집은 배열을 추가해서 공백을 join해서 풀이하면 될 것 같다. 문제는 시간이 가능한가인데, 일단 해보고 다른 섹시한 풀이를 찾아보기로 했다.

### 소스코드 (split + reverse 메서드 사용, 288ms)

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input.shift();
const answerArr = [];

for (let i = 0; i < T; i++) {
  const line = input[i].split(" ");
  let reversedLine = [];
  let reversedWord = "";
  for (let l = 0; l < line.length; l++) {
    const reversedWord = line[l].split("").reverse().join("");
    reversedLine.push(reversedWord);
  }
  answerArr.push(reversedLine.join(" "));
}

console.log(answerArr.join(" \n"));
```

### 스택을 사용한 풀이

stack 자료 구조의 특징을 활용해서 푸는 경우도 있었다. 문장을 split 하지 않고 stack에 문자를 하나씩 추가하고, 다 추가된 경우 다시 pop을 사용해서 재배열 하는 방식이었다. (524ms)

### 스택 풀이 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = parseInt(input.shift());
const answerArr = [];

for (let i = 0; i < T; i++) {
  let line = input[i];
  let str = "";
  const stack = [];

  for (let j = 0; j <= line.length; j++) {
    if (line[j] === " " || line[j] === undefined) {
      while (stack.length > 0) {
        str += stack.pop();
      }
      str += " ";
    } else {
      stack.push(line[j]);
    }
  }
  answerArr.push(str);
}

console.log(answerArr.join("\n"));
```
