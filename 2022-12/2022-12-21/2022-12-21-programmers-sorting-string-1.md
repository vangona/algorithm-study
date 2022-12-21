## 문자열 정렬하기 (1)

### 문제 설명

문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

### 제한사항

- 1 ≤ my_string의 길이 ≤ 100
- my_string에는 숫자가 한 개 이상 포함되어 있습니다.
- my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.

### 문제 풀이

```js
function solution(my_string) {
  const numbers = my_string.match(/[0-9]/g).map((num) => num * 1);
  return numbers.sort((a, b) => a - b);
}
```

- 요구사항대로 구현함.
- 문자열 중 숫자 탐색을 여러가지 방법으로 구현할 수 있었으나, 제한사항이 적기 때문에 구현이 가장 쉽고 용이한 정규표현식을 이용하였음.
- 정렬도 마찬가지로 내장 sort 메서드를 사용함.
