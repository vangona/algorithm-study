## n의 배수 고르기

### 문제 설명

정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ n ≤ 10,000
- 1 ≤ numlist의 크기 ≤ 100
- 1 ≤ numlist의 원소 ≤ 100,000

### 문제 풀이

```js
function solution(n, numlist) {
  return numlist.filter((num) => !(num % n));
}
```

- 요구사항대로 풀이함.
- 자바스크립트의 암묵적 타입변환을 이용함.

### 두번째 문제 풀이

```js
function solution(n, numlist) {
  return numlist.filter((num) => {
    if (num % n === 0) return true;
    return false;
  });
}
```

- 암묵적 타입변환을 사용하지 않는 풀이방식
