// 서울 지하철 2호선

// const fs = require('fs');
// let [N, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, ...lines] = ['12', '1 3', '3 4', '4 5', '5 6', '6 7', '7 8', '8 4', '2 3', '7 9', '9 12', '7 10', '10 11'];

// let [N, ...lines] = ['4', '1 3', '4 3', '4 2', '1 2'];

// let [N, ...lines] = ['6', '1 2', '3 4', '6 4', '2 3', '1 3', '3 5'];

N = N * 1;
lines = lines.map(line => line.split(' ').map(el => el * 1));

const edges = Array.from({ length : N + 1 }, () => []);
for (let i = 0; i < N; i++) {
  edges[lines[i][0]].push(lines[i][1]);
  edges[lines[i][1]].push(lines[i][0]);
}

let dfsVisited = Array.from({ length : N + 1 });
let ringLine = [];
let ringFlag = false;
let answer = Array.from({ length : N });

dfs(1, 1, 0);
bfs(ringLine);
console.log(answer.join(' '));

function dfs(depth, node, prev) {
  for (let i = 0; i < edges[node].length; i++) {
    if (edges[node][i] !== prev && dfsVisited[edges[node][i]]) {
      ringLine = ringLine.filter((number, index) => index >= ringLine.indexOf(edges[node][i]));
      ringFlag = true;
      return;
    }
        
    if (dfsVisited[edges[node][i]]) continue;

    ringLine.push(edges[node][i]);    
    dfsVisited[edges[node][i]] = true;
    dfs(depth, edges[node][i], node);
    if (ringFlag) return;
    ringLine.pop();    
    dfsVisited[edges[node][i]] = false;
  }
}

function bfs(ringLine) {
  let willVisit = [];
  let bfsVisited = new Array(N + 1);

  for (let i = 0; i < ringLine.length; i++) {
      answer[ringLine[i] - 1] = 0;
      bfsVisited[ringLine[i]] = true;
  }

  for (let i = 0; i < ringLine.length; i++) {
    willVisit.push([ringLine[i], 0]);
  }

  while (willVisit.length) {
    const [node, distance] = willVisit.shift();

    for (let i = 0; i < edges[node].length; i++) {
      if (bfsVisited[edges[node][i]]) continue;
    
      answer[edges[node][i] - 1] = distance + 1;
      willVisit.push([edges[node][i], distance + 1]);
      bfsVisited[edges[node][i]] = true;
    }
  }
}