// 16940 BFS 스페셜 저지

// input 처리
// const fs = require('fs');
// let [N, ...trees, visitOrder] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, ...trees] = ['4', '1 2', '1 3', '2 4', '1 2 3 4'];

// let [N, ...trees, visitOrder] = ['4', '1 2', '1 3', '2 4', '1 2 4 3'];

N = N * 1;
trees = trees.map(line => line.split(' ').map(el => el * 1));
const visitOrder = trees.pop();

let edges = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < trees.length; i++) {
  edges[trees[i][0]].push(trees[i][1]);
  edges[trees[i][1]].push(trees[i][0]);
}
let visited = Array.from({ length: N + 1 });

let answer = 1;
checkOrder();
console.log(answer);

function checkOrder() {
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < edges[i].length; j++) {
      if (edges[i].includes(visitOrder[i + j + 1])) {
          continue;
      } else {
          answer = 0;
          break;
      }
    }
  }
}