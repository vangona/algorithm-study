## 최댓값 만들기 (2)

### 문제 설명

정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

### 제한사항

- -10,000 ≤ numbers의 원소 ≤ 10,000
- 2 ≤ numbers 의 길이 ≤ 100

### 문제풀이

```js
function solution(numbers) {
  let max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (max < numbers[i] * numbers[j]) max = numbers[i] * numbers[j];
    }
  }
  return max;
}
```

- 시간복잡도를 개선시킬 수 있는 방법이 없을까?
