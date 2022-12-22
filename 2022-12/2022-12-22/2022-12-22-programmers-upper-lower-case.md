## 대문자와 소문자

### 문제 설명

문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ my_string의 길이 ≤ 1,000
- my_string은 영어 대문자와 소문자로만 구성되어 있습니다.

### 문제 풀이

```js
function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    const asciiNum = my_string[i].charCodeAt();
    if (asciiNum <= 90) {
      answer += String.fromCharCode(asciiNum + 32);
    } else {
      answer += String.fromCharCode(asciiNum - 32);
    }
  }
  return answer;
}
```

- 요구사항대로 구현함.
- 정규표현식과 아스키코드 사이에서 고민했으나 정규표현식을 사용하면 직관적일 수 있으나, 아스키코드가 성능상으로 낫다고 판단하였음.
