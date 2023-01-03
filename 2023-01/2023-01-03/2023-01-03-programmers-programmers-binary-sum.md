---
layout: post
title: Programmers, 이진수 더하기
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

# Level 0. 이진수 더하기

</center>

---

## 이진수 더하기

### 문제 설명

이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

### 제한사항

- return 값은 이진수를 의미하는 문자열입니다.
- 1 ≤ bin1, bin2의 길이 ≤ 10
- bin1과 bin2는 0과 1로만 이루어져 있습니다.
- bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.

### 문제풀이

```js
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}
```

- 가장 쉬운 풀이

### 메서드 쓰지 않고 하기

```js
const binStrToDecimal = (binStr) => {
  let result = 0;
  binStr.split("").forEach((bin, index) => {
    result += bin === "1" ? Math.pow(2, binStr.length - index - 1) : 0;
  });
  return result;
};

const decimalToBinStr = (decimal) => {
  if (decimal === 0) return "0";

  let result = [];
  while (decimal) {
    result.unshift(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  return result.join("");
};

function solution(bin1, bin2) {
  let result = binStrToDecimal(bin1) + binStrToDecimal(bin2);
  return decimalToBinStr(result);
}
```
