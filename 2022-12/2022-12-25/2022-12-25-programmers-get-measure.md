## 약수 구하기

### 문제 설명

정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ n ≤ 10,000

### 문제 풀이

```js
function solution(n) {
  const answer = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer.push(i);
      if (n / i === i) continue;
      answer.push(n / i);
    }
  }

  return answer.sort((a, b) => a - b);
}
```

- 요구사항대로 구현함.
