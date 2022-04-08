// 10817번 세 수

// const numbers = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => el * 1);

const numbers = [10, 20, 30];

const number = quickSelect(numbers, 1, 0, numbers.length - 1);
console.log(number);

function quickSelect (arr, kth, left, right) {
  if (right - left <= 0) {
    // 수가 하나면, 바로 반환해준다.
    return arr[left]; 
  }

  // pivotIndex는 partition 함수를 통해
  // 전체 중 올바른 위치에 정렬된다.
  const pivotIndex = partition(arr, left, right);
  if (kth < pivotIndex) {
    // 찾을 수의 index가 pivotIndex보다 작으면
    // pivotIndex 이하를 다시 탐색한다.
    return quickSelect(arr, kth, left, pivotIndex - 1);
  } else if (kth > pivotIndex) {
    // 찾을 수의 index가 pivotIndex보다 작으면
    // pivotIndex 이상을 다시 탐색한다.
    return quickSelect(arr, kth, pivotIndex + 1, right);
  } else {
    // 찾을 수의 index와 pivotIndex와 같다면
    // pivotIndex의 수를 반환한다.
    return arr[pivotIndex];
  }
}

// partitioning을 통해, pivot은 전체 중 올바른 위치에 놓아짐.
// 그리고 해당 index를 반환해줌.
function partition(arr, left, right) {
  const pivotIndex = right;
  const pivot = arr[pivotIndex];
  right--;

  while (true) {
    while (arr[left] < pivot) {
      // left 포인터의 pivot 값보다 작으면,
      // left 포인터의 값을 한 칸 오른쪽으로 이동한다.
      left++;
    }
    while (arr[right] > pivot) {
      // rigth 포인터의 pivot 값보다 크면,
      // rigth 포인터의 값을 한 칸 왼쪽으로 이동한다.
      right--;
    }
    if (left >= right) {
      // left 포인터와 right 포인터가 겹치면,
      // swap을 종료한다.
      break;
    } else {
      // left와 right 포인터의 이동이 종료된 시점,
      // left 포인터와 right 포인터가 만나지 않았으면
      if (arr[left] === arr[right]) {
        // left 포인터와 right 포인터의 값이 같으면,
        // swap을 종료한다. (수가 같음)
        break;
      } else {
        // left 포인터와 right 포인터의 값이 다르면,
        // left 포인터와 right 포인터가 선택한 수를 swap 한다
        swap(arr, left, right);
      }
    }
  }
  // 왼쪽과 오른쪽이 pivot을 기준으로 나눠졌으면
  // pivot과 left 수를 swap 한다.
  swap(arr, left, pivotIndex);
  // 이후, left 수를 반환한다.
  // 이 때, left는 pivotIndex보다 작고, 가장 큰 수로
  // k번째 수가 된다.
  return left;
}

// swap 함수
function swap(arr, left, right) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}