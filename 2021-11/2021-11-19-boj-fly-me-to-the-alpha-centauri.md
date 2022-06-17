---
layout: post
title: 백준 문제풀이 1011번 Fly me to the Alpha Centauri
categories: Algorithm
tags:
  - algorithm
  - boj
  - gold
  - basic-math
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>[백준 문제풀이] 1011번 Fly me to the Alpha Centauri</center>

---

## 1011번 Fly me to the Alpha Centauri (Gold 5)

### 느낀 점

어려운 문제도 계속 생각하면 풀린다.

### 문제

https://www.acmicpc.net/problem/1011

우현이는 어린 시절, 지구 외의 다른 행성에서도 인류들이 살아갈 수 있는 미래가 오리라 믿었다. 그리고 그가 지구라는 세상에 발을 내려 놓은 지 23년이 지난 지금, 세계 최연소 ASNA 우주 비행사가 되어 새로운 세계에 발을 내려 놓는 영광의 순간을 기다리고 있다.

그가 탑승하게 될 우주선은 Alpha Centauri라는 새로운 인류의 보금자리를 개척하기 위한 대규모 생활 유지 시스템을 탑재하고 있기 때문에, 그 크기와 질량이 엄청난 이유로 최신기술력을 총 동원하여 개발한 공간이동 장치를 탑재하였다. 하지만 이 공간이동 장치는 이동 거리를 급격하게 늘릴 경우 기계에 심각한 결함이 발생하는 단점이 있어서, 이전 작동시기에 k광년을 이동하였을 때는 k-1 , k 혹은 k+1 광년만을 다시 이동할 수 있다. 예를 들어, 이 장치를 처음 작동시킬 경우 -1 , 0 , 1 광년을 이론상 이동할 수 있으나 사실상 음수 혹은 0 거리만큼의 이동은 의미가 없으므로 1 광년을 이동할 수 있으며, 그 다음에는 0 , 1 , 2 광년을 이동할 수 있는 것이다. ( 여기서 다시 2광년을 이동한다면 다음 시기엔 1, 2, 3 광년을 이동할 수 있다. )

김우현은 공간이동 장치 작동시의 에너지 소모가 크다는 점을 잘 알고 있기 때문에 x지점에서 y지점을 향해 최소한의 작동 횟수로 이동하려 한다. 하지만 y지점에 도착해서도 공간 이동장치의 안전성을 위하여 y지점에 도착하기 바로 직전의 이동거리는 반드시 1광년으로 하려 한다.

김우현을 위해 x지점부터 정확히 y지점으로 이동하는데 필요한 공간 이동 장치 작동 횟수의 최솟값을 구하는 프로그램을 작성하라.

### 입력

입력의 첫 줄에는 테스트케이스의 개수 T가 주어진다. 각각의 테스트 케이스에 대해 현재 위치 x 와 목표 위치 y 가 정수로 주어지며, x는 항상 y보다 작은 값을 갖는다. (0 ≤ x < y < 231)

### 출력

각 테스트 케이스에 대해 x지점으로부터 y지점까지 정확히 도달하는데 필요한 최소한의 공간이동 장치 작동 횟수를 출력한다.

### 풀이

y의 최댓값이 2의 31승 –1로 컸기 때문에 수학적으로 접근해야하는 문제라고 생각했다. 고로 규칙성을 찾기 위해 노력했다.

처음에는 오직 1만 이동할 수 있고 마지막에도 오직 1을 이동해야 하기 때문에 *이동 count의 최대 이동거리*와 *전체 이동 중 1회 이동거리가 가장 긴 수 간의 규칙성*을 발견할 수 있었다.

결론적으로 이동 횟수가 홀수 2n-1회일 때는 최대 이동거리를 n^2이며, 짝수 2n회일 때는 n(n+1)라는 식을 유도할 수 있었다.

완전 탐색으로 접근할 경우 시간초과가 뜰 것 같아서, 위의 수식을 사용해서 이동거리가 포함될 최대 이동 횟수 중 홀수와 짝수일 경우를 조건문을 통해 풀이했다.

### 소스코드

```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);
const answerArr = [];

for (let i = 1; i <= T; i++) {
  const c = input[i].split(" ").map((num) => parseInt(num));
  const distance = c[1] - c[0];
  const max = Math.ceil(Math.sqrt(distance));
  if (distance <= max * (max - 1)) {
    answerArr.push(max * 2 - 2);
  } else {
    answerArr.push(max * 2 - 1);
  }
}

console.log(answerArr.join("\n"));
```
