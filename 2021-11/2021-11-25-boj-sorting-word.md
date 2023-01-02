---
layout: post
title: 백준 문제풀이 1181번 단어 정렬
categories: Algorithm
tags:
  - algorithm
  - boj
  - silver
  - sorting
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 1181번 단어 정렬</center>

---

## 1181번 단어 정렬 (Silver 5)

### 문제

https://www.acmicpc.net/problem/1181

알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

1. 길이가 짧은 것부터
2. 길이가 같으면 사전 순으로

### 입력

첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 주어지는 문자열의 길이는 50을 넘지 않는다.

### 출력

조건에 따라 정렬하여 단어들을 출력한다. 단, 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력한다.

### 풀이

Set 객체로 만들어서 반복을 지우고, sort를 두 번 사용해서 풀 수 있었다.

### 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();

let strArr = new Set(input);
strArr = [...strArr];
strArr.sort();

strArr.sort((a, b) => a.length - b.length);

console.log(strArr.join("\n"));
```

### 구현할 때 왜 단어순 정렬부터 했을까? (2022.05.04)

문제를 보고 바로 생각해볼 수 있는 것은, 단어 순으로 정렬한 뒤, 길이순으로 정렬하는 것이다.

하지만 조금만 더 생각해보면, 그렇게 정렬하게될 경우 단어순으로 정렬하게되며 길이순 정렬이 모두 꼬인다는 것을 생각해볼 수 있다.
