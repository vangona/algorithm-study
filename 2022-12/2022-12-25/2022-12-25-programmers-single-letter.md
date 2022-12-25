## 한 번만 등장한 문자

### 문제 설명

문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

### 제한사항

- 0 < s의 길이 < 1,000
- s는 소문자로만 이루어져 있습니다.

### 문제 풀이

```js
function solution(s) {
  let answer = "";
  const countArray = new Array(32).fill(0);
  for (let i = 0; i < s.length; i++) {
    countArray[s.charCodeAt(i) - 97]++;
  }
  countArray.forEach((count, index) => {
    if (count === 1) answer += String.fromCharCode(index + 97);
  });
  return answer;
}
```

- 한 번만 등장하는 문자를 찾는다.
- 사전순으로 정렬한다.
- 계수배열과 알파벳 맵 둘 다 O(N)의 시간복잡도를 가지지만, 알파벳 맵은 알파벳 맵을 따로 만들어야하기에 계수배열로 풀이했다.
