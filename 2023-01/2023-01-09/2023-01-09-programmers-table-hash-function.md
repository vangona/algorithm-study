---
layout: post
title: Programmers, 테이블 해시 함수
categories: Algorithm
tags:
  - algorithm
  - programmers
  - level2
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

<center>

# Level 2. 테이블 해시 함수

</center>

---

## 테이블 해시 함수

### 문제 설명

완호가 관리하는 어떤 데이터베이스의 한 테이블은 모두 정수 타입인 컬럼들로 이루어져 있습니다. 테이블은 2차원 행렬로 표현할 수 있으며 열은 컬럼을 나타내고, 행은 튜플을 나타냅니다.
첫 번째 컬럼은 기본키로서 모든 튜플에 대해 그 값이 중복되지 않도록 보장됩니다. 완호는 이 테이블에 대한 해시 함수를 다음과 같이 정의하였습니다.

해시 함수는 col, row_begin, row_end을 입력으로 받습니다.
테이블의 튜플을 col번째 컬럼의 값을 기준으로 오름차순 정렬을 하되, 만약 그 값이 동일하면 기본키인 첫 번째 컬럼의 값을 기준으로 내림차순 정렬합니다.
정렬된 데이터에서 S_i를 i 번째 행의 튜플에 대해 각 컬럼의 값을 i 로 나눈 나머지들의 합으로 정의합니다.
row_begin ≤ i ≤ row_end 인 모든 S_i를 누적하여 bitwise XOR 한 값을 해시 값으로서 반환합니다.
테이블의 데이터 data와 해시 함수에 대한 입력 col, row_begin, row_end이 주어졌을 때 테이블의 해시 값을 return 하도록 solution 함수를 완성해주세요.

### 제한 사항

- 1 ≤ data의 길이 ≤ 2,500
- 1 ≤ data의 원소의 길이 ≤ 500
- 1 ≤ data[i][j] ≤ 1,000,000
- data[i][j]는 i + 1 번째 튜플의 j + 1 번째 컬럼의 값을 의미합니다.
- 1 ≤ col ≤ data의 원소의 길이
- 1 ≤ row_begin ≤ row_end ≤ data의 길이

### 문제 풀이

```js
const sortByCol = (data, col) => {
  const _merge = (left, right) => {
    const sortedArr = [];
    let leftPointer = 0;
    let rightPointer = 0;

    const _pushArrAscByCol = (criteriaCol) => {
      if (left[leftPointer][criteriaCol] < right[rightPointer][criteriaCol]) {
        sortedArr.push(left[leftPointer]);
        leftPointer++;
        return;
      }

      sortedArr.push(right[rightPointer]);
      rightPointer++;
    };
    const _pushArrDesByCol = (criteriaCol) => {
      if (left[leftPointer][criteriaCol] > right[rightPointer][criteriaCol]) {
        sortedArr.push(left[leftPointer]);
        leftPointer++;
        return;
      }

      sortedArr.push(right[rightPointer]);
      rightPointer++;
    };

    while (leftPointer < left.length && rightPointer < right.length) {
      if (left[leftPointer][col] === right[rightPointer][col]) {
        _pushArrDesByCol(0);
        continue;
      }

      _pushArrAscByCol(col);
    }

    return sortedArr.concat(left.slice(leftPointer), right.slice(rightPointer));
  };

  const _mergeSort = (arr) => {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return _merge(_mergeSort(left), _mergeSort(right));
  };

  return _mergeSort(data);
};
const getS_i = (tuple, i) => {
  return tuple.reduce((acc, curr) => acc + (curr % i), 0);
};
const getHash = (S_iArr) => {
  return S_iArr.reduce((acc, curr) => acc ^ curr);
};

const solution = (data, col, row_begin, row_end) => {
  const S_iArr = [];
  const sortedData = sortByCol(data, col - 1);
  for (let i = row_begin; i <= row_end; i++) {
    S_iArr.push(getS_i(sortedData[i - 1], i));
  }
  return getHash(S_iArr);
};
```

- 정렬
  - col번째 컬럼 기준으로 오름차순 정렬
  - col이 같다면 첫번째 컬럼 기준 내림차순 정렬
- 해싱

  - i번째 튜플에 대해 각 컬럼 값을 i로 나눈 나머지들의 합을 S_i라고 한다.
  - row_begin <= i <= row_end 조건에 부합하는 모든 S_i를 누적하여 비트 연산 XOR 한 값을 해시 값으로 반환한다.

- 고민

  - 정렬을 무엇으로해야할까?
  - 경험상 정렬 조건이 분기에 따라 나뉠 때 가장 편리했던 병합 정렬을 사용할까 했는데, 정렬할 대상이 배열이 아닌 행렬이기 때문에 메모리 사용이 클 것이라고 생각되었다.
  - 행렬 전체를 정렬시키는 것이 아니라 정렬 조건과 index를 주어서 index를 정렬시킨 뒤 최종적으로 해당 index로 변경하고자한다.

- 실행결과
  - 최대 시간 21.18ms
  - 최대 메모리 89.2mb

### 리팩토링

```js
const sortByCol = (data, col) => {
  const _merge = (left, right) => {
    const sortedArr = [];
    let leftPointer = 0;
    let rightPointer = 0;

    const _pushArrAscByCol = (criteriaCol) => {
      if (left[leftPointer][criteriaCol] < right[rightPointer][criteriaCol]) {
        sortedArr.push(left[leftPointer]);
        leftPointer++;
        return;
      }

      sortedArr.push(right[rightPointer]);
      rightPointer++;
    };
    const _pushArrDesByCol = (criteriaCol) => {
      if (left[leftPointer][criteriaCol] > right[rightPointer][criteriaCol]) {
        sortedArr.push(left[leftPointer]);
        leftPointer++;
        return;
      }

      sortedArr.push(right[rightPointer]);
      rightPointer++;
    };

    while (leftPointer < left.length && rightPointer < right.length) {
      if (left[leftPointer][col] === right[rightPointer][col]) {
        _pushArrDesByCol(0);
        continue;
      }

      _pushArrAscByCol(col);
    }

    return sortedArr.concat(left.slice(leftPointer), right.slice(rightPointer));
  };

  const _mergeSort = (arr) => {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return _merge(_mergeSort(left), _mergeSort(right));
  };

  return _mergeSort(data);
};

const getS_i = (tuple, i) => {
  return tuple.reduce((acc, curr) => acc + (curr % i), 0);
};

const solution = (data, col, row_begin, row_end) => {
  let answer = 0;
  const sortedData = sortByCol(data, col - 1);
  for (let i = row_begin; i <= row_end; i++) {
    answer ^= getS_i(sortedData[i - 1], i);
  }
  return answer;
};
```

### 내장 sort로 풀기

```js
const solution = (data, col, row_begin, row_end) => {
  let answer = 0;
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) return b[0] - a[0];
    return a[col - 1] - b[col - 1];
  });

  for (let i = row_begin; i <= row_end; i++) {
    answer ^= data[i - 1].reduce((acc, curr) => acc + (curr % i), 0);
  }

  return answer;
};
```

- 최대 시간 13.64ms
- 최대 메모리 89.2mb
