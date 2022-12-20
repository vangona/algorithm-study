## 팩토리얼

### 문제 설명

i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 _ 4 _ 3 _ 2 _ 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

- i! ≤ n

### 제한사항

- 0 < n ≤ 3,628,800

### 문제 풀이

```js
const solution = (n) => {
  const memo = new Array(10).fill(0);
  memo[0] = 1;
  memo[1] = 1;
  memo[2] = 2;

  const _memoFactorial = (number) => {
    if (memo[number]) return memo[number];

    memo[number] = number * _memoFactorial(number - 1);
    return memo[number];
  };
  _memoFactorial(10);

  let maxFactorial = 0;
  memo.some((num, index) => {
    if (num <= n) {
      maxFactorial = index;
      return false;
    }

    return true;
  });

  return maxFactorial;
};
```

- 코드는 길지만 읽었을 때 풀이의 흐름을 알 수 있도록 작성함.
