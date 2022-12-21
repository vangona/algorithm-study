## 숨어있는 숫자의 덧셈 (1)

### 문제 설명

문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ my_string의 길이 ≤ 1,000
- my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

### 문제 풀이

```js
function solution(my_string) {
  const numbers = my_string.match(/[0-9]/g).map((num) => num * 1);
  const sum = numbers.reduce((acc, curr) => acc + curr);
  return sum;
}
```

- 요구사항대로 구현함
