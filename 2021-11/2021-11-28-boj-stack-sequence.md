---
layout: post
title: 백준 문제풀이 1874번 스택수열
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

# <center>[백준 문제풀이] 1874번 스택수열</center>

---

## 1874번 스택수열 (Silver 3)

### 문제

https://www.acmicpc.net/problem/1874

스택 (stack)은 기본적인 자료구조 중 하나로, 컴퓨터 프로그램을 작성할 때 자주 이용되는 개념이다. 스택은 자료를 넣는 (push) 입구와 자료를 뽑는 (pop) 입구가 같아 제일 나중에 들어간 자료가 제일 먼저 나오는 (LIFO, Last in First out) 특성을 가지고 있다.

1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다. 이때, 스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자. 임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지, 있다면 어떤 순서로 push와 pop 연산을 수행해야 하는지를 알아낼 수 있다. 이를 계산하는 프로그램을 작성하라.

### 입력

첫 줄에 n (1 ≤ n ≤ 100,000)이 주어진다. 둘째 줄부터 n개의 줄에는 수열을 이루는 1이상 n이하의 정수가 하나씩 순서대로 주어진다. 물론 같은 정수가 두 번 나오는 일은 없다.

### 출력

입력된 수열을 만들기 위해 필요한 연산을 한 줄에 한 개씩 출력한다. push연산은 +로, pop 연산은 -로 표현하도록 한다. 불가능한 경우 NO를 출력한다.

### 첫번째 풀이

입력 숫자가 n번째 수보다 크면 같아질 때까지 push하고, 작으면 pop을 하는 방법으로 풀이했다. 방법이 없을때를 고려해서 try, catch를 사용했다.

### 첫번째 풀이 소스코드 (메모리 초과)

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());
const stack = [];
const answerArr = [];
let isExist = true;

for (let j = 0; j < n; j++) {
  let num = 1;
  while (num <= n) {
    if (num <= parseInt(input[j])) {
      while (num <= parseInt(input[j])) {
        stack.push(num);
        answerArr.push("+");
        num++;
      }
    } else {
      try {
        while (stack[stack.length - 1] !== parseInt(input[j])) {
          stack.pop();
          answerArr.push("-");
        }
        stack.pop();
        answerArr.push("-");
      } catch {
        isExist = false;
      }
    }
  }
}

if (!isExist) {
  console.log("NO");
} else {
  console.log(answerArr.join("\n"));
}
```

### 최종 풀이

문제에서 요구하는 로직을 다시 정리해보자면,

1. 1부터 n까지의 수를 오름차순으로 스택에 넣어야한다.
2. 그 과정에서 제시되는 숫자 순서대로 스택에서 숫자를 pop 한다.
3. 이것이 가능하다면 push와 pop의 로그를 출력하고,
4. 불가능하다면 'NO'를 출력해라.

라고 정리할 수 있겠다.

이 알고리즘은

1. stack에 순서대로 push 하고 pop하는 알고리즘
2. 해당 숫자열이 스택 수열로 가능한지 확인하는 조건문

두 가지로 나눠볼 수 있겠다.

#### 1. stack에 순서대로 push 하고 pop하는 알고리즘

먼저 오름차순대로 스택에 입력하고, 제시되는 순서대로 pop 하는 알고리즘을 생각해본다면.

1. 1부터 첫번째 제시된 숫자까지 stack에 push 한다.
2. 두번째로 제시된 숫자가 첫번째로 제시된 숫자보다 작으면, 두번째로 제시된 숫자까지 pop한다.
3. 두번째로 제시된 숫자가 첫번째로 제시된 숫자보다 크면, 두번째로 제시된 숫자까지 stack에 push 한다.

위의 과정을 반복하면 된다.

#### 2. 해당 숫자열이 스택 수열로 가능한지 확인하는 조건문

stack에 순서대로 push 하고 pop하는 알고리즘이 진행될 때, 스택 수열로 가능한지에 대한 조건문이 사용되어야한다.

스택 수열이 불가능한 경우를 생각해보면

push 해야할 수가 제시된 숫자보다 더 크고, 제시된 숫자보다 stack에 있는 수가 제시된 수보다 경우이다.

이 경우에는, stack에서 아무리 pop 하더라도 제시된 수를 만들 수 없다.

### 최종 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());
const stack = [];
const answerArr = [];
let isExist = true; // 가능 / 불가능 확인을 위한 flag
let num = 1; // push 해야할 수

for (let j = 0; j < n; j++) {
  if (num <= parseInt(input[j])) {
    // push 해야 할 수가 제시된 수보다 작으면
    // 제시된 수까지 push 한다.
    while (num <= parseInt(input[j])) {
      stack.push(num);
      answerArr.push("+");
      num++;
    }
  } else if (stack[stack.length - 1] > parseInt(input[j])) {
    // push 해야 할 수가 제시된 수보다 크고,
    // stack에 있는 수가 제시된 수보다 크면
    // 아무리 pop해도 스택 수열을 만들 수 없다.
    isExist = false;
    break;
  }

  // 제시된 수까지 push 되었기 때문에,
  // pop 해주면 된다.
  stack.pop();
  answerArr.push("-");
}

if (!isExist) {
  console.log("NO");
} else {
  console.log(answerArr.join("\n"));
}
```
