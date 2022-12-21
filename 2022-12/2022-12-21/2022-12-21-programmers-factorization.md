## 소인수분해

### 문제 설명

소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 _ 2 _ 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

- 2 ≤ n ≤ 10,000

### 첫번째 풀이

```js
const checkIsPrime = (number) => {
  for (let j = 2; j <= Math.floor(Math.sqrt(number)); j++) {
    if (number % j === 0 && number !== j) return false;
  }

  return true;
};

const getPrimesUnderNumber = (limitNumber) => {
  const primes = [2];

  for (let i = 3; i <= limitNumber; i++) {
    checkIsPrime(i) && primes.push(i);
  }

  return primes;
};

const solution = (n) => {
  const answer = [];
  const primes = getPrimesUnderNumber(n);

  let index = 0;
  while (primes[index] <= n) {
    if (n % primes[index] === 0) {
      answer.push(primes[index]);
    }
    index++;
  }

  return answer;
};
```

- 소수를 구한 뒤, 소수를 순회하며 n이 소수로 나눠지는지 확인하는 방법이다.
