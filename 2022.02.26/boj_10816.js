// 10816번 숫자 카드 2

/// input 처리
// const fs = require('fs');
// let [N, cards, M, targets] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, cards, M, targets] = ['10', '6 3 2 10 10 10 -10 -10 7 3', '8', '10 9 -5 2 3 4 5 -10'];

solution(N, cards, M, targets);

function solution(N, cards, M, targets) {
  N = N * 1;
  cards = cards.split(' ').map(el => el * 1);
  M = M * 1;
  targets = targets.split(' ').map(el => el * 1);
    
  // 갯수를 파악할 수 있는 해시테이블을 만든다.
  let cardObj = {};
  for (let i = 0; i < N; i++) {
    if (cardObj[cards[i]]) {
      cardObj[cards[i]] += 1;
    } else {
      cardObj[cards[i]] = 1;    
    }
  }

  // 해시 테이블을 이용해 중복이 제거된 배열을 만들어준다.
  const filteredCards = Object.keys(cardObj).map(el => el * 1).sort((a, b) => a - b);

  // 답안을 채운다.
  let answer = '';
  for (let i = 0; i < M; i++) {
    const result = binarySearch(targets[i], filteredCards, cardObj);
    answer += result + ' ';
  }
    
  console.log(answer)
}

// 이분탐색 함수
function binarySearch(target, array, cardObj) {
  let lower = 0;
  let upper = array.length - 1;

  while (true) {
    const mid = Math.floor((lower + upper) / 2);

    // 찾았으면 1을 반환
    if (array[mid] === target) return cardObj[array[mid]];
    // 위와 아래의 경계값이 같으면 탐색 종료
    if (lower >= upper) return 0;

    // 둘 다 아니면 탐색 범위 변경
    if (array[mid] < target){
        lower = mid + 1;
    } else {
        upper = mid - 1;
    }
  }
}