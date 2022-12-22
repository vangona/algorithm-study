## 삼각형의 완성조건 (1)

### 문제 설명

선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

### 제한사항

- sides의 원소는 자연수입니다.
- sides의 길이는 3입니다.
- 1 ≤ sides의 원소 ≤ 1,000

### 문제 풀이

```js
function solution(sides) {
  const max = Math.max(...sides);
  const maxIndex = sides.indexOf(max);
  const answer =
    sides.reduce((acc, curr, index) => {
      if (index === maxIndex) return acc;
      return acc + curr;
    }) > max
      ? 1
      : 2;
  return answer;
}
```

- 요구사항대로 구현함.
- 최대값과 최대 값의 위치를 찾고, 나머지를 더하여 비교한 결과를 반환함.
- 배열의 길이가 3 밖에 되지 않으니 그냥 일일히 비교하는게 직관적이고 간단할 수는 있으나, 소프트웨어와 어울리지 않아서 이와 같이 풀이함.
