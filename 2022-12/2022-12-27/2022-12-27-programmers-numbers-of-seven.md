## 7의 개수

### 문제 설명

머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

### 제한사항

- 1 ≤ array의 길이 ≤ 100
- 0 ≤ array의 원소 ≤ 100,000

### 문제 풀이

```js
function solution(array) {
  let answer = 0;
  array.forEach((num) => {
    while (num) {
      if (num % 10 === 7) answer++;
      num = Math.floor(num / 10);
    }
  });
  return answer;
}
```

- 요구사항대로 풀이함.
- 수의 위치에 대한 요구사항이 없었기 때문에 나누기와 나머지로 풀이함.
