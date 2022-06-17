// 1966번 프린터 큐

let [T, ...cases] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

T = T * 1;
let answer = [];

for (let i = 0; i < cases.length; i += 2) {
  let [N, M] = cases[i].split(' ').map(el => el * 1);
  const queue = cases[i + 1].split(' ').map(el => el * 1);
  let count = 1;

  while(true) {
    const highestPriority = Math.max(...queue);
    const currDocPriority = queue.shift();

    if (currDocPriority < highestPriority) {
      queue.push(currDocPriority);
    } else {
      if (M === 0) {
        answer.push(count);
        break;
      }
      count++;
    }

    if (M > 0) {
      M--;
    } else {
      M = queue.length - 1;
    }
  }
}

console.log(answer.join('\n'));