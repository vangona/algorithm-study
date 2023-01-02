// 파라메트릭 서치로 접근
function solution(A, B) {
  let answer = 0;
  const visitedArr = new Array(B.length).fill(false);
  B.sort((a, b) => a - b);

  const _binarySearch = (target) => {
    let low = 0;
    let high = B.length - 1;
    let mid = Math.floor((low + high) / 2);
    let bestScore = B[mid];
    let minIndex = 0;

    while (high >= low) {
      // 방문했던 수라면 index를 1씩 증가시켜서 확인한다. (더 큰 값을 찾고 있기 때문)
      if (visitedArr[mid]) {
        for (let i = mid + 1; i < B.length; i++) {
          if (!visitedArr[i]) {
            mid = i;
            bestScore = B[mid];
            break;
          }
        }
        for (let i = minIndex; i < B.length; i++) {
          if (!visitedArr[i]) {
            minIndex = i;
            visitedArr[i] = true;
            return B[minIndex];
          }
        }
      }

      // 최적의 수가 찾는 수보다 작거나 같으면 증가시킨다.
      if (bestScore <= target) {
        low = mid + 1;
        mid = Math.floor((low + high) / 2);
        bestScore = B[mid];
      } else {
        // 최적의 수가 찾는 수보다 크다면 한 칸 낮춰서 확인해본다.
        const tempMid = mid - 1;

        // 만약 target보다 작아졌다면, 현재 bestScore가 최선의 수
        if (B[tempMid] < target) {
          visitedArr[mid] = true;
          return bestScore;
        }

        // 여전히 크다면, bestScore를 찾기위해 이진탐색을 진행한다.
        high = mid - 1;
        mid = Math.floor((low + high) / 2);
        bestScore = B[mid];
      }
    }

    // 반복문에서 최적의 수를 찾지 못했으면, 현재 가지고 있는 수 중 가장 작은 수를 반환한다.
    for (let i = minIndex; i < B.length; i++) {
      if (!visitedArr[i]) {
        minIndex = i;
        visitedArr[i] = true;
        return B[minIndex];
      }
    }
  };

  for (let i = 0; i < A.length; i++) {
    const bestScore = _binarySearch(A[i]);
    if (bestScore > A[i]) answer++;
  }

  return answer;
}
