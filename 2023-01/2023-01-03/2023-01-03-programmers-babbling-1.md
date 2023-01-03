---
layout: post
title: Programmers, 옹알이 (1)
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

# Level 0. 옹알이 (1)

</center>

---

## 옹알이 (1)

### 문제 설명

머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

### 제한사항

1 ≤ babbling의 길이 ≤ 100
1 ≤ babbling[i]의 길이 ≤ 15
babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
문자열은 알파벳 소문자로만 이루어져 있습니다.

### 문제풀이

```js
function solution(babbling) {
  let answer = 0;
  const validBabblings = ["aya", "ye", "woo", "ma"];
  babbling.forEach((word) => {
    let result = word;
    validBabblings.forEach((validBabbling) => {
      result = result.replace(validBabbling, " ");
    });
    if (!result.trim().length) answer++;
  });
  return answer;
}
```

- 최대 한 번 씩만 등장함.
- 유한 오토마타로 풀 수 있지 않나?
  - 코드가 너무 복잡해질 듯.
- 정규표현식 + 재귀로 가능하지 않나?

- 단순히 풀이만 맞게한다면 어려운 문제가 아니었으나, 확장을 최대한 고려하고 싶었다.
