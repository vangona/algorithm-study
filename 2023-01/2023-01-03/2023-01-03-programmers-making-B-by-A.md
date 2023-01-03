---
layout: post
title: Programmers, A로 B 만들기
categories: Algorithm
tags:
  - algorithm
  - programmers
  - level0
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

<center>

# Level 0. A로 B 만들기

</center>

---

## A로 B 만들기

### 문제 설명

문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

- 0 < before의 길이 == after의 길이 < 1,000
- before와 after는 모두 소문자로 이루어져 있습니다.

### 문제풀이

```js
const countChar = (str) => {
  const countArr = new Array(26).fill(0);
  str.split("").forEach((char) => {
    countArr[char.charCodeAt() - 97]++;
  });
  return countArr;
};

function solution(before, after) {
  return countChar(before).join("") === countChar(after).join("") ? 1 : 0;
}
```

- before와 after의 길이가 같다.
- 둘에 들어간 알파벳의 수가 같으면 된다.
- 방법으로 생각해볼 수 있는 것은 Map을 만드는 것과 계수 배열을 사용하는 것이었다.
- 소문자 밖에 없다는 제한사항이 있어서 개수 비교가 편하도록 계수배열을 사용했다.
