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

  // 답안을 채운다.
  let answer = '';
  for (let i = 0; i < M; i++) {
    if (cardObj[targets[i]]) {
        answer += cardObj[targets[i]] + ' ';
    } else {
        answer += 0 + ' ';
    }
  }
    
  console.log(answer)
}