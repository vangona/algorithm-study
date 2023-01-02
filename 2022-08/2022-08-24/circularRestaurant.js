function solution(n, weak, dist) {
  let answer = Infinity;
  const originCheckedArr = new Array(weak.length).fill(false);
  const usedArr = new Array(dist.length).fill(false);

  const _dfs = (depth, weakIndex, checkedArr) => {
    if (checkedArr.every((point) => point === true)) {
      if (depth < answer) answer = depth;
      return;
    } else if (depth >= dist.length) {
      return;
    }

    let leftFlag = false;
    for (let i = 0; i < dist.length; i++) {
      if (usedArr[i]) continue;

      // 남은 친구가 있음
      leftFlag = true;
      usedArr[i] = true;
      // 시계 방향
      const clockWiseRange = weak[weakIndex] + dist[i];
      const clockWiseCheckedArr = [...checkedArr];
      let clockWiseNextIndex = weakIndex;

      for (let j = weakIndex; j <= weak.length; j++) {
        if (weak[j] <= clockWiseRange) {
          clockWiseCheckedArr[j] = true;
          clockWiseNextIndex = j < weak.length - 1 ? j + 1 : 0;
        }
      }

      if (clockWiseRange > n) {
        // 총 이동거리가 n보다 클 떄
        for (let j = 0; j <= clockWiseRange % n; j++) {
          if (weak[j] <= clockWiseRange % n) {
            clockWiseCheckedArr[j] = true;
            clockWiseNextIndex = j < weak.length - 1 ? j + 1 : 0;
          }
        }
      }

      _dfs(depth + 1, clockWiseNextIndex, clockWiseCheckedArr);

      // 반시계 방향
      const counterClockWiseRange = weak[weakIndex] - dist[i];
      const counterClockWiseCheckedArr = [...checkedArr];
      let counterClockWiseNextIndex = weakIndex;

      for (let j = weakIndex; j >= 0; j--) {
        if (weak[j] >= counterClockWiseRange) {
          counterClockWiseCheckedArr[j] = true;
          counterClockWiseNextIndex = j > 0 ? j - 1 : weakIndex + 1;
        }
      }

      if (counterClockWiseRange < 0) {
        // 총 이동거리가 n보다 클 떄
        for (let j = 0; j < weakIndex; j++) {
          if (weak[j] >= clockWiseRange + n) {
            counterClockWiseCheckedArr[j] = true;
            counterClockWiseNextIndex = j > 0 ? j - 1 : weakIndex + 1;
          }
        }
      }

      _dfs(depth + 1, counterClockWiseNextIndex, counterClockWiseCheckedArr);

      // 사용 취소
      usedArr[i] = false;
    }
  };

  for (let i = 0; i < weak.length; i++) {
    _dfs(0, weak[i], originCheckedArr);
  }

  return answer === Infinity ? -1 : answer;
}
