---
layout: post
title: 백준 문제풀이 1158번 요세푸스 문제
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

# <center>[백준 문제풀이] 1158번 요세푸스 문제</center>

---

## 1158번 요세푸스 문제 (Silver 4)

### 문제

https://www.acmicpc.net/problem/1158

요세푸스 문제는 다음과 같다.

1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다. 이제 순서대로 K번째 사람을 제거한다. 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.

N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 N과 K가 빈 칸을 사이에 두고 순서대로 주어진다. (1 ≤ K ≤ N ≤ 5,000)

### 출력

예제와 같이 요세푸스 순열을 출력한다.

### 풀이

에디터 때와 같이 두 개의 배열을 통해 풀려고 했는데, 하나의 큐를 만들어서 풀 수 있을 것 같았다. N도 5000 이하로 크지 않아서, 시도해보기로 했다.

[에디터 문제 보러가기](https://vangona.github.io/posts/boj-editor/)

### 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = parseInt(input[0]);
const K = parseInt(input[1]);

let queue = new Array(N);
queue = queue.fill(0).map((el, index) => (el = index + 1));

let count = 0;
const answerArr = [];

// K번째 있는 사람을 죽이는 함수
// length가 K보다 클 때와 작을 때를 나누어 구현했다.
function kill(cnt) {
  while (cnt !== 0) {
    if (queue.length >= cnt) {
      queue.push(...queue.splice(0, cnt));
      answerArr.push(queue.pop());
      cnt = 0;
    } else {
      cnt -= queue.length;
    }
  }
}

while (count < N) {
  kill(K);
  count++;
}

console.log(`<${answerArr.join(", ")}>`);
```

### 사족

다른 사람들의 풀이를 확인해보니, shift를 사용해서 한 사람들은 시간이 더 걸렸고, 배열로 큐나 스택을 직접 구현 하지 않고, index로만 값에 접근 하면 더 빠른 코드를 구현할 수 있었다.
