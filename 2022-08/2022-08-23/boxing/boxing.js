const RANK = "RANK";
const LOG = "LOG";
const WINNER = "WINNER";
const LOSER = "LOSER";
const FIXED = "FIXED";

function solution(n, results) {
  let answer = 0;

  // result : true는 이겨서 FIX, false는 져서 FIX
  const _fixedEventHandler = (opposite, player, result) => {
    if (result) {
      // 이겨서 fix
      if (opposite.RANK === 2) {
        player.FIXED = true;
        player.RANK = n;
      }
    } else {
      // 져서 fix
      if (opposite.RANK === n - 1) {
        player.FIXED = true;
        player.RANK = 1;
      }
    }
  };

  const players = new Map();
  for (let i = 1; i <= n; i++) {
    players.set(i, {
      RANK: 1,
      LOG: 0,
      WINNER: [],
      LOSER: [],
      FIXED: false,
    });
  }

  // results만으로 추론
  results.forEach((result) => {
    const winner = players.get(result[0]);
    const loser = players.get(result[1]);

    winner[LOSER].push(loser);
    winner[LOG]++;
    if (winner[LOG] === n - 1) {
      winner.FIXED = true;
    }
    loser[WINNER].push(winner);
    loser[LOG]++;
    loser[RANK]++;
    if (loser[LOG] === n - 1) {
      loser.FIXED = true;
    }

    if (winner.FIXED) _fixedEventHandler(winner, loser, false);
    if (loser.FIXED) _fixedEventHandler(loser, winner, true);
  });

  players.forEach((value, i) => {
    if (value.FIXED) answer++;
  });

  return answer;
}
