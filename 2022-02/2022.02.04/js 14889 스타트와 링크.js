// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['6', '0 1 2 3 4 5', '1 0 2 3 4 5', '1 2 0 3 4 5', '1 2 3 0 4 5', '1 2 3 4 0 5', '1 2 3 4 5 0'];

let [N, ...stats] = input;
stats = stats.map(line => line.split(' ').map(el => parseInt(el)));

let visited = [];
let startSum = 0;
let linkSum = 0;
let diffMin = 10000;

dfs(0);
console.log(diffMin);

function dfs(depth) {
    if (depth >= N) {
        console.log(startSum, linkSum)
        if (diffMin > Math.abs(startSum - linkSum)) diffMin = Math.abs(startSum - linkSum);
        return;
    }

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (i === j || visited[i] || visited[j]) continue;
                startSum += stats[i][j] + stats[j][i];
                visited[i] = true;
                visited[j] = true;
                for (let k = 0; k < N; k++) {
                    for (let l = 0; l < N; l++) {
                        if (k === l || visited[k] || visited[l]) continue;
                        linkSum += stats[k][l] + stats[l][k];
                        visited[k] = true;
                        visited[l] = true;
                        dfs(depth += 4);
                        linkSum -= (stats[k][l] + stats[l][k]);
                        visited[k] = false;
                        visited[l] = false; 
                    }
                }
                startSum -= (stats[i][j] + stats[j][i]);
                visited[i] = false;
                visited[j] = false;
            }
        }
}