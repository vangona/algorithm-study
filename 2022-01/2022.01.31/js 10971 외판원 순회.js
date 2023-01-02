const fs = require('fs');
let W = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(W.shift());
W = W.map(line => line.split(' ').map(el => parseInt(el)));

let first = 0;
let answer = 5000000;
let visited = new Array(N);

for (let i = 0; i < N; i++) {
    visited[i] = true;
    first = i;
    dfs(0, i, 0);
    visited[i] = false;
}
console.log(answer);

function dfs(depth, curr, sum) {
    if (depth === N - 1) {
        if (W[curr][first] !== 0) {
            sum += W[curr][first];
            if (answer > sum) answer = sum;
            return    
        } else {
            return;
        }
    }

    for (let i = 0; i < N; i++) {
        if (W[curr][i] === 0 || visited[i]) continue;
        sum += W[curr][i];
        visited[i] = true;
        dfs(depth + 1, i, sum);
        sum -= W[curr][i];
        visited[i] = false;
    }
}