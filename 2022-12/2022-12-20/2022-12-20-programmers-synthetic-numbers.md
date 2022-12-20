## 합성수 찾기

### 문제 설명

약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ n ≤ 100

### 첫번째 풀이

```js
const solution = (n) => {
  let answer = 0;
  for (let i = 4; i <= n; i++) {
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        answer++;
        break;
      }
    }
  }
  return answer;
};
```

- 단순한 소수 찾기이다.
- 더 나은 방법이 없을지 고민했다.
- 팀원중에 한 분이 에라토스테네스의 체를 응용하는 방법에 대해 의견을 제시해주셨다.

### 두번째 풀이

```js
const solution = (n) => {
  const screener = new Array(n + 1).fill(false);
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (screener[i]) continue;

    let multiplier = 2;
    while (i * multiplier <= n) {
      screener[i * multiplier] = true;
      multiplier++;
    }
  }

  return screener.filter((result) => result).length;
};
```

- 이처럼 코드를 쓰게 되면, 반복문에 대한 시간 복잡도도 줄어들고 약수의 개수에 따라 분기 처리를 하기가 더 쉬워진다.
