### 백준 문제 풀이 : 구슬을 나누는 경우의 수

```js
function solution(balls, share) {
  const memo = new Array(balls + 1);
  memo[0] = BigInt(1);
  memo[1] = BigInt(1);
  memo[2] = BigInt(2);

  for (let i = 3; i < memo.length; i++) {
    memo[i] = BigInt(i) * memo[i - 1];
  }

  return memo[balls] / (memo[balls - share] * memo[share]);
}
```

- 오랜만에 PS를 하니, BigInt의 존재를 잊고 있었다.
