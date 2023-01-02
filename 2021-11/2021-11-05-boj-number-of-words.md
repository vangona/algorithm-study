---
layout: post
title: 2021.11.05 백준 문제풀이
categories: Algorithm
tags:
  - algorithm
  - boj
  - bronze
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

# <center>2021.11.05. 백준 문제풀이</center>

---

## 1152번 단어의 개수 (Bronze 2)

### 문제

https://www.acmicpc.net/problem/1152

### 첫 번째 풀이

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(input.length);
```

### 배운 것

86%에서 자꾸 틀려서, 예외 처리가 잘못되었다고 알았다.

어떤 경우인지 정확히 모르겠어서 찾아봤는데, 공백만 입력된 경우를 처리하지 못한 것이었다. 매우 쉬운 문제지만, 정답률이 낮은 이유가 있었다.

### 예외 처리

```js
if (input[0] === "") {
  answer -= 1;
}
```

나는 이와 같이 예외처리를 해주었다.  
해당 문제에 공백이 둘 연속으로 나오지 않는다고 했기 때문에, 전체를 반복문으로 세는 것보다 이것이 더 효율적이라고 생각했다.

---

## 2908번 상수 (Bronze 2)

### 느낀 점

아니 나는 당연히 constant를 말할 줄 알았다.  
오늘도 어썸한 개발자 세상

풀이 도중 type 에러가 났었다.  
알고보니 newStr 문자열을 상수로 선언해두는 바람에, 새로운 문자열이 들어갈 수 없는 에러였다. 이런걸 보면 나는 아직 브론즈가 맞는데, 오늘 실버로 승급해버렸다. 이건 마치 갓면허 땄을 때의 기분이다.

### 문제

https://www.acmicpc.net/problem/2908

상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다. 이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다. 상근이는 세 자리 수 두 개를 칠판에 써주었다. 그 다음에 크기가 큰 수를 말해보라고 했다.

상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.

두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 상근이가 칠판에 적은 두 수 A와 B가 주어진다. 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.

### 첫 번째 풀이

라인을 입력받고, 두 수를 공백으로 split한 다음 각각 문자열에 reverse() 메서드를 사용한 뒤 숫자로 변환해서 대소 비교를 하자.

> #### ! 아이디어
>
> 3자리 수인데 배열로 변환, reverse() 사용 후, 다시 join()을 사용하는 것보다 그냥 반복문을 쓰는게 낫지 않을까?

### 최종 풀이

**결국 반복문을 사용해서 풀었다.**

### 소스코드

```js
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const a = input[0];
const b = input[1];

function reverseStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}

const newA = parseInt(reverseStr(a));
const newB = parseInt(reverseStr(b));

if (newA > newB) {
  console.log(newA);
} else {
  console.log(newB);
}
```
