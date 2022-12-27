## 잘라서 배열로 저장하기

### 문제 설명

문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ my_str의 길이 ≤ 100
- 1 ≤ n ≤ my_str의 길이
- my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

### 문제풀이

```js
function solution(my_str, n) {
  const answer = [];
  let index = 0;
  while (index < my_str.length) {
    answer.push(my_str.slice(index, index + n));
    index += n;
  }
  return answer;
}
```

- 요구사항대로 구현함.
