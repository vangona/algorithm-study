// 10817번 세 수

const numbers = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => el * 1);

const sortedNumbers = mergeSort(numbers);
console.log(sortedNumbers[1]);

function mergeSort (numbers) {
  const NUMBERS_LENGTH = numbers.length;
  if (NUMBERS_LENGTH === 1) {
    return numbers;
  }

  const mid = Math.floor(NUMBERS_LENGTH / 2);
  const left = numbers.slice(0, mid);
  const right = numbers.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // 반환할 배열, swap하는 쪽이 메모리로는 낫다.
  // 읽기 쉬운 코드를 위해 사용되어짐.
  const sortedArr = [];
  // 포인터 선언
  let leftPointer = 0;
  let rightPointer = 0;

  while(leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] <= right[rightPointer]) {
      // 왼쪽 포인터가 가리키는 수가 더 작으먄,
      // 반환할 배열에 push 해주고
      // 왼쪽 포인터를 오른쪽으로 한 칸 옮긴다.
      sortedArr.push(left[leftPointer]);
      leftPointer++;
    } else {
      // 오른쪽 포인터가 가리키는 수가 더 작으먄,
      // 반환할 배열에 push 해주고
      // 오른쪽 포인터를 오른쪽으로 한 칸 옮긴다.
      sortedArr.push(right[rightPointer]);
      rightPointer++;
    }
  }

  // 병합하면, 배열 한 쪽은 포인터 이후 요소가 남는다.
  // 한 쪽 배열의 요소들이,
  // 반대쪽 배열의 요소들보다 모두 클 경우
  // 한 쪽 배열의 포인터를 통한 텀색이 먼저 종료되기 때문.
  // 이러한 이유로 양 배열의 남은 요소들을 정렬된 배열에 붙여서 반환
  return sortedArr.concat(left.slice(leftPointer),right.slice(rightPointer));
}