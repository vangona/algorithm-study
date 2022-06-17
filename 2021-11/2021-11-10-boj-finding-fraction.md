---
layout: post
title: 백준 문제풀이 1193번 분수찾기
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

# <center>[백준 문제풀이] 1193번 분수찾기</center>

---

## 1193번 분수찾기 (Bronze 1)

### 문제

https://www.acmicpc.net/problem/1193

무한히 큰 배열에 다음과 같이 분수들이 적혀있다.

1/1 1/2 1/3 1/4 1/5 …  
2/1 2/2 2/3 2/4 … …  
3/1 3/2 3/3 … … …  
4/1 4/2 … … … …  
5/1 … … … … …  
… … … … … …  
이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.

X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

### 첫 번째 풀이

수학 능력이 머리에 없는건지 도저히 모르겠어서 구글링을 해보았다.

수학적인 사고는 자연어로 이루어진 문제를 분석, 해결 가능한 수준으로 나누고 패턴을 찾아내는 과정이라는 말을 읽고 참 인상 깊게 새겼다. 결국 수학은 복잡한 문제를 단순화하고 패턴을 찾아내서 일반화하는 것이라는 걸 읽고 수학에 대한 새로운 생각을 할 수 있었다.

결국 주기성을 찾아내는 것이라고.

패턴화 하려고 노력했고, 답을 참고하지 않고 풀어낼 수 있었다.

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = parseInt(input);
let range = 1;
let line = 1;
let answer = 0;
let fraction = 0;

if (num === 1) {
  answer = `1/1`;
} else {
  while (range < num) {
    line++;
    range += line;
  }

  if (line % 2 === 1) {
    fraction = range - num + 1;
  } else {
    fraction = line - (range - num);
  }

  answer = `${fraction}/${line - fraction + 1}`;
}

console.log(answer);
```
