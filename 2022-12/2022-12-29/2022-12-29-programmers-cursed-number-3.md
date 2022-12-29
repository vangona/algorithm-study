---
layout: post
title: Programmers, 저주의 숫자 3
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

# Level 0. 저주의 숫자 3

</center>

---

## 저주의 숫자 3

### 문제 설명

3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

| 10진법 | 3x 마을에서 쓰는 숫자 | 10진법 | 3x 마을에서 쓰는 숫자 |
| ------ | --------------------- | ------ | --------------------- |
| 1      | 1                     | 6      | 8                     |
| 2      | 2                     | 7      | 10                    |
| 3      | 4                     | 8      | 11                    |
| 4      | 5                     | 9      | 14                    |
| 5      | 7                     | 10     | 16                    |

정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

### 제한사항

1 ≤ n ≤ 100

### 문제풀이

```js
function solution(n) {
  let answer = 0;
  let count = 0;

  while (count < n) {
    answer++;
    if (answer % 3 === 0 || answer.toString().includes("3")) continue;
    count++;
  }

  return answer;
}
```

- 요구사항에 맞춰 간단히 풀이할 수 있었다.
  - 단순히 3의 배수 뿐만 아니라 3의 배수가 아니며 3이 포함되는 수도 확인해야한다.
- 수학적으로 풀 수 있는 방법은 없을까?
