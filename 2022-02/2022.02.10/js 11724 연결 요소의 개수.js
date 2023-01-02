// input handling
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['6 8', '1 2', '2 5', '5 1', '3 4', '4 6', '5 4', '2 4', '2 3'];

const [N, M] = input[0].split(' ').map(el => el * 1);
let edges = new Array(N + 1);
for (let i = 0; i <= N; i++) {
    edges[i] = [];
}
for (let i = 1; i <= M; i++) {
    const line = input[i].split(' ').map(el => el * 1);
    edges[line[0]].push(line[1]);
    edges[line[1]].push(line[0]);
}

let visited = [];
let count = 0;
const permutation = [];

for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    checkConnected(i);
    count++;
}

console.log(count);

function checkConnected(start) {
    if (visited[start]) return;

    for (let i = 0; i < edges[start].length; i++) {
        visited[start] = true;
        checkConnected(edges[start][i]);
    }
}