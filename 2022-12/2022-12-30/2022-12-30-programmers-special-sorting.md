---
layout: post
title: Programmers, 특이한 정렬
categories: Algorithm
tags:
  - algorithm
  - programmers
  - level0
hero: "https://source.unsplash.com/random"
overlay: purple
published: true
---

<center>

# Level 0. 특이한 정렬

</center>

---

## 특이한 정렬

### 문제 설명

정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ n ≤ 10,000
- 1 ≤ numlist의 원소 ≤ 10,000
- 1 ≤ numlist의 길이 ≤ 100
- numlist는 중복된 원소를 갖지 않습니다.

### 문제풀이 - 버블 정렬

```js
const solution = (numlist, n) => {
  const ARR_LENGTH = numlist.length;
  for (let i = 0; i < ARR_LENGTH; i++) {
    for (let j = 0; j < ARR_LENGTH; j++) {
      const gapA = Math.abs(numlist[j] - n);
      const gapB = Math.abs(numlist[j + 1] - n);
      if (j + 1 === ARR_LENGTH) continue;
      if (gapA < gapB) continue;
      if (gapA > gapB || numlist[j] < numlist[j + 1]) {
        const swap = numlist[j];
        numlist[j] = numlist[j + 1];
        numlist[j + 1] = swap;
      }
    }
  }
  return numlist;
};
```

- 정렬 조건 1 : 숫자 n과의 거리가 가까움.
- 정렬 조건 2 : 더 큰 수.
- 버블 정렬 조건을 두 개 주었음.

### 문제풀이 - 삽입 정렬

```js
const solution = (numlist, n) => {
  for (let i = 1; i < numlist.length; i++) {
    const currNum = numlist[i];
    const currGap = Math.abs(currNum - n);
    let index = i;
    while (index > 0) {
      const compareGap = Math.abs(numlist[index - 1] - n);
      if (currGap > compareGap) break;
      if (currGap < compareGap || numlist[index - 1] < currNum) {
        numlist[index] = numlist[index - 1];
        index--;
        continue;
      }
      break;
    }
    numlist[index] = currNum;
  }

  return numlist;
};
```

- 정렬 조건 1 : 숫자 n과의 거리가 가까움.
- 정렬 조건 2 : 더 큰 수.
- 삽입 정렬을 할 때 조건을 두 개 주었음.
- 순서를 바꿀 필요가 없을 때 (현재의 차이가 더 크거나, 차이가 같고 숫자가 작은경우) index를 계산하지 않도록 while문을 break 해줌.

### 문제풀이 - 병합정렬

```js
const solution = (numlist, n) => {
  const merge = (left, right) => {
    const sortedArr = [];
    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < left.length && rightPointer < right.length) {
      const gapA = Math.abs(left[leftPointer] - n);
      const gapB = Math.abs(right[rightPointer] - n);

      if (gapA < gapB) {
        sortedArr.push(left[leftPointer]);
        leftPointer++;
      } else if (gapA === gapB && left[leftPointer] > right[rightPointer]) {
        sortedArr.push(left[leftPointer]);
        leftPointer++;
      } else {
        sortedArr.push(right[rightPointer]);
        rightPointer++;
      }
    }

    return sortedArr.concat(left.slice(leftPointer), right.slice(rightPointer));
  };

  const mergeSort = (numlist) => {
    if (numlist.length === 1) return numlist;
    const mid = Math.floor(numlist.length / 2);
    const left = numlist.slice(0, mid);
    const right = numlist.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  };

  return mergeSort(numlist);
};
```
