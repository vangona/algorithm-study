## 숫자 찾기

### 문제 설명

정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

- 0 < num < 1,000,000
- 0 ≤ k < 10
- num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.

### 첫번째 문제 풀이

```js
function solution(num, k) {
  const numArr = num.toString().split("");
  const strK = k.toString();
  if (numArr.includes(strK)) return numArr.indexOf(strK) + 1;
  return -1;
}
```

- 단순히 요구사항대로 구현함.

### 두번째 문제 풀이

```js
function solution(num, k) {
  let index = 0;
  const length = num.toString().length;
  let answer = -1;
  while (num) {
    if (num % 10 === k) answer = length - index;
    num = Math.floor(num / 10);
    index++;
  }
  return answer;
}
```

- 요구사항대로 구현하되 배열이 아닌 숫자의 성질을 이용해서 풀이함.
