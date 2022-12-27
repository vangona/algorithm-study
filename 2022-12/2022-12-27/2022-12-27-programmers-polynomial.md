## 다항식 더하기

### 문제 설명

한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

### 제한사항

- 0 < polynomial에 있는 수 < 100
- polynomial에 변수는 'x'만 존재합니다.
- polynomial은 0부터 9까지의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.
- 항과 연산기호 사이에는 항상 공백이 존재합니다.
- 공백은 연속되지 않으며 시작이나 끝에는 공백이 없습니다.
- 하나의 항에서 변수가 숫자 앞에 오는 경우는 없습니다.
- " + 3xx + + x7 + "와 같은 잘못된 입력은 주어지지 않습니다.
- "012x + 001"처럼 0을 제외하고는 0으로 시작하는 수는 없습니다.
- 문자와 숫자 사이의 곱하기는 생략합니다.
- polynomial에는 일차 항과 상수항만 존재합니다.
- 계수 1은 생략합니다.
- 결괏값에 상수항은 마지막에 둡니다.
- 0 < polynomial의 길이 < 50

### 문제풀이

```js
function solution(polynomial) {
  const answer = [0, 0];
  const splitted = polynomial.split(" + ");

  if (splitted.length === 1) return polynomial;

  splitted.forEach((term) => {
    if (term[term.length - 1] !== "x") {
      answer[1] += term * 1;
      return;
    }

    answer[0] += term === "x" ? 1 : term.slice(0, term.length - 1) * 1;
  });

  if (answer[0] === 1) answer[0] = "";
  answer[0] += "x";
  if (answer[0] === "0x") answer.shift();
  if (answer[1] === 0) answer.pop();

  return answer.join(" + ");
}
```

- 요구사항대로 풀이하였으나 리팩토링이 필요함.

### 리팩토링

```js
const filterPolynomial = (polynomialStr) => {
  const validTerm = new RegExp("[0-9]*x|[0-9]+", "g");
  return polynomialStr.match(validTerm);
};

const getPolynomialResult = (polynomialArr) => {
  const result = [0, 0];
  polynomialArr.forEach((term) => {
    if (term[term.length - 1] !== "x") {
      result[1] += parseInt(term);
      return;
    }

    result[0] += term === "x" ? 1 : parseInt(term);
  });

  return result;
};

const formatPolynomial = (xNumber, constant) => {
  if (!xNumber) return [constant];

  const result = [];
  xNumber === 1 ? result.push("x") : result.push(`${xNumber}x`);
  if (constant) result.push(constant);

  return result;
};

function solution(polynomial) {
  const filtered = filterPolynomial(polynomial);
  const [x, constant] = getPolynomialResult(filtered);
  const answer = formatPolynomial(x, constant);

  return answer.join(" + ");
}
```

- 읽기는 쉬워졌으나 코드가 너무 길고 느리다.

### 두번째 리팩토링

```js
function solution(polynomial) {
  const answer = [0, 0];
  const splitted = polynomial.split(" + ");

  if (splitted.length === 1) return polynomial;

  splitted.forEach((term) => {
    let index = 0;
    if (term[term.length - 1] !== "x") index = 1;

    answer[index] += term === "x" ? 1 : parseInt(term);
  });

  if (!answer[0]) return `${answer[1]}`;
  if (!answer[1]) answer.pop();
  answer[0] === 1 ? (answer[0] = "x") : (answer[0] += "x");

  return answer.join(" + ");
}
```
