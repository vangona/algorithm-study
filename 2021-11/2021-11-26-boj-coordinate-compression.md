---
layout: post
title: 백준 문제풀이 18870번 좌표 압축
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

# <center>[백준 문제풀이] 18870번 좌표 압축</center>

---

## 18870번 좌표 압축 (Silver 2)

### 문제

https://www.acmicpc.net/problem/18870

수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.

X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

### 입력

첫째 줄에 N이 주어진다.

둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

### 출력

첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

## 좌표 압축이란?

좌표 압축이란, 정확한 값이 필요 없고 값의 대소관계만이 필요할 때, 모든 수를 0이상 N 미만의 수로 바꾸는 것을 말한다.

### 첫번째 풀이

N이 1,000,000 이하의 수 인데다가, X는 2 \* 10^2만큼의 범위를 가져서 단순 정렬로는 풀지 못할 것이라고 생각했다.

일단 메모리 제한이 512MB인데다가 N이 X보다는 훨씬 적은 범위라서 N만큼의 배열을 만든 뒤, set 객체를 사용해서 함수 중복을 제거한 뒤에 index 값으로 원배열 값을 바꿔주는 것을 생각했다.

### 첫번째 풀이 소스코드 (시간 초과 - set 객체로 변환 후, index 값으로 변환)

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
let numbers = input.toString().trim().split(" ");
const set = new Set(numbers);
const setArr = [...set];
setArr.sort();

const indexArr = new Array(setArr.length);

for (let i = 0; i < N; i++) {
  const index = indexArr.indexOf(numbers[i]);
  numbers[i] = index;
}

console.log(numbers.join(" "));
```

### 두번째 풀이

시간 초과가 나올만한 부분이 탐색 부분인 것 같아서 *indexOf의 시간복잡도를 찾아보니 O(n)*으로 나왔다. n이 최대 1,000,000에 O(n)으로 최대 1,000,000번 탐색해야하니, 시간 초과가 나올 수 밖에 없었다.

이때 사용을 고려 해볼 수 있는 방법으로 객체에 담아서 해시테이블로 사용하는 것과 이진탐색을 사용하는 것이었다. 객체에 담는 forEach의 시간복잡도 또한 O(n)이라서, *O(logn)의 시간복잡도를 가지는 이진탐색*으로 실행하기로 했다.

### 두번째 풀이 소스코드 (시간 초과 - )

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
let numbers = input[1]
  .toString()
  .split(" ")
  .map((el) => parseInt(el));
const set = new Set(numbers);
let indexArr = [...set];
indexArr.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  let low = 0;
  let high = N - 1;
  let mid = Math.floor(high + low / 2);
  while (numbers[i] !== indexArr[mid]) {
    if (numbers[i] < indexArr[mid]) {
      high = mid - 1;
      mid = Math.floor(high + low / 2);
    } else {
      low = mid + 1;
      mid = Math.floor(high + low / 2);
    }
  }
  numbers[i] = mid;
}

console.log(numbers.join(" "));
```

### 세번째 풀이

이진 탐색도 결국 최대 1,000,000번 해야했기 때문에, 시간 초과가 나올 수 밖에 없었다.

결국 hash table을 사용하는 방식으로 풀어야 했다. 생각해보니까 처음에 forEach로 hash table을 만들더라도, 마지막 for문에서 찾을 때 시간복잡도가 O(1)인 것이라서 훨-씬 빨랐다.

### 최종 풀이 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
let numbers = input[1]
  .toString()
  .split(" ")
  .map((el) => parseInt(el));
const set = new Set(numbers);
let indexArr = [...set];
indexArr.sort((a, b) => a - b);
const indexObj = {};

indexArr.forEach((el, index) => (indexObj[el] = index));

for (let i = 0; i < N; i++) {
  numbers[i] = indexObj[numbers[i]];
}

console.log(numbers.join(" "));
```
