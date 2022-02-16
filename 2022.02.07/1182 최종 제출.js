const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, S] = input[0].split(' ').map(el => el * 1);
const numbers = input[1].split(' ').map(el => el * 1);

let visited = new Array(N);
let answer = 0;
let sum = 0;

dfs(0, 0);
console.log(answer);

function dfs(depth, prev) {
    if (depth === N) {
        return;
    }

    for (let i = prev; i < N; i++) {
        if (visited[i]) continue;
        sum += numbers[i];
        visited[i] = true;
        if (sum === S) answer += 1;
        dfs(depth + 1, i);
        sum -= numbers[i];
        visited[i] = false;
    }
}