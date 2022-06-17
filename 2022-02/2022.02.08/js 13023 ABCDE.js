// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['8 8', '1 7', '3 7', '4 7', '3 4', '4 6', '3 5', '0 4', '2 7'];

const [N, M] = input[0].split(' ').map(el => el * 1);

let relations = new Array(N);
for(let i = 0; i < N; i++) {
    relations[i] = [];
}

for (let i = 1; i <= M; i++) {
    const line = input[i].split(' ').map(el => el * 1);
    relations[line[0]].push(line[1]);
    relations[line[1]].push(line[0]);
}

let answer = 0;
let visited = [];

for (let i = 0; i < N; i++) {
    visited[relations[i]] = true;
    dfs(i, 0);
    visited[relations[i]] = false;
}
console.log(answer);

function dfs(start, depth) {
    if(answer) return;

    if (depth === 5) {
        answer = 1;
        return;
    }

    const count = relations[start].length
    for (let i = 0; i < count; i++) {
        if (visited[relations[start][i]]) continue;
        visited[relations[start][i]] = true;
        dfs(relations[start][i], depth + 1);
        visited[relations[start][i]] = false;
    }
}