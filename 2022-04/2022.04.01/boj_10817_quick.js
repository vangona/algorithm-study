// 10817번 세 수

// const numbers = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => el * 1);

const numbers = [1220, 110, 20, 30, 1];

const number = quickSort(numbers, 0, numbers.length - 1);
console.log(number[1]);

function quickSort (arr, left, right) {
  if (right - left <= 0) {
    // 수가 1개 이하면, 바로 반환해준다.
    return arr;
  }

  // partition 함수를 통해 pivot 값을 정하고,
  // pivotIndex 좌측과 우측에 맞는 수를 배치하고
  // pivotIndex를 전체 중 정렬된 위치를 위치시킨다.
  const pivotIndex = partition(arr, left, right);

  // 좌측과 우측 배열을 분할 정복 해준다.
  // 좌측 배열 정렬
  quickSort(arr, left, pivotIndex - 1);
  // 우측 배열 정렬
  quickSort(arr, pivotIndex + 1, right);
  
  return arr;
}

// partitioning을 통해, pivot은 전체 중 올바른 위치에 놓아짐.
// 그리고 해당 index를 반환해줌.
function partition(arr, left, right) {
  // pivotIndex는 random으로 해도 된다.
  const pivotIndex = right;
  const pivot = arr[pivotIndex];
  // pivot값을 정했기 때문에, 
  // 우측 포인터를 한 칸 옮긴다.
  right--;

  // 아래의 방식은, swap을 하는 방식이다.
  // 이 방식이 메모리 관리에는 더 좋지만,
  // 쉽게 구현해야한다면 left와 right 배열을 만들어서
  // 값을 추가해줘도 된다.
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
  // 이후, left 수를 반환한다. (pivotIndex 위치)
  return left;
}

// swap 함수
function swap(arr, left, right) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}