---
layout: post
title: 백준 문제풀이 9012번 괄호
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

# <center>[백준 문제풀이] 9012번 괄호</center>

---

## 9012번 괄호 (Silver 4)

### 배운 것

조건문에 사용된 문도 실행된 것으로 처리된다. if문에 stack.pop()을 통해서 값이 남아있는지 확인하려고 했었는데, 이 부분에서 배열의 값이 pop 되는 바람에 계속 에러가 났었다.

### 문제

https://www.acmicpc.net/problem/9012

괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다. 그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다. 한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다. 만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS 가 된다. 그리고 두 VPS x 와 y를 접합(concatenation)시킨 새로운 문자열 xy도 VPS 가 된다. 예를 들어 “(())()”와 “((()))” 는 VPS 이지만 “(()(”, “(())()))” , 그리고 “(()” 는 모두 VPS 가 아닌 문자열이다.

여러분은 입력으로 주어진 괄호 문자열이 VPS 인지 아닌지를 판단해서 그 결과를 YES 와 NO 로 나타내어야 한다.

### 입력

입력 데이터는 표준 입력을 사용한다. 입력은 T개의 테스트 데이터로 주어진다. 입력의 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다. 각 테스트 데이터의 첫째 줄에는 괄호 문자열이 한 줄에 주어진다. 하나의 괄호 문자열의 길이는 2 이상 50 이하이다.

### 출력

출력은 표준 출력을 사용한다. 만일 입력 괄호 문자열이 올바른 괄호 문자열(VPS)이면 “YES”, 아니면 “NO”를 한 줄에 하나씩 차례대로 출력해야 한다.

### 풀이

스택을 사용해서 풀 수 있었다.

### 소스코드

```js
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input.shift());
const answerArr = [];

for (let i = 0; i < T; i++) {
  const line = input[i];
  const stack = [];
  let answer = "YES";

  for (let j = 0; j < line.length; j++) {
    if (line[j] === "(") {
      stack.push("(");
    } else {
      if (!stack.pop()) {
        answer = "NO";
        break;
      }
    }
  }
  if (stack.length > 0) {
    answer = "NO";
  }

  answerArr.push(answer);
}

console.log(answerArr.join("\n"));
```
